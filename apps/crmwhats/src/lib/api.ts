// Typed fetch wrapper for CRM API
// Reads saubh_token from cookie, passes as Bearer header
// On 401: redirects to saubh.tech/login

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.saubh.tech';
const LOGIN_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://saubh.tech';

function getToken(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split('; ')
    .find(row => row.startsWith('saubh_token='));
  return match ? match.split('=')[1] : null;
}

function getLocale(): string {
  if (typeof document === 'undefined') return 'en-in';
  const match = document.cookie
    .split('; ')
    .find(row => row.startsWith('saubh_locale='));
  return match ? match.split('=')[1] : 'en-in';
}

async function request<T>(
  method: string,
  path: string,
  body?: unknown,
): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {};

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (body && !(body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  const url = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  const res = await fetch(url, {
    method,
    headers,
    body: body
      ? body instanceof FormData
        ? body
        : JSON.stringify(body)
      : undefined,
  });

  // Handle 401 — redirect to login
  if (res.status === 401) {
    if (typeof window !== 'undefined') {
      const locale = getLocale();
      window.location.href = `${LOGIN_URL}/${locale}/login?redirect=${encodeURIComponent(window.location.href)}`;
    }
    throw new Error('Unauthorized');
  }

  // Handle other errors
  if (!res.ok) {
    let message = `API error ${res.status}`;
    try {
      const err = await res.json();
      message = err.message || err.error || message;
    } catch {}
    throw new Error(message);
  }

  // Handle 204 No Content
  if (res.status === 204) return {} as T;

  return res.json();
}

// Public API methods
export const api = {
  get: <T>(path: string) => request<T>('GET', path),
  post: <T>(path: string, body?: unknown) => request<T>('POST', path, body),
  patch: <T>(path: string, body?: unknown) => request<T>('PATCH', path, body),
  delete: <T>(path: string) => request<T>('DELETE', path),
  upload: <T>(path: string, formData: FormData) => request<T>('POST', path, formData),
};

export default api;

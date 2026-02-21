'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface UserInfo {
  userid: number | null;
  fname: string;
  usertype: string;
  whatsapp: string;
}

interface UserContextType {
  user: UserInfo | null;
  loading: boolean;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  logout: () => {},
});

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function decodeJwt(token: string): any {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getCookie('saubh_token');
    if (token) {
      const payload = decodeJwt(token);
      if (payload) {
        setUser({
          userid: payload.userid || payload.sub || null,
          fname: payload.fname || payload.name || 'User',
          usertype: payload.usertype || payload.ut || 'BO',
          whatsapp: payload.whatsapp || payload.wa || '',
        });
      }
    }
    setLoading(false);
  }, []);

  const logout = () => {
    document.cookie = 'saubh_token=; Max-Age=0; path=/';
    window.location.href = '/crmwhats';
  };

  return (
    <UserContext.Provider value={{ user, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);

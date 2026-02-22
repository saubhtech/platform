// Shared CRM types for crmwhats app

export interface WaChannel {
  id: string;
  name: string;
  phone: string;
  type: 'EVOLUTION' | 'WABA';
  instanceName: string | null;
  defaultBotEnabled: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface WaContact {
  id: string;
  whatsapp: string;
  name: string | null;
  userId: number | null;
  channelId: string | null;
  isBlocked: boolean;
  optedOut: boolean;
  createdAt: string;
  updatedAt: string;
  conversations?: WaConversation[];
}

export interface WaMessage {
  id: string;
  conversationId: string;
  direction: 'IN' | 'OUT';
  body: string | null;
  mediaUrl: string | null;
  mediaType: 'image' | 'video' | 'audio' | 'document' | null;
  status: 'PENDING' | 'SENT' | 'DELIVERED' | 'READ' | 'FAILED';
  sentAt: string;
  createdAt: string;
}

export interface WaConversation {
  id: string;
  contactId: string;
  channelId: string;
  status: 'OPEN' | 'ASSIGNED' | 'RESOLVED';
  isBot: boolean;
  assignedTo: number | null;
  createdAt: string;
  updatedAt: string;
  contact: Pick<WaContact, 'id' | 'whatsapp' | 'name'>;
  channel: Pick<WaChannel, 'id' | 'name' | 'type'>;
  messages: WaMessage[];
}

export interface WaBroadcast {
  id: string;
  name: string;
  channelId: string;
  body: string;
  status: 'DRAFT' | 'SCHEDULED' | 'SENDING' | 'DONE' | 'FAILED';
  scheduledAt: string | null;
  createdAt: string;
  updatedAt: string;
  channel: Pick<WaChannel, 'id' | 'name' | 'type'>;
  _count?: { recipients: number };
  recipients?: WaBroadcastRecipient[];
}

export interface WaBroadcastRecipient {
  id: string;
  broadcastId: string;
  whatsapp: string;
  status: 'PENDING' | 'SENT' | 'DELIVERED' | 'READ' | 'FAILED';
  sentAt: string | null;
}

export interface BotConfig {
  id: string;
  channelId: string;
  isEnabled: boolean;
  systemPrompt: string | null;
  greetingMessage: string | null;
  handoffKeywords: string[];
}

// API response wrappers
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

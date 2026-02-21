'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ChannelFilter = 'ALL' | 'EVOLUTION' | 'WABA';

interface ChannelContextType {
  selectedChannel: ChannelFilter;
  setSelectedChannel: (ch: ChannelFilter) => void;
}

const ChannelContext = createContext<ChannelContextType>({
  selectedChannel: 'ALL',
  setSelectedChannel: () => {},
});

export function ChannelProvider({ children }: { children: ReactNode }) {
  const [selectedChannel, setSelected] = useState<ChannelFilter>('ALL');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('saubh_channel') : null;
    if (stored === 'EVOLUTION' || stored === 'WABA' || stored === 'ALL') {
      setSelected(stored);
    }
  }, []);

  const setSelectedChannel = (ch: ChannelFilter) => {
    setSelected(ch);
    if (typeof window !== 'undefined') {
      localStorage.setItem('saubh_channel', ch);
    }
  };

  return (
    <ChannelContext.Provider value={{ selectedChannel, setSelectedChannel }}>
      {children}
    </ChannelContext.Provider>
  );
}

export const useChannel = () => useContext(ChannelContext);

'use client'

import React, { createContext, useContext, useState } from 'react';

type Status = "Live" | "Finished" | "Match preparing" | "all";

interface StatusContextType {
  selectedStatus: Status;
  setSelectedStatus: (status: Status) => void;
}

const StatusContext = createContext<StatusContextType | undefined>(undefined);

export function StatusProvider({ children }: { children: React.ReactNode }) {
  const [selectedStatus, setSelectedStatus] = useState<Status>("all");

  return (
    <StatusContext.Provider value={{ selectedStatus, setSelectedStatus }}>
      {children}
    </StatusContext.Provider>
  );
}

export function useStatus() {
  const context = useContext(StatusContext);
  if (context === undefined) {
    throw new Error('useStatus must be used within a StatusProvider');
  }
  return context;
}
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DeepDiveContextType {
    activeFeatureId: string | null;
    openDeepDive: (id: string) => void;
    closeDeepDive: () => void;
}

const DeepDiveContext = createContext<DeepDiveContextType | undefined>(undefined);

export function DeepDiveProvider({ children }: { children: ReactNode }) {
    const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);

    const openDeepDive = (id: string) => setActiveFeatureId(id);
    const closeDeepDive = () => setActiveFeatureId(null);

    return (
        <DeepDiveContext.Provider value={{ activeFeatureId, openDeepDive, closeDeepDive }}>
            {children}
        </DeepDiveContext.Provider>
    );
}

export function useDeepDive() {
    const context = useContext(DeepDiveContext);
    if (context === undefined) {
        throw new Error('useDeepDive must be used within a DeepDiveProvider');
    }
    return context;
}

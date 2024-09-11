"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

const URL = process.env.NEXT_PUBLIC_API_URL + "/devise"

// Define the context data structure
const CurrencyContext = createContext({
    currency: 'FCFA', // Default currency
    setCurrency: (currency: string) => { }
});

export default function useCurrency() {
    const context = useContext(CurrencyContext);

    if (context === undefined) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
      }
      return context;
}

interface CurrencyProviderProps {
    children: React.ReactNode;
}

export const CurrencyProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [currency, setCurrency] = useState('FCFA');

    // Load the store's default currency from the API or local storage when the app initializes
    useEffect(() => {
        // Assume fetchStoreCurrency is an API call that fetches the store's currency
        const fetchStoreCurrency = async () => {
            const storeCurrency = await fetch(URL).then(res => res.json());
            setCurrency(storeCurrency.currency);
        };

        fetchStoreCurrency();
    }, []);

    return (
        <>
            <CurrencyContext.Provider value={{ currency, setCurrency }}>
                {children}
            </CurrencyContext.Provider>
        </>

    );
};

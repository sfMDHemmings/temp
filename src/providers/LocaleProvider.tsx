'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type LocaleContextType = {
    locale: string;
    // setLocale: (locale: string) => void;
};

type LocaleProviderProps = {
    children: React.ReactNode;
};

// const LocaleContext = createContext<LocaleContextType | undefined>(undefined);
export const LocaleContext = createContext({} as LocaleContextType);

// export const useLocale = () => useContext(LocaleContext);
export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (context === undefined) {
        throw new Error('useLocale must be used within a LocaleProvider');
    }
    return context;
};

// TODO: testing just using this as a helper function and no state
const checkLocale = (url: string) => {
    // TODO: This is a rough test. We will need to check this based on URL Params so it works on sub pages
    // But for production using /us/ in the URL, probably best using Regex.
    switch (true) {
        // localhost:3000/us/
        case url.includes('http://localhost:3000/?locale=us'): // TODO: Way of testing local environment - Homepage only
            return 'us';
        // localhost:3000/es/
        case url.includes('http://localhost:3000/?locale=es'): // TODO: Way of testing local environment - Homepage only
            return 'es';
        default:
            return 'gb';
    }
};

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
    const [locale, setLocale] = useState<string>('uk');

    useEffect(() => {
        const url = window.location.href;
        const getLocale = checkLocale(url);
        setLocale(getLocale);
    }, []);

    // return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
    return <LocaleContext.Provider value={{ locale }}>{children}</LocaleContext.Provider>;
};

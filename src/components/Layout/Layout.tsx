'use client';
import { useEffect, ReactNode } from 'react';

interface LayoutProps {
    uid?: string | undefined;
    children: ReactNode;
    pageClass?: string | undefined;
}

const Layout = ({ children, pageClass }: LayoutProps) => {
    useEffect(() => {
        if (pageClass) {
            document.body.classList.add(`page--${pageClass}`);

            // returned function will be called on component unmount
            return () => {
                document.body.classList.remove(`page--${pageClass}`);
            };
        }
    }, []);

    return (
        <main
            id="main"
            role="main"
        >
            {children}
        </main>
    );
};

export default Layout;

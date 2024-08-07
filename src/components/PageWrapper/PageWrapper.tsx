// components/PageWrapper/PageWrapper.tsx (Server Component)
import React from 'react';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Layout from '@/components/Layout/Layout';

type PageWrapperProps = {
    locale: string;
    children?: React.ReactNode;
};

const PageWrapper = async ({ locale }: PageWrapperProps) => {
    const client = createClient(); // This should be used for server-side data fetching
    const home = await client.getSingle('homepage');

    return (
        <>
            <SliceZone
                slices={home.data.slices1}
                components={components}
            />
            <Layout
                uid={home.uid}
                pageClass="home"
            >
                <h1>Homepage: {locale}</h1>
                <SliceZone
                    slices={home.data.slices2}
                    components={components}
                />
            </Layout>
        </>
    );
};

export default PageWrapper;

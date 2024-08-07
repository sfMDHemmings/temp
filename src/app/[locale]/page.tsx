/**
 * https://stackoverflow.com/questions/78822023/how-to-get-url-value-in-a-nextjs-14-server-component/78822654#78822654
 */

import React from 'react';
import { notFound } from 'next/navigation';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Layout from '@/components/Layout/Layout';

interface Params {
    locale?: string;
}

// TODO: This doesnt have a function to fetch Metadata
async function Homepage({ params }: { params: Params }) {
    const client = createClient();
    let { locale } = params;
    let page;

    try {
        page = await client.getSingle('homepage', { lang: locale }).catch(() => notFound());
        console.log('HOMEPAGE: ', page);
    } catch (error) {
        console.error('There is an error in [locale]/page.tsx: ', error);
        return notFound();
    }

    return (
        <>
            <SliceZone
                slices={page?.data.slices1}
                components={components}
            />
            <Layout
                uid={page?.uid}
                pageClass="home"
            >
                <SliceZone
                    slices={page?.data.slices2}
                    components={components}
                />
            </Layout>
        </>
    );
}

export default Homepage;

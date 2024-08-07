/**
 * https://stackoverflow.com/questions/78822023/how-to-get-url-value-in-a-nextjs-14-server-component/78822654#78822654
 */

import React from 'react';
import { notFound } from 'next/navigation';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Layout from '@/components/Layout/Layout';

type Params = {
    locale?: string;
    category: string;
};

async function CategoryPage({ params }: { params: Params }) {
    const client = createClient();
    let { locale, category } = params;
    let page;

    // TODO: THIS CODE WORKS, using old implementation.
    // try {
    //     page = await client.getByUID('category', category, { lang: locale }).catch(() => notFound());
    //     console.log('CATEGORY PAGE: ', page);
    // } catch (error) {
    //     console.error('There is an error in [category]/page.tsx: ', error);
    //     return notFound();
    // }

    // TODO: THIS CODE WORKS. DO NOT DELETE.
    // No longer need category contentType
    try {
        page = await client.getByUID('page', category, { lang: locale }).catch(() => notFound());
    } catch (error) {
        console.error('There is an error in [category]/page.tsx: ', error);
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
                pageClass="page"
            >
                <SliceZone
                    slices={page?.data.slices2}
                    components={components}
                />
            </Layout>
        </>
    );
}

export default CategoryPage;

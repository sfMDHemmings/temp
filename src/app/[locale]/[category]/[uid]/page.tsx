// import { Metadata } from 'next';
import { notFound } from 'next/navigation';
// import * as prismic from '@prismicio/client';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Layout from '@/components/Layout/Layout';

type Params = {
    locale?: string;
    uid: string;
};

// Render page
export default async function Page({ params }: { params: Params }) {
    const client = createClient();
    let { locale, uid } = params;
    let page;

    try {
        page = await client.getByUID('page', uid, { lang: locale }).catch(() => notFound());
        console.log('PARAMS 1', params);
    } catch (error) {
        console.log('PARAMS 2', params);
        console.error('There is an error in [uid]/page.tsx: ', error);
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

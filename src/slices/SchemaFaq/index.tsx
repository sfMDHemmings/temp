'use client';
// import { useEffect } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Script from 'next/script';
import UseScriptUnmount from '@/hooks/UseScriptUnmount';

/**
 * Props for `SchemaFaq`.
 */
export type SchemaFaqProps = SliceComponentProps<Content.SchemaFaqSlice>;

/**
 * Component for "SchemaFaq" Slices.
 */
const SchemaFaq = ({ slice }: SchemaFaqProps): JSX.Element => {
    const schema = {
        '@context': 'http://schema.org/',
        '@type': 'FAQPage',
        mainEntity: slice.items.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    UseScriptUnmount('schema-faq');

    return (
        <>
            <Script
                id="schema-faq"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema),
                }}
            />
        </>
    );
};

export default SchemaFaq;

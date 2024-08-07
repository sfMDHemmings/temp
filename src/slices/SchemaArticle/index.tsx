'use client';
import { useEffect } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Script from 'next/script';
import UseScriptUnmount from '@/hooks/UseScriptUnmount';

/**
 * Props for `SchemaArticle`.
 */
export type SchemaArticleProps = SliceComponentProps<Content.SchemaArticleSlice>;

/**
 * Component for "SchemaArticle" Slices.
 */
const SchemaArticle = ({ slice }: SchemaArticleProps): JSX.Element => {
    const { url, headline, imageUrl, datePublished, dateModified, authorName, publisherName, publisherLogoUrl } =
        slice.primary;

    const articleTypeMap: { [key: string]: string | null } = {
        article: 'Article',
        blogposting: 'BlogPosting',
        newsarticle: 'NewsArticle',
    };

    const authorTypeMap: { [key: string]: string | null } = {
        person: 'Person',
        organization: 'Organization',
    };

    const schema = {
        '@context': 'http://schema.org/',
        '@type': articleTypeMap[slice.primary.type.toLowerCase()],
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
        author: {
            '@type': authorTypeMap[slice.primary.authorType],
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: publisherName,
            logo: {
                '@type': 'ImageObject',
                url: publisherLogoUrl,
            },
        },
        headline: headline,
        image: imageUrl,
        datePublished: datePublished,
        dateModified: dateModified,
    };

    // useEffect(() => {
    //     const script = document.getElementById('schema-article');

    //     return () => {
    //         if (script) {
    //             script.remove();
    //         }
    //     };
    // }, []);

    UseScriptUnmount('schema-article');

    return (
        <>
            <Script
                id="schema-article"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema),
                }}
            />
        </>
    );
};

export default SchemaArticle;

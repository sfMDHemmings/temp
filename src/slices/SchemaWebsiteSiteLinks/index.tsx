import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Script from 'next/script';
import UseScriptUnmount from '@/hooks/UseScriptUnmount';

/**
 * Props for `SchemaWebsiteSiteLinks`.
 */
export type SchemaWebsiteSiteLinksProps = SliceComponentProps<Content.SchemaWebsiteSiteLinksSlice>;

/**
 * Component for "SchemaWebsiteSiteLinks" Slices.
 */
const SchemaWebsiteSiteLinks = ({ slice }: SchemaWebsiteSiteLinksProps): JSX.Element => {
    const { url, target } = slice.primary;

    const schema = {
        '@context': 'http://schema.org/',
        '@type': 'WebSite',
        url: url,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${target}?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };

    UseScriptUnmount('schema-sitelinks');

    return (
        <>
            <Script
                id="schema-sitelinks"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema),
                }}
            />
        </>
    );
};

export default SchemaWebsiteSiteLinks;

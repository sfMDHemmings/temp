import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import config from '../slicemachine.config.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName; // TODO: this is just pulling from the JSON file and not actually needed....

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
// TODO: https://prismic.io/docs/multilingual-templating-nextjs
const routes: prismic.ClientConfig['routes'] = [
    {
        type: 'homepage',
        path: '/:lang?',
    },
    // Category wont be needed in main build
    {
        type: 'category',
        path: '/:lang?/:uid',
    },
    {
        type: 'page',
        path: '/:lang?/:category?/:uid',
        resolvers: {
            category: 'category',
        },
    },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
    const client = prismic.createClient(repositoryName, {
        routes,
        fetchOptions:
            process.env.NODE_ENV === 'production'
                ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
                : { next: { revalidate: 5 } },
        ...config,
    });

    prismicNext.enableAutoPreviews({
        client,
        previewData: config.previewData,
        req: config.req,
    });

    return client;
};

// Link Resolver -- TODO: might not be needed tbc
export const linkResolver = (doc: any) => {
    // Use doc.lang to ensure correct language is used
    const lang = doc.lang || 'en-gb'; // Default to 'en-gb' if lang is missing

    if (doc.type === 'homepage') {
        return `/${lang}`;
    }
    if (doc.type === 'page') {
        return `/${lang}/${doc.uid}`;
    }

    // if (doc.type === 'category') {
    //     return `/${lang}/${doc.uid}`;
    // }

    // Handle other document types as needed
    return `/${lang}`;
};

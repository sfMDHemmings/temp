/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: [
            'images.prismic.io',
            `${process.env.PRISMIC_IMAGE_DOMAIN}`,
            'images.unsplash.com',
            'speedyfreight.com',
        ],
    },
    trailingSlash: true,
};

export default nextConfig;

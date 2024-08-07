import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const LOCALIZED_PATHS = ['en-gb', 'en-us', 'es-es'];

export async function middleware(req: NextRequest) {
    const { pathname, search, locale } = req.nextUrl;

    if (pathname.startsWith('/_next') || pathname.includes('/api/') || PUBLIC_FILE.test(pathname)) {
        return;
    }

    // Normalize pathname to lower case for consistent comparison
    const normalizedPathname = pathname.toLowerCase();

    // Check if the path already includes a locale
    const hasLocale = LOCALIZED_PATHS.some(locale => normalizedPathname.startsWith(`/${locale}`));

    if (!hasLocale) {
        // Redirect to default locale if no locale is present in the path
        const defaultLocale = 'en-gb'; // Your default locale
        const url = new URL(`/${defaultLocale}${pathname}${search}`, req.url);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

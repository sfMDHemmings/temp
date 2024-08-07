export function getConcatenatedLocale(locale: string) {
    let concatenatedLocale;
    switch (locale) {
        case 'gb':
        case 'us':
            concatenatedLocale = `en-${locale}`;
            break;
        case 'es':
            concatenatedLocale = `es-${locale}`;
            break;
        default:
            concatenatedLocale = `en-gb`;
    }
    return concatenatedLocale;
}

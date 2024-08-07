import '../../src/inc/scss/main.scss';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
                <script
                    async
                    defer
                    src="https://static.cdn.prismic.io/prismic.js?new=true&repo=speedyfreight-demo"
                />
            </body>
        </html>
    );
}

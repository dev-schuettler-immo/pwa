import { GoogleFonts } from 'next-google-fonts';
import NextHead from 'next/head';

export default function Head({ children, title }: any) {
    return (
        <>
            <GoogleFonts href='https://fonts.googleapis.com/css2?family=Hind:wght@400;600&display=swap' />
            <NextHead>
                <meta charSet='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta httpEquiv='x-ua-compatible' content='ie=edge' />
                <title>{title}</title>

                {children}
            </NextHead>
        </>
    );
}

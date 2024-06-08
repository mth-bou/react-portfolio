import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import {NextRequest, NextResponse} from "next/server";

let headers = { 'accept-language': 'fr-FR,fr;q=0.5' }
let languages = new Negotiator({ headers }).languages()

import { defaultLocale } from '@/constants/locales';
import { i18n} from "@/i18n-config";

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl

    // Conditionally redirect to the default locale with "/" or " " in the address bar
    if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
        return NextResponse.redirect(
            new URL(pathname.replace(
                `/${defaultLocale}`,
                pathname === `/${defaultLocale}` ? '/' : ''
            ), request.url)
        );
    }

    const pathnameIsMissingLocale = i18n.locales.every(
        locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        return NextResponse.rewrite(
            new URL(`/${defaultLocale}${pathname}${request.nextUrl.search}`, request.nextUrl.href)
        );
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}

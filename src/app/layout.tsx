import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React from "react";

import "./global.scss";
import { NextFontSans } from "@/constants/font";
import { metadata as ConstantMetaData } from "@/constants/metadata";

import { cn } from "@/utils/tailwindMerge";

import Providers from "./providers";

export const fontSans = NextFontSans;

export const metadata = ConstantMetaData;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='nl'>
            <body className={cn("font-sans antialiased", fontSans.variable)}>
                <Providers>{children}</Providers>
            </body>
            <SpeedInsights />
            <Analytics />
        </html>
    );
}

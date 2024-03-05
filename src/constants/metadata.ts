import { Metadata } from "next";

const imageUrl = `${process.env.NEXT_PUBLIC_URL}api/og?route=Home`;

export const metadata: Metadata = {
    title: { default: "Site name", template: "Site name - %s" },
    description: "Site description",
    keywords: [],
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL as string),
    publisher: "Publisher name",
    openGraph: {
        type: "website",
        title: "site name",
        description: "site description",
        siteName: "site name",
        url: process.env.NEXT_PUBLIC_URL,
        images: [
            {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: "site name",
            },
        ],
    },
    icons: [
        {
            url: "/public/favicon.ico",
            sizes: "16x16",
            type: "image/x-icon",
        },
        {
            url: "/public/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
        },
        {
            url: "/public/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
        },
        {
            url: "/public/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
        },
        {
            url: "/public/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
        },
        {
            url: "/public/site.webmanifest",
            rel: "manifest",
        },
        {
            url: "/public/safari-pinned-tab.svg",
            rel: "mask-icon",
        },
        {
            url: "/public/browserconfig.xml",
            rel: "mask-icon",
        },
    ],
};

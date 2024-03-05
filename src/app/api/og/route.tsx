/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
    return new ImageResponse(<div>Hello world!</div>, { width: 1200, height: 630 });
}

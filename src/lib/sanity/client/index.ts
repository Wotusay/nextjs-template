import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const projectId: string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset: string = process.env.NEXT_PUBLIC_SANITY_DATASET ?? ""; // "production"
export const apiVersion: string = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? ""; // "2023-01-01"
export const token: string = process.env.NEXT_PUBLIC_SANITY_TOKEN ?? "";

export const client = createClient({ projectId, dataset, apiVersion, useCdn: false, token });

export const builder = imageUrlBuilder(client);

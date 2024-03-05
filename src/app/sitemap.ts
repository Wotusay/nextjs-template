import { routesSitemap } from "@/constants/routes";

export default async function sitemap() {
    const routes = routesSitemap
        .map((route) => route.path.replace("/", ""))
        .map((route) => ({
            url: `${process.env.NEXT_PUBLIC_URL}${route}`,
            lastModified: new Date().toISOString(),
        }))
        .flat();

    return [...routes];
}

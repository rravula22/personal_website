import { createClient } from "next-sanity";
import createImageURLBuilder from "@sanity/image-url";

type config = {
    projectId: any;
    dataset: string;
    apiVersion: string;
    useCdn: boolean;
}
export const config: config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
}

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageURLBuilder(config).image(source);
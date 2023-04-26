import { SocialBody } from "../typings";
import url from "url";
export const fetchSocials = async () => {
    const path =  "https://" +process.env.NEXT_PUBLIC_BASE_URL + "/api/getSocials";
    const apiUrl = url.parse(path);
    const res = await fetch(apiUrl.href);
    const { socials } = await res.json();
    return socials as SocialBody[];
}
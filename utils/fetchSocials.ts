import { SocialBody } from "../typings";

export const fetchSocials = async () => {
    const path = '/api/getSocials';
    const apiUrl = new URL(path, process.env.NEXT_PUBLIC_BASE_URL);
    const res = await fetch(apiUrl.href);
    const { socials } = await res.json();
    return socials as SocialBody[];
}
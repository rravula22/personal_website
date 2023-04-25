import { SocialBody } from "../typings";

export const fetchSocials = async () => {
    const path = '/api/getSocials';
    const url = process.env.NEXT_PUBLIC_BASE_URL + path;
    const res = await fetch(url);
    const { socials } = await res.json();
    return socials as SocialBody[];
}
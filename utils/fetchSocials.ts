import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { SocialBody } from '../typings';

const query = groq`*[_type == "social"]{ ..., }`;

export const fetchSocials = async (): Promise<SocialBody[]> => {
    return sanityClient.fetch(query);
}
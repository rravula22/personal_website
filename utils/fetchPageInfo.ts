import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { pageInfoBody } from '../typings';

const query = groq`*[_type == "pageInfo"][0]{ ..., }`;

export const fetchPageInfo = async (): Promise<pageInfoBody> => {
    return sanityClient.fetch(query);
}
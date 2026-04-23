import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { experienceBody } from '../typings';

const query = groq`*[_type == "experience"] | order(startDate desc){ ..., }`;

export const fetchExperience = async (): Promise<experienceBody[]> => {
    return sanityClient.fetch(query);
}
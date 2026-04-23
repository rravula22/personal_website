import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { skillsBody } from '../typings';

const query = groq`*[_type == "skill"]{ ..., }`;

export const fetchSkills = async (): Promise<skillsBody[]> => {
    return sanityClient.fetch(query);
}
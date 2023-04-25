import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { groq } from 'next-sanity'
import { experienceBody } from '../../typings'

const query = groq`*[_type == "experience"]{
    ...,
}`

type Data = {
    experiences: experienceBody[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const experiences: experienceBody[] = await sanityClient.fetch(query)
    res.status(200).json( { experiences } );
}
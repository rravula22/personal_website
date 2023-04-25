import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { groq } from 'next-sanity'
import { skillsBody } from '../../typings'

const query = groq`*[_type == "skill"]{
    ...,
}`

type Data = {
    skills: skillsBody[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const skills: skillsBody[] = await sanityClient.fetch(query)
    res.status(200).json( { skills } );
}



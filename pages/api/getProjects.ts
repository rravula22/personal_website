import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { groq } from 'next-sanity'
import { projectsBody } from '../../typings'

const query = groq`*[_type == "project"]{
    ...,
    technologies[]->
}`
type Data = {
    projects: projectsBody[];
}

export default async function handler(

    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const projects: projectsBody[] = await sanityClient.fetch(query)
    res.status(200).json( { projects } );
}



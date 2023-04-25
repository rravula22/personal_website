import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { groq } from 'next-sanity'
import { pageInfoBody } from '../../typings'

const query = groq`*[_type == "pageInfo"]{
    ...,
}`
type Data = {
    pageInfo: pageInfoBody;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const pageInfo: pageInfoBody = await sanityClient.fetch(query)
    res.status(200).json( { pageInfo } );
}
import { pageInfoBody } from "../typings";

export const fetchPageInfo = async () => {
    const path = '/api/getPageInfo';
    const url = process.env.NEXT_PUBLIC_BASE_URL + path;
    const res = await fetch(url);
    const { pageInfo } = await res.json()
    return pageInfo as pageInfoBody
}
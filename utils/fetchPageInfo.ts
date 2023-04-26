import { pageInfoBody } from "../typings";
import url from 'url';
export const fetchPageInfo = async () => {
    const path = "https://" +  process.env.NEXT_PUBLIC_BASE_URL +  '/api/getPageInfo';
    const apiUrl = url.parse(path);
    const res = await fetch(apiUrl.href);
    const { pageInfo } = await res.json()
    return pageInfo as pageInfoBody
}
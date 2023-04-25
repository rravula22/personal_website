import { pageInfoBody } from "../typings";

export const fetchPageInfo = async () => {
    const path = '/api/getPageInfo';
    const apiUrl = new URL(path, process.env.NEXT_PUBLIC_BASE_URL);
    const res = await fetch(apiUrl.href);
    const { pageInfo } = await res.json()
    return pageInfo as pageInfoBody
}
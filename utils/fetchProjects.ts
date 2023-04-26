import { projectsBody } from "../typings";
import url from 'url';

export const fetchProjects = async () => {
    const path =  "https://" + process.env.NEXT_PUBLIC_BASE_URL + '/api/getProjects';
    const apiUrl = url.parse(path);
    const res = await fetch(apiUrl.href);
    const { projects } = await res.json()
    return projects as projectsBody[];
}
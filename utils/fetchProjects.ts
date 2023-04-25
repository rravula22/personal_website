import { projectsBody } from "../typings";

export const fetchProjects = async () => {
    const path = '/api/getProjects';
    const url = process.env.NEXT_PUBLIC_BASE_URL + path;
    const res = await fetch(url);
    const { projects } = await res.json()
    return projects as projectsBody[];
}
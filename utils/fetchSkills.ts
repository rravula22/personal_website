import { skillsBody } from "../typings";

export const fetchSkills = async () => {
    const path = '/api/getSkills';
    const apiUrl = new URL(path, process.env.NEXT_PUBLIC_BASE_URL);
    const res = await fetch(apiUrl.href);
    const { skills } = await res.json()
    return skills as skillsBody[];
}
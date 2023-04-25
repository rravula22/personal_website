import { skillsBody } from "../typings";

export const fetchSkills = async () => {
    const path = '/api/getSkills';
    const url = process.env.NEXT_PUBLIC_BASE_URL + path;
    const res = await fetch(url);
    const { skills } = await res.json()
    return skills as skillsBody[];
}
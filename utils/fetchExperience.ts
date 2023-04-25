import { experienceBody } from "../typings";

export const fetchExperience = async () => {
    const path = '/api/getExperience';
    const apiUrl = new URL(path, process.env.NEXT_PUBLIC_BASE_URL);
    const res = await fetch(apiUrl.href);
    const { experiences } = await res.json()
    return experiences as experienceBody[];
}
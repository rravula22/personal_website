import { experienceBody } from "../typings";

export const fetchExperience = async () => {
    const path = '/api/getExperience';
    const url = process.env.NEXT_PUBLIC_BASE_URL + path;
    const res = await fetch(url);
    const { experiences } = await res.json()
    return experiences as experienceBody[];
}
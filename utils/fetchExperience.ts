import { experienceBody } from "../typings";
import url from 'url';

export const fetchExperience = async () => {
    const path =  "https://" + process.env.NEXT_PUBLIC_BASE_URL + '/api/getExperience';
    const apiUrl = url.parse(path);
    const res = await fetch(apiUrl.href);
    const { experiences } = await res.json()
    return experiences as experienceBody[];
}
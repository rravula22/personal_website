import { skillsBody } from "../typings";
import url from 'url';

export const fetchSkills = async () => {
    const path =  "https://" + process.env.NEXT_PUBLIC_BASE_URL + '/api/getSkills';
    const myURL = url.parse(path);
    const res = await fetch(myURL.href);
    const { skills } = await res.json()
    return skills as skillsBody[];
}
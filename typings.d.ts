interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

interface SocialBody extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

interface pageInfoBody extends SanityBody {
    _type: "pageInfo";
    address: string;
    email: string;
    phoneNumber: string;
    backgroundInformation: string;
    image: Image;
    role: string;
    title: string;
    profileImage: Image;
    socials: SocialBody[];
}

interface experienceBody extends SanityBody {
    _type: "experience";
    Company: string;
    startDate: string;
    jobTitle: string;
    companyImage: Image;
    endDate: string;
    points: string[];
    description: string;
    technologies: skillsBody[];
}

interface skillsBody extends SanityBody {
    _type: "skill";
    title: string;
    progress: number;
    image: Image;
    directionLeft: boolean;
}

interface projectsBody extends SanityBody {
    _type: "project";
    image: Image;
    title: string;
    summary: string;
    technologies: skillsBody[];
}
  

export type { Image, SanityBody, SocialBody, experienceBody, pageInfoBody, projectsBody, skillsBody };


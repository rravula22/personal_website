export type GitHubProject = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  category: "fullstack" | "frontend" | "backend" | "systems" | "ml" | "tools";
};

export const githubProjects: GitHubProject[] = [
  {
    id: 522272738,
    name: "FileShare",
    description:
      "Flask application for file sharing and emailing using AWS services. Allows users to upload files to S3, share via email, and generate pre-signed URLs.",
    html_url: "https://github.com/rravula22/FileShare",
    language: "Python",
    stargazers_count: 2,
    topics: ["flask", "aws", "s3", "python"],
    category: "backend",
  },
  {
    id: 669943663,
    name: "findogy",
    description:
      "Dog Search platform where users can select their favourite breeds and find a dog to adopt.",
    html_url: "https://github.com/rravula22/findogy",
    language: "TypeScript",
    stargazers_count: 1,
    topics: ["typescript", "react", "nextjs"],
    category: "frontend",
  },
  {
    id: 1110928894,
    name: "tech-care",
    description:
      "Patient health monitoring dashboard displaying patient health details and vitals in a responsive web interface.",
    html_url: "https://github.com/rravula22/tech-care",
    language: "TypeScript",
    stargazers_count: 0,
    topics: ["typescript", "healthcare", "dashboard"],
    category: "frontend",
  },
  {
    id: 748986654,
    name: "neo4jbuilder",
    description:
      "A GUI tool that allows you to create nodes and relations in GraphDB using drag-and-drop features.",
    html_url: "https://github.com/rravula22/neo4jbuilder",
    language: "TypeScript",
    stargazers_count: 0,
    topics: ["typescript", "graphdb", "neo4j", "drag-and-drop"],
    category: "fullstack",
  },
  {
    id: 1112123744,
    name: "patient-healthcare-web3",
    description:
      "Decentralized healthcare records application built with Web3 technologies for secure patient data management.",
    html_url: "https://github.com/rravula22/patient-healthcare-web3",
    language: "JavaScript",
    stargazers_count: 0,
    topics: ["web3", "blockchain", "healthcare", "javascript"],
    category: "fullstack",
  },
  {
    id: 1112132111,
    name: "todo-app-amazon",
    description:
      "Feature-rich Todo application with Amazon-inspired architecture and full TypeScript support.",
    html_url: "https://github.com/rravula22/todo-app-amazon",
    language: "TypeScript",
    stargazers_count: 0,
    topics: ["typescript", "react"],
    category: "frontend",
  },
  {
    id: 669947043,
    name: "Automate_AWS_CLI",
    description:
      "Automates AWS IAM console login using Puppeteer to retrieve access keys — headless browser automation.",
    html_url: "https://github.com/rravula22/Automate_AWS_CLI",
    language: "JavaScript",
    stargazers_count: 0,
    topics: ["puppeteer", "aws", "automation", "javascript"],
    category: "tools",
  },
  {
    id: 517476520,
    name: "Interview_scheduler",
    description:
      "Python-based application that simplifies scheduling job interviews with Flask REST API and SQLite storage.",
    html_url: "https://github.com/rravula22/Interview_scheduler",
    language: "Python",
    stargazers_count: 0,
    topics: ["flask", "python3", "sqlite", "python-lambda"],
    category: "backend",
  },
  {
    id: 525417052,
    name: "excel_parser_javascript",
    description:
      "Excel parser in JavaScript using the xlsx library to read and extract structured data from Excel files.",
    html_url: "https://github.com/rravula22/excel_parser_javascript",
    language: "JavaScript",
    stargazers_count: 0,
    topics: ["javascript", "json", "xlsx"],
    category: "tools",
  },
  {
    id: 612835140,
    name: "File_Traversal",
    description:
      "A versatile C program to navigate and analyze directories with custom search flags and file analysis capabilities.",
    html_url: "https://github.com/rravula22/File_Traversal",
    language: "C",
    stargazers_count: 0,
    topics: ["c"],
    category: "systems",
  },
  {
    id: 628803152,
    name: "job_scheduler",
    description:
      "Command-line job scheduler in C supporting up to 8 concurrent jobs, with history tracking and graceful shutdown.",
    html_url: "https://github.com/rravula22/job_scheduler",
    language: "C",
    stargazers_count: 0,
    topics: ["c", "jobs", "scheduler"],
    category: "systems",
  },
  {
    id: 608446480,
    name: "csv_parser_c",
    description:
      "Versatile C program to read, manipulate, and sort CSV data with customizable flags for data processing tasks.",
    html_url: "https://github.com/rravula22/csv_parser_c",
    language: "C",
    stargazers_count: 0,
    topics: ["c", "csv", "data-processing"],
    category: "systems",
  },
  {
    id: 1051452409,
    name: "KNN",
    description:
      "Interactive visual demonstration of the K-Nearest Neighbours classification algorithm with real-time rendering.",
    html_url: "https://github.com/rravula22/KNN",
    language: null,
    stargazers_count: 0,
    topics: ["machine-learning", "knn", "visualization"],
    category: "ml",
  },
  {
    id: 1069848885,
    name: "smart-contract-web",
    description:
      "Smart contract development project for deploying and interacting with Ethereum-based smart contracts.",
    html_url: "https://github.com/rravula22/smart-contract-web",
    language: null,
    stargazers_count: 0,
    topics: ["web3", "smart-contracts", "ethereum"],
    category: "fullstack",
  },
];

export const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  C: "#555555",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Go: "#00ADD8",
  Rust: "#dea584",
};

export const categoryLabels: Record<string, string> = {
  fullstack: "Full Stack",
  frontend: "Frontend",
  backend: "Backend",
  systems: "Systems",
  ml: "ML / AI",
  tools: "Tools",
};

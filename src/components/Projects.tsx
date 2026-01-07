import { IconBrandGithub } from "@tabler/icons-react";

interface Project {
  name: string;
  description: string;
  tools: string[];
  date: string;
}

const projects: Project[] = [
  {
    name: "Comps",
    description: "A python desktop application that consumes an eBay API to present historical stats for trading card sold listings",
    tools: ["MatPlotLib", "PyQt6", "Qt Designer"],
    date: "Jan 2025 - Dec 2025",
  },
  {
    name: "Document Management System",
    description: "A collaborative web app for internal staff to write and publish knowledgebase articles; includes a centralized file store.",
    tools: ["React (Vite)", "Supabase (DB, Auth, Edge Functions, Storage)", "Express", "Axios", "Context API", "React Router"],
    date: "Jan 2025 - Dec 2025",
  },
  {
    name: "ScrapHouse MMA",
    description: "A proof of concept design for an MMA website",
    tools: ["Figma"],
    date: "Jan 2025 - Dec 2025",
  },
  {
    name: "Inventory Manager",
    description: "An internal web app to manage IT inventory assets which include employee access, hardware, software, and vendors.",
    tools: ["React (TanStack Start)", "ASP.NET WebAPI (Controller-based)", "Entity Framework Core", "Microsoft SQL Server", "IIS Manager"],
    date: "Jan 2025 - Dec 2025",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-md overflow-hidden text-background max-w-sm min-w-sm *:p-4 border border-foreground">
      <div className="bg-foreground text-nowrap">
        <h6>{project.name}</h6>
        <span className="inline-flex justify-between border w-full"><>{project.date}</><a href="#" title="Go to GitHub Repo"><IconBrandGithub size={20} className="inline" /></a></span>
      </div>
      <p className="bg-background text-foreground/50">{project.description}</p>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto place-content-center place-items-center">
        <h6 className="tracking-widest text-center mb-6">Projects</h6>
        <div className="flex flex-wrap justify-center gap-8 max-w-sm md:max-w-5xl">
          {projects.map((e) => (
            <ProjectCard project={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

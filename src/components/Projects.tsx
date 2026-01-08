import { IconBrandGithub, IconVideo } from "@tabler/icons-react";

interface Project {
  name: string;
  description: string;
  tools: string[];
  date: string;
  link: string;
  video?: string;
}

const projects: Project[] = [
  {
    name: "Comps",
    description: "A python desktop application that consumes an eBay API to present historical stats for trading card sold listings",
    tools: ["MatPlotLib", "PyQt6", "Qt Designer"],
    date: "Apr 2023 - Jun 2023",
    link: "https://github.com/Aendoarphin/comps_v1",
    video: "https://www.youtube.com/embed/G1poX9Qd7oY?si=cGGPk-fWSM2fVDiV",
  },
  {
    name: "ScrapHouse MMA",
    description: "A proof of concept design for an MMA website",
    tools: ["Figma"],
    date: "Dec 2023 - Jan 2024",
    link: "https://www.figma.com/design/qrIZPap3RHr92xgFleBnE7/Scrap-House",
  },
  {
    name: "Document Management System",
    description: "A collaborative web app for internal staff to write and publish knowledgebase articles; includes a centralized file store.",
    tools: ["React (Vite)", "Supabase (DB, Auth, Edge Functions, Storage)", "Express", "Axios", "Context API", "React Router"],
    date: "Sept 2025 - Nov 2025",
    link: "https://github.com/Aendoarphin/dms",
  },

  {
    name: "Inventory Manager",
    description: "An internal web app to manage IT inventory assets which include employee access, hardware, software, and vendors.",
    tools: ["React (TanStack Start)", "ASP.NET WebAPI (Controller-based)", "Entity Framework Core", "Microsoft SQL Server", "IIS Manager"],
    date: "Sept 2025 - Present",
    link: "https://github.com/Aendoarphin/InventoryClient",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-md overflow-hidden text-background bg-foreground max-w-sm min-w-sm *:p-4">
      <div className="text-nowrap bg-background/5">
        <h6>{project.name}</h6>
        <span className="inline-flex justify-between w-full text-muted">
          <>{project.date}</>
          <span>
            {project.video && (
              <a href={project.video} target="_blank" title="Watch Demo">
                <IconVideo size={20} className="inline mr-2 hover:text-background" />
              </a>
            )}
            <a href={project.link} target="_blank" title="Go to GitHub Repo">
              <IconBrandGithub size={20} className="inline hover:text-background" />
            </a>
          </span>{" "}
        </span>
      </div>
      <p>{project.description}</p>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto place-content-center place-items-center">
        <h6 className="tracking-widest text-center mb-6">Projects</h6>
        <div className="flex flex-wrap justify-center gap-4 max-w-sm md:max-w-5xl">
          {projects.map((e) => (
            <ProjectCard project={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

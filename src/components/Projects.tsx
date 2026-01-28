import { IconBrandFigma, IconBrandGithub, IconVideo, type Icon, type IconProps } from "@tabler/icons-react";

interface Project {
  name: string;
  description: string;
  tools: string[];
  date: string;
  link: string;
  video?: string;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
}

const projects: Project[] = [
  {
    name: "Comps",
    description: "A python desktop application that consumes an eBay API to present historical stats for trading card sold listings",
    tools: ["MatPlotLib", "PyQt6", "Qt Designer"],
    date: "Apr 2023 - Jun 2023",
    link: "https://github.com/Aendoarphin/comps_v1",
    video: "https://www.youtube.com/embed/G1poX9Qd7oY?si=cGGPk-fWSM2fVDiV",
    icon: IconBrandGithub
  },
  {
    name: "ScrapHouse MMA",
    description: "A proof of concept design for an MMA website",
    tools: ["Figma"],
    date: "Dec 2023 - Jan 2024",
    link: "https://www.figma.com/design/qrIZPap3RHr92xgFleBnE7/Scrap-House",
    icon: IconBrandFigma
  },
  {
    name: "Document Management System",
    description: "A collaborative web app for internal staff to write and publish knowledgebase articles; includes a centralized file store.",
    tools: ["React (Vite)", "Supabase (DB, Auth, Edge Functions, Storage)", "Express", "Axios", "Context API", "React Router"],
    date: "Sept 2025 - Nov 2025",
    link: "https://github.com/Aendoarphin/dms",
    icon: IconBrandGithub
  },
  {
    name: "Inventory Manager",
    description: "An internal web app to manage IT inventory assets which include employee access, hardware, software, and vendors.",
    tools: ["React (TanStack Start)", "ASP.NET WebAPI (Controller-based)", "Entity Framework Core", "Microsoft SQL Server", "IIS Manager"],
    date: "Sept 2025 - Present",
    link: "https://github.com/Aendoarphin/InventoryClient",
    icon: IconBrandGithub
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-md overflow-hidden border border-muted text-foreground bg-background w-full sm:max-w-sm hover:shadow-lg transition-shadow duration-300">
      <div className="p-3 sm:p-4 bg-foreground/5">
        <h6 className="text-base sm:text-lg lg:text-xl mb-1 sm:mb-2 truncate">
          {project.name}
        </h6>
        
        <span className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 text-muted text-xs sm:text-sm">
          <span className="whitespace-nowrap">{project.date}</span>
          
          <span className="flex gap-2 items-center">
            {project.video && (
              <a 
                href={project.video} 
                target="_blank" 
                title="Watch Demo"
                className="hover:text-background transition-colors"
              >
                <IconVideo size={18} className="sm:w-5 sm:h-5" />
              </a>
            )}
            <a 
              href={project.link} 
              target="_blank" 
              title="View project"
              className="hover:text-background transition-colors"
            >
              <project.icon size={18} className="sm:w-5 sm:h-5" />
            </a>
          </span>
        </span>
      </div>
      
      <p className="p-3 sm:p-4 text-xs sm:text-sm lg:text-base leading-relaxed">
        {project.description}
      </p>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <h6 className="tracking-widest text-center mb-6 sm:mb-8 lg:mb-12 text-xl sm:text-2xl lg:text-3xl">
          Projects
        </h6>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {projects.map((e, index) => (
            <ProjectCard key={index} project={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

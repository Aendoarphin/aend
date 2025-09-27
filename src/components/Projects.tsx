import { IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";

interface Link {
  label: string;
  url: string;
}

interface Project {
  projectName: string;
  description: string;
  images: string[];
  links: Link[];
}

const projects: Project[] = [
  {
    projectName: "Comps",
    description:
      "A desktop application to streamline value hunting process for dedicated card collectors/sellers; consumes the 'eBay Average Selling Price' API to fetch historical data of sold eBay listings. UI was made using PyQt6 and its designer tool.",
    images: ["/images/comps.png"],
    links: [
      {
        label: "Watch Demo",
        url: "https://www.youtube.com/embed/G1poX9Qd7oY?si=cGGPk-fWSM2fVDiV",
      },
      {
        label: "GitHub",
        url: "https://github.com/Aendoarphin/comps_v1",
      },
    ],
  },
  {
    projectName: "Document Management System",
    description:
      "A BaaS web application for centralized document storage and collaborative article creation, enabling teams to streamline their written procedures. Business logic runs entirely on the Supabase platform which utilizes authentication, relational database (Postgres), edge functions (to run express webserver code), and file storage.",
    images: ["/images/dms-demo.gif"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Aendoarphin/dms",
      },
    ],
  },
  {
    projectName: "ScrapHouse MMA (UI)",
    description:
      "A web design for a mixed martial arts news/rankings site. Created a Figma design for initial concept.",
    images: [
      "/images/sh-design.png",
      "/images/sh-design1.png",
      "/images/sh-design2.png",
    ],
    links: [
      {
        label: "Figma Design",
        url: "https://www.figma.com/design/qrIZPap3RHr92xgFleBnE7/Scrap-House",
      },
    ],
  },
];

export default function Projects() {
  const [tabIndex, setTabIndex] = useState(0);
  const [description, setDescription] = useState(
    projects[tabIndex].description
  );
  const [images, setImages] = useState<Array<string>>(
    projects[tabIndex].images
  );
  const [links, setLinks] = useState(projects[tabIndex].links);

  function handleTabClick(
    index: number,
    description: string,
    images: Array<string>,
    links: Link[]
  ) {
    setTabIndex(index);
    setDescription(description);
    setImages(images);
    setLinks(links);
  }

  return (
    <section
      id="projects"
      className="flex flex-col p-8 justify-self-start animate__animated animate__fadeIn"
    >
      <h3 className=" lg:text-4xl lg:pb-2">Projects</h3>
      <div
        id="tabs"
        className="flex-row flex flex-wrap sm:flex-nowrap *:w-full *:p-2"
      >
        {projects.map((project, index) => (
          <button
            className={`${
              tabIndex === index ? " contrast-100 underline" : " contrast-0"
            }`}
            onClick={() =>
              handleTabClick(
                index,
                project.description,
                project.images,
                project.links
              )
            }
          >
            <p className="text-sm lg:text-xl text-nowrap">
              {project.projectName}
            </p>
          </button>
        ))}
      </div>
      <br />
      <div id="project-content" className="flex flex-col">
        <p className="max-w-4xl lg:text-xl md:text-center lg:max-w-2/3 md:text-balance mx-auto text-start">
          {description}
          <br />
          <br />
          <div className="flex flex-wrap mx-auto max-w-2xl justify-center gap-4">
            {links.map((linkItem) => (
              <a
                href={linkItem?.url}
                target="_blank"
                className="hover:underline flex items-center"
              >
                {links.length > 0 && linkItem?.label}&nbsp;
                <IconExternalLink size={20} className="inline" />
              </a>
            ))}
          </div>
        </p>
        <br />
        <div className={`flex flex-col md:flex-row mx-auto gap-4 max-w-7xl lg:max-w-max justify-center ${images.length > 1 ? "md:*:w-1/4" : ""}`}>
          {images.map((image) => (
            <img src={image} className="object-contain" alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}

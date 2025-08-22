import { IconExternalLink } from "@tabler/icons-react";
import React, { useState } from "react";

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
      "A desktop application to generate views of sold eBay listings; streamlines the value hunting process for dedicated card collectors/sellers by providing valuable insights in the card community.",
    images: ["/src/assets/comps.png", "/src/assets/comps2.png"],
    links: [
      {
        label: "Watch Demo",
        url: "https://www.youtube.com/embed/G1poX9Qd7oY?si=cGGPk-fWSM2fVDiV",
      },
    ],
  },
  {
    projectName: "Document Management System",
    description:
      "A cloud-based platform for centralized document storage and collaborative article creation, enabling teams to streamline their written procedures.",
    images: ["/src/assets/dms.png", "/src/assets/dms2.png"],
    links: [],
  },
  {
    projectName: "ScrapHouse MMA (UI)",
    description:
      "A Figma and web mockup, for a mixed martial arts news/rankings site.",
    images: [
      "/src/assets/sh_home.png",
      "/src/assets/sh_dashboard.png",
      "/src/assets/sh_rankings.png",
    ],
    links: [
      {
        label: "Go to Figma Design",
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
    <section id="projects" className="flex flex-col p-8 justify-self-start animate__animated animate__fadeIn">
      <h3 className="">Projects</h3>
      <div id="tabs" className="flex-row flex *:p-2 border">
        {projects.map((project, index) => (
          <button
            className={`${
              tabIndex === index ? "bg-foreground text-background" : ""
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
            <p className="small">{project.projectName}</p>
          </button>
        ))}
      </div>
      <br />
      <div id="project-content" className="flex flex-col">
        <p className="max-w-4xl text-center text-balance mx-auto">
          {description}
          <br />
          <br />
          {links.map((linkItem) => (
            <a
              href={linkItem?.url}
              target="_blank"
              className="hover:underline flex items-center justify-center"
            >
              {links.length > 0 && linkItem?.label}&nbsp;
              <IconExternalLink size={20} className="inline" />
            </a>
          ))}
        </p>
        <div className="flex flex-row *:m-2 mx-auto">
          {images.map((image) => (
            <img
              src={image}
              className={`${
                images.length > 2 ? "max-w-[25vw]" : "max-w-[40vw]"
              } object-contain place-self-start`}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}

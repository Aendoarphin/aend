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
      "A desktop application to generate views of sold eBay listings; streamlines the value hunting process for dedicated card collectors/sellers by providing valuable insights in the card community.",
    images: ["/images/comps.png", "/images/comps2.png"],
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
      "A serverless web application for centralized document storage and collaborative article creation, enabling teams to streamline their written procedures.",
    images: ["/images/dms.png", "/images/dms2.png"],
    links: [],
  },
  {
    projectName: "ScrapHouse MMA (UI)",
    description:
      "A Figma and web mockup, for a mixed martial arts news/rankings site.",
    images: [
      "/images/sh_home.png",
      "/images/sh_dashboard.png",
      "/images/sh_rankings.png",
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
    <section
      id="projects"
      className="flex flex-col p-8 justify-self-start animate__animated animate__fadeIn"
    >
      <h3 className=" lg:text-6xl lg:pb-2">Projects</h3>
      <div
        id="tabs"
        className="flex-row flex flex-wrap sm:flex-nowrap *:w-full *:p-2"
      >
        {projects.map((project, index) => (
          <button
            className={`cursor-pointer ${
              tabIndex === index ? " contrast-100" : " contrast-0"
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
            <p className="text-sm lg:text-2xl text-nowrap">
              {project.projectName}
            </p>
          </button>
        ))}
      </div>
      <br />
      <div id="project-content" className="flex flex-col">
        <p className="max-w-4xl lg:text-3xl md:text-center lg:max-w-2/3 md:text-balance mx-auto text-start">
          {description}
          <br />
          <br />
          {links.map((linkItem) => (
            <a
              href={linkItem?.url}
              target="_blank"
              className="hover:underline flex items-center justify-center w-max mx-auto"
            >
              {links.length > 0 && linkItem?.label}&nbsp;
              <IconExternalLink size={20} className="inline" />
            </a>
          ))}
        </p>
        <br />
        <div className="flex flex-col mx-auto gap-4 max-w-7xl">
          {images.map((image) => (
            <img src={image} className="" alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}

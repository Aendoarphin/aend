import { useState } from "react";

const projects = [
  {
    projectName: "Comps",
    description:
      "A desktop application to generate views of sold eBay listings; streamlines the value hunting process for dedicated card collectors/sellers. It enables collectors to identify fair prices for buying, bidding, or selling trading cards in the eBay trading card market, providing valuable insights for making informed pricing decisions.",
  },
  {
    projectName: "Document Management System",
    description: "A cloud-based platform for centralized document storage and collaborative article creation, enabling teams to streamline their written procedures.",
  },
  {
    projectName: "ScrapHouse",
    description: "A NextJS web application to view mixed marital arts rankings, news, and upcoming events. Utilizes core NextJS features along with web scraping and data manipulation.",
  },
];

export default function Projects() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section id="projects" className="flex flex-col p-8 *:border">
      <h2 className="place-self-start">Projects</h2>
      <div id="tabs" className="flex-row flex *:p-2 border place-self-start">
        {projects.map((project, index) => (
          <button
            className={`${
              tabIndex === index ? "bg-foreground text-background" : ""
            }`}
            onClick={() => setTabIndex(index)}
          >
            <p className="small">{project.projectName}</p>
          </button>
        ))}
      </div>

      <div id="project-content" className="w-full h-full"></div>
    </section>
  );
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx"

const Projects = () => {
  return (
    <>
      <div id="projects" className="px-6 text-center flex flex-col gap-6 md:px-28 lg:px-40 xl:px-60">
        <h1 className="font-bold text-4xl text-center py-6">
            Projects
        </h1>
        <hr className="" />
        <div className="text-left flex flex-col gap-4">
          <a rel="noopener" href="https://github.com/Aendoarphin/comps_v1" target="_blank" className="font-bold">Comps</a>
          <p>A desktop app for trading card collectors. Provides sales information and price trends for single trading cards listed on eBay.</p>
          <iframe height={300} src="https://www.youtube.com/embed/G1poX9Qd7oY?si=cGGPk-fWSM2fVDiV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <br />
          <a rel="noopener" href="https://github.com/Aendoarphin/pyforcam" target="_blank" className="font-bold">Tool Life Utility</a>
          <p>Another desktop app which is essentially an XML reader. It fetches information from a local server and displays the processed information on the UI.</p>
          <img src="src/assets/images/tlu_sample.png" alt="project image sample" />
          <br />
          <h1 className="font-bold text-4xl text-center py-6">
            Backlog
          </h1>
          <hr className="" />
          <i className="block text-center">Ongoing/planned projects</i>
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="font-bold">Scraphouse</h1>
              A unified platform to provide aggregated MMA content
              <div className="text-center p-16">
                <Carousel className="">
                  <CarouselContent className="items-center">
                    <CarouselItem><img src="./src/assets/images/figma/p1.png" alt="" /></CarouselItem>
                    <CarouselItem><img src="./src/assets/images/figma/p2.png" alt="" /></CarouselItem>
                    <CarouselItem><img src="./src/assets/images/figma/p3.png" alt="" /></CarouselItem>
                    <CarouselItem><img src="./src/assets/images/figma/p4.png" alt="" /></CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
            </div>
            </div>
            <div>
              <h1 className="font-bold">Untitled</h1>
              An "e-learning platform" with a documentation-like structure, providing online training and incorporating company-defined guidelines.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;
import { IconBrandCSharp, IconBrandDocker, IconBrandFirebase, IconBrandJavascript, IconBrandMongodb, IconBrandReact, IconBrandSupabase, IconBrandTypescript, IconBrandVercel, IconBrandVite } from "@tabler/icons-react";

function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto text-center max-w-4xl">
        <h1 className="tracking-wide mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl">
          Hi, I'm Arhon
        </h1>

        <p className="text-pretty max-w-2xl mx-auto text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 px-4">
          As an aspiring software engineer, I focus on designing and building applications that enhance user experiences and reduce operational friction. This site highlights my professional journey and technical growth.
        </p>

        <h4 className="tracking-wide mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl">
          Technologies
        </h4>

        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 max-w-3xl mx-auto">
          <IconBrandReact 
            title="React" 
            className="text-sky-400 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-1 hover:scale-110 transition-transform" 
          />
          <IconBrandTypescript 
            title="TypeScript" 
            className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-1 hover:scale-110 transition-transform" 
          />
          <IconBrandJavascript 
            title="JavaScript" 
            className="text-yellow-400 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-1 hover:scale-110 transition-transform" 
          />
          <IconBrandCSharp 
            title="C#" 
            className="text-purple-600 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-1 hover:scale-110 transition-transform" 
          />
          <IconBrandDocker 
            title="Docker" 
            className="text-sky-500 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-1 hover:scale-110 transition-transform" 
          />
          <IconBrandVite 
            title="Vite" 
            className="text-violet-500 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-1 hover:scale-110 transition-transform" 
          />
          <IconBrandMongodb 
            title="MongoDB" 
            className="text-green-500 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-1 hover:scale-110 transition-transform" 
          />
          <IconBrandFirebase 
            title="Firebase" 
            className="text-amber-400 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-1 hover:scale-110 transition-transform" 
          />
          <IconBrandSupabase 
            title="Supabase" 
            className="text-emerald-500 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-1 hover:scale-110 transition-transform" 
          />
          <IconBrandVercel 
            title="Vercel" 
            className="text-white w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-1 hover:scale-110 transition-transform" 
          />
        </div>
      </div>
    </section>
  );
}

export default About;

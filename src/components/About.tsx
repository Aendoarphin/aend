import { IconBrandCSharp, IconBrandDocker, IconBrandFirebase, IconBrandJavascript, IconBrandMongodb, IconBrandReact, IconBrandSupabase, IconBrandTypescript, IconBrandVercel, IconBrandVite } from "@tabler/icons-react";

function About() {
  return (
    <section id="about">
      <div className="mx-auto text-center">
        <h1 className="tracking-wide mb-2">Hi, I'm Arhon</h1>

        <p className="text-pretty w-max">
          As an aspiring software engineer, I focus on designing and building applications that enhance user experiences and reduce operational friction. This site highlights my professional journey and technical growth.
        </p>

        <h4 className="tracking-wide mb-2">Technologies</h4>

        <div className="flex justify-center *:size-10 *:stroke-1 *:grow gap-3">
          <IconBrandReact title="React" className="text-sky-400" />
          <IconBrandTypescript title="TypeScript" className="text-blue-600" />
          <IconBrandJavascript title="JavaScript" className="text-yellow-400" />
          <IconBrandCSharp title="C#" className="text-purple-600" />
          <IconBrandDocker title="Docker" className="text-sky-500" />
          <IconBrandVite title="Vite" className="text-violet-500" />
          <IconBrandMongodb title="MongoDB" className="text-green-500" />
          <IconBrandFirebase title="Firebase" className="text-amber-400" />
          <IconBrandSupabase title="Supabase" className="text-emerald-500" />
          <IconBrandVercel title="Vercel" className="text-white" />
        </div>
      </div>
    </section>
  );
}

export default About;

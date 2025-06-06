import { Fragment } from "react";
import { Button } from "@/components/Button";
import { Description, Header1 } from "@/components/Headers";
import { Icons } from "@/components/Icons";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/config";
import { meta } from "@/config";

export const metadata = {
 title: "Side Projects",
 description: "Explore some of my projects that I worked on.",
};

export default function Page() {
 return (
  <div className="mb-16 mt-20 flex flex-col items-start justify-center">
   <Header1>Side Projects</Header1>
   {/* <Description className="mb-16">Recent projects I have worked on during my free time.</Description> */}

   <div className="mt-6">
    {projects.map((project) => (
     <Fragment key={`project-${project.name}`}>
      <ProjectCard project={project} className="mb-12" />
      {project !== projects[projects.length - 1] && <hr className="mx-auto mb-12 w-full max-w-56 border border-neutral-200 dark:border-neutral-800" />}
     </Fragment>
    ))}

    <Description>Want to see more? Check out my GitHub profile for more projects and contributions.</Description>

    <Button variant="secondary" href={`https://github.com/${meta.accounts.github.username}`} rel="noopener noreferrer" className="mt-4">
     <Icons.Github className="mr-2 size-5 fill-white stroke-2" />
     View my Github
    </Button>
   </div>
  </div>
 );
}

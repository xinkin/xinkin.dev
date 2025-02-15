import { Fragment } from "react";
import { Button } from "@/components/Button";
import { Description, Header1 } from "@/components/Headers";
import { Icons } from "@/components/Icons";
import { ProjectCard } from "@/components/ProjectCard";
import { work } from "@/config";
import { meta } from "@/config";

export const metadata = {
 title: "My Work",
 description: "Explore some of my latest work and contributions, including open-source work and personal work.",
};

export default function Page() {
 return (
  <div className="mb-16 mt-20 flex flex-col items-start justify-center">
   <Header1>My Work</Header1>
   <Description className="mb-16">I have been programming for {new Date().getFullYear() - 2018} years and have worked on numerous work. Below are some of my latest work; you can find more on my GitHub profile.</Description>

   {work.map((project) => (
    <Fragment key={`project-${project.name}`}>
     <ProjectCard project={project} className="mb-12" />
     {project !== work[work.length - 1] && <hr className="mx-auto mb-12 w-full max-w-56 border border-neutral-200 dark:border-neutral-800" />}
    </Fragment>
   ))}

   <Description>Want to see more? Check out my GitHub profile for more work and contributions.</Description>

   <Button variant="primary" href={`https://github.com/${meta.accounts.github.username}`} rel="noopener noreferrer" className="mt-4">
    <Icons.Github className="mr-2 size-5 fill-white stroke-2" />
    View my Github
   </Button>
  </div>
 );
}

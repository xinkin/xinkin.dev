// import Image from "next/image";
import { Button } from "../components/Button";
import { Icons } from "../components/Icons";
import { AwardsSection } from "@/components/AwardsCard";
import { ContactForm } from "@/components/client/ContactForm";
import { Description, Header2 } from "@/components/Headers";
// import Link from "@/components/Link";
import { ProjectCard } from "@/components/ProjectCard";
import { work, awards } from "@/config";
import {
 header,
 contact,
 meta,
 // technologies
} from "@/config";
// import { GetUserData, getTotalContributionsForYears } from "@/lib/graphql";
// import { ConvertNumber } from "@/lib/utils";

export const metadata = {
 title: header.title,
 description: meta.shortDescription,
};

export default function HomePage() {
 //   const userData = await GetUserData();
 //  const contributions = await getTotalContributionsForYears();

 return (
  <>
   <section className="mb-16 mt-20">
    <h1 className="dark:color-black relative m-0 text-4xl font-black tracking-[-0.03em] text-neutral-800 duration-300 dark:text-white md:text-left">Hey, I’m {header.title}</h1>
    <p className="mt-2 text-lg text-neutral-700 dark:text-neutral-400">{header.description}</p>
    <div className="mt-9 flex flex-row flex-wrap gap-4">
     <Button variant="secondary" href="/#contact">
      Contact me
     </Button>
     {/* <Button variant="secondary" href="/#about">
      More about me
     </Button> */}
    </div>
   </section>

   {/* <section className="mb-16 flex flex-wrap justify-between gap-4 text-center text-xs font-bold text-neutral-800/70 dark:text-white/70">
    <Link target="_blank" href={`https://github.com/${meta.accounts.github.username}`} className="flex items-center gap-2 text-center duration-200 hover:text-neutral-800 motion-reduce:transition-none dark:hover:text-white">
     <Icons.Star className="size-4 stroke-2" /> <span>{userData && ConvertNumber(userData.userStars)} stars</span>
    </Link>

    <Link target="_blank" href={`https://github.com/${meta.accounts.github.username}`} className="flex items-center gap-2 duration-200 hover:text-neutral-800 motion-reduce:transition-none dark:hover:text-white">
     <Icons.GitGraph className="size-4 stroke-2" /> <span>{userData && ConvertNumber(contributions.total)} commits</span>
    </Link>

    <Link target="_blank" href={`https://github.com/${meta.accounts.github.username}`} className="flex items-center gap-2 duration-200 hover:text-neutral-800 motion-reduce:transition-none dark:hover:text-white">
     <Icons.GitFork className="size-4 stroke-2" /> <span>{userData && ConvertNumber(userData.userForks)} repositories forks</span>
    </Link>

    <Link target="_blank" href={`https://github.com/${meta.accounts.github.username}?tab=followers`} className="flex items-center gap-2 duration-200 hover:text-neutral-800 motion-reduce:transition-none dark:hover:text-white">
     <Icons.Users className="size-4 stroke-2" /> <span>{userData && ConvertNumber(userData.userFollowers)} Github followers</span>
    </Link>
   </section> */}

   <section className="mb-16 mt-6">
    <Header2 id="about">About me</Header2>

    <div className="prose-quoteless prose prose-neutral dark:prose-dark">
     <span>I have been in the crypto for over {new Date().getFullYear() - 2023} years. Initially, I started as a frontend developer and then after have been navigating the web3 space.</span>
     <p>I excel at seamless protocol integrations and SDK implementations, with proven adaptability in building innovative blockchain applications.</p>
    </div>

    <div className="mt-6 flex flex-row flex-wrap gap-4">
     <Button variant="secondary" href={`https://github.com/${meta.accounts.github.username}`} rel="noopener noreferrer">
      <Icons.Github className="mr-2 size-5 fill-white stroke-2" />
      View my Github
     </Button>
     {/* <Button variant="secondary" href="/#contact">
      Contact me
     </Button> */}
    </div>
   </section>

   <section id="my-work" className="mb-6">
    <Header2>Work Experience</Header2>

    {/* <Description>Explore some of my recent work below. For more, visit my GitHub profile.</Description> */}
    <div className="mt-6">
     {work.slice(0, 2).map((project) => (
      <ProjectCard key={`project-${project.name}`} project={project} />
     ))}
    </div>

    {/* <div className="-mt-10 mb-10 flex flex-col items-center">
     <p className="mb-2 text-neutral-700 dark:text-neutral-400">Want to see more?</p>
     <Button variant="secondary" href="/work">
      View all work
     </Button>
    </div> */}
   </section>

   <section id="awards" className="mb-16">
    <Header2>Awards & Recognition</Header2>
    <div className="mt-6">
     <AwardsSection awards={awards} />
    </div>
   </section>

   {/* <section className="my-6 mb-16">
    <Header2 id="tech">Technologies I use</Header2>
    <Description>Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:</Description>
    <div className="mt-4 flex flex-wrap gap-4">
     {technologies.map((tech) => {
      return (
       <Link href={tech.link || "#"} key={`tech-link-${tech.name}`} className="flex cursor-pointer items-center gap-2 rounded-md border border-black/10 px-2 py-1 font-mono font-medium text-neutral-500 duration-200 hover:bg-black/5 motion-reduce:transition-none dark:border-neutral-800 dark:text-white/50 dark:hover:border-neutral-700 dark:hover:bg-white/5">
        <Image src={tech.icon} alt={`${tech.name} logo`} width={20} height={20} className="size-5 rounded" /> {tech.name}
       </Link>
      );
     })}
    </div>
    <p className="mt-4 text-center text-neutral-700 dark:text-neutral-400">...and many more!</p>
   </section> */}

   <section className="mb-12">
    <Header2 id="contact">Contact me</Header2>
    <Description>I’m always eager to explore new opportunities and take on exciting work. If you have a project in mind, or just want to say hi, feel free to send me a message.</Description>

    <div className="my-6 flex w-full rounded-md border border-black/15 bg-white p-5 dark:border-neutral-800 dark:bg-[#161617]">
     <ContactForm />
    </div>
    <Description>Or contact me with...</Description>
    <div className="mt-4 flex flex-wrap gap-4">
     {contact.links.map((element) => (
      <Button variant="tertiary" href={element.href} key={`contact-link-${element.href}`} className="gap-2">
       <element.icon className="size-5" />
       {element.title}
      </Button>
     ))}
    </div>
   </section>
  </>
 );
}

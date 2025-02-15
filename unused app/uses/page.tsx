import { allOtherPages } from "contentlayer/generated";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header1 } from "@/components/Headers";
import Link from "@/components/Link";
import { MDXComponent } from "@/components/MDXComponents";
import setup from "@/public/assets/setup.jpg";

export const metadata = {
 title: "What I use",
 description: "A list of tools, software, and hardware that I use on a daily basis for work and personal projects.",
};

export default function Page() {
 const uses = allOtherPages.find((page) => page.slug === "uses");

 if (!uses) return notFound();

 return (
  <div className="mb-16 mt-20 flex flex-col items-start justify-center">
   <Header1>{uses.title}</Header1>
   <p className="pb-2 text-neutral-700 dark:text-neutral-300">{uses.description}</p>
   <Link href="/assets/setup.jpg" target="_blank" rel="noopener noreferrer">
    <Image src={setup} alt="My setup" className="my-4 scale-100 transform cursor-pointer rounded-2xl bg-neutral-200 blur-0 duration-200 will-change-auto hover:opacity-70 hover:brightness-90 motion-reduce:duration-0 dark:bg-neutral-200/15" placeholder="blur" />
   </Link>
   <section className="w-full max-w-none">
    <MDXComponent code={uses.body.code} />
   </section>
  </div>
 );
}

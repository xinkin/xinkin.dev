import { allBlogs } from "contentlayer/generated";
import { pick } from "contentlayer2/client";
import { Icons } from "../../components/Icons";
import { Description, Header1, Header2 } from "@/components/Headers";
import Link from "@/components/Link";
import { parseISO } from "@/lib/utils";

export const metadata = {
 title: "Tech Blog",
 description: "A blog about technology, programming, and various intriguing topics. Here I share my experiences, projects and opinions.",
};

export default function Page() {
 const posts = allBlogs.map((post) => pick(post, ["slug", "title", "summary", "publishedAt"])).sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));

 return (
  <div className="mb-16 mt-20 flex flex-col items-start justify-center">
   <Header1>Tech Blog</Header1>
   <Description className="mb-6"> A blog about technology, programming, and various intriguing topics. Here I share my experiences, projects and opinions.</Description>

   <Header2>All Posts</Header2>
   {!posts.length && <p className="mb-4 text-red-400">No posts found!</p>}
   <ol className="relative mt-4 border-l border-neutral-200 dark:border-neutral-800">
    {posts.map((post, index) => (
     <Link href={`/blog/${post.slug}`} className="w-full" key={`/blog/${post.slug}`}>
      <li className="-mt-3 mb-10 ml-6 rounded-2xl border px-6 py-3 duration-200 hover:bg-neutral-200/50 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
       <span className="absolute -left-3 flex size-6 items-center justify-center rounded-full bg-black/10 ring-8 ring-white backdrop-blur dark:bg-white/10 dark:ring-[#101110]">
        <Icons.Calendar className="size-3 text-neutral-800 dark:text-white" />
       </span>
       <header>
        <h3 className="mb-1 flex items-center text-lg font-bold text-neutral-900 dark:text-white">
         {post.title} {index === 0 && <span className="ml-3 mr-2 hidden rounded bg-black/10 py-0.5 pl-1.5 pr-2.5 text-sm font-medium dark:bg-white/10 sm:block">🔥 Latest</span>}
        </h3>
        <time className="mb-2 block text-sm font-normal leading-none text-neutral-500 dark:text-neutral-500" dateTime={new Date(post.publishedAt).toUTCString()}>
         {parseISO(post.publishedAt)}
        </time>
       </header>
       <p className="mb-2 text-base font-normal text-neutral-700 dark:text-neutral-300">{post.summary}</p>
       <p className="inline-flex text-sm font-bold text-blue-500">Read more</p>
      </li>
     </Link>
    ))}
   </ol>
  </div>
 );
}

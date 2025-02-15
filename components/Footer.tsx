import Link from "@/components/Link";
import { footer } from "@/config";

export function Footer() {
 return (
  <footer className="mx-auto w-full max-w-screen-md pb-12">
   <hr className="mx-auto mb-5 w-full border border-neutral-200 dark:border-neutral-800" />
   {/* <p className="mb-4 text-sm text-neutral-700 opacity-50 dark:text-neutral-300">Copyright &copy; 20 - {new Date().getFullYear()} Igor Kowalczyk</p> */}

   <div className="flex justify-between gap-4">
    {footer.categories.map((category) => (
     <div key={`footer-category-${category.title}`} className="text-neutral-700 dark:text-neutral-400">
      <p className="mb-2 mt-1 font-bold text-neutral-800 dark:text-white">{category.title}</p>
      {category.links.map((link) => (
       <Link key={`footer-link-${link.href}`} href={link.href} target={link.target || "_self"} className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300">
        {link.title}
       </Link>
      ))}
     </div>
    ))}
   </div>
  </footer>
 );
}

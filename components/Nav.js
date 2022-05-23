import classNames from "classnames";
import NextLink from "next/link";
import { config } from "@/config";
import { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { Menu, Listbox, Transition } from '@headlessui/react'
import MobileNav from "@components/MobileNav";

function NavItem({ href, text, target }) {
 const router = useRouter();
 const isActive = router.asPath.split("#")[0] === href.split("#")[0];
 return (
  <NextLink href={href} key={href}>
   <a target={target} key={href} className={classNames(isActive ? "font-semibold text-gray-800 dark:text-gray-200" : "font-normal text-gray-600 dark:text-gray-400", "hidden rounded-lg p-1 transition-all duration-200 hover:bg-gray-200 motion-reduce:transition-none dark:hover:bg-white/10 sm:px-3 sm:py-2 md:inline-block")}>
    <span>{text}</span>
   </a>
  </NextLink>
 );
}

export default function Nav() {
 const [mounted, setMounted] = useState(false);
 const { resolvedTheme, setTheme } = useTheme();
 useEffect(() => setMounted(true), []);
 
 return (
  <div className="fixed top-0 z-[100] mx-0 mt-0 w-full font-poppins shadow dark:shadow-2xl">
   <nav key="nav" className="dark:bg-opacity-70 relative mx-auto flex h-[73px] w-full items-center justify-between border-b-[1px] border-white/[15%] bg-white bg-opacity-70 pt-4 pb-4 duration-300 firefox:bg-opacity-100 motion-reduce:transition-none dark:bg-[#08152b] dark:bg-opacity-70 dark:firefox:bg-opacity-100">
    <div className="fixed inset-0 z-[-1] h-[inherit] w-full backdrop-blur-[9px]"></div>
    <NextLink href="/" key="main_page">
     <a>
      <h1 className=" z-[1001] mx-8 font-poppins text-lg font-bold text-black duration-300 motion-reduce:transition-none dark:text-white">Igor Kowalczyk</h1>
     </a>
    </NextLink>
    <MobileNav />
    <div className="mr-auto">
     {config.nav.left.map((item, index) => {
      return <NavItem href={item.href} text={item.title} target={item.target} key={index} />;
     })}
    </div>
    <div className="ml-auto">
     {config.nav.right.map((item, index) => {
      return (
       <NextLink href={item.href} key={index}>
        <a href={item.href} target={item.target || "_self"} className="hidden rounded-lg p-1 font-normal text-gray-600 transition-all hover:bg-gray-200 motion-reduce:transition-none dark:text-gray-400 dark:hover:bg-white/10 sm:px-3 sm:py-2 md:inline-block">
         {item.title}
        </a>
       </NextLink>
      );
     })}
    </div>




 <div className="text-right">
  <Menu as="div" className="relative inline-block text-left">
   {({ open }) => (
    <>
    <div>
    <Menu.Button className="inline-flex w-full justify-center mx-8 flex h-9 w-9 items-center justify-center rounded-lg border-2 border-transparent bg-transparent transition-all duration-300 hover:border-[#3391fc] hover:shadow-hoverLight motion-reduce:transition-none dark:bg-white/10 dark:hover:border-[#5686f5] dark:hover:shadow-hoverDark">
     <svg xmlns="http://www.w3.org/2000/svg" className={`${open ? "transform rotate-90 motion-reduce:rotate-0" : ""} h-5 w-5 text-gray-800 dark:text-gray-200 duration-300 motion-reduce:transition-none`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    </Menu.Button>
   </div>
   <Transition
    show={open}
    as={Fragment}
    enter="transition ease-out duration-300"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-100"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
   >
   <Menu.Items className="border-[1px] dark:border-white/[15%] border-black/[10%] backdrop-blur-[9px] absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md dark:bg-opacity-70 bg-opacity-70 bg-white shadow-lg dark:bg-[#08152b] firefox:bg-opacity-100 dark:firefox:bg-opacity-100">
    <div className="px-1 py-1 ">
     <Menu.Item>
      {({ active }) => (
       <button className={`${active ? 'dark:bg-white/10 bg-black/10' : ''} group flex w-full items-center rounded-md px-2 py-2 text-sm text-black dark:text-white duration-300 motion-reduce:transition-none`}>
        Theme
       </button>
      )}
     </Menu.Item>
     <Menu.Item>
      {({ active }) => (
       <button className={`${active ? 'dark:bg-white/10 bg-black/10' : ''} group flex w-full items-center rounded-md px-2 py-2 text-sm text-black dark:text-white duration-300 motion-reduce:transition-none`}>
        Animations
       </button>
      )}
     </Menu.Item>
     </div>
   </Menu.Items>
   </Transition>
   </>
   )}
  </Menu>
 </div>
   </nav>
  </div>
 );
}

/*
        <button aria-label="Toggle Dark Mode" type="button" className="flex h-9 w-9 items-center justify-center" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
         {mounted && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-gray-800 dark:text-gray-200">
           {resolvedTheme === "dark" ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />}
          </svg>
         )}
        </button>
*/

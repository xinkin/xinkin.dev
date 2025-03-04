import { Icons } from "./components/Icons";
import { Awards, Contact, Header, Meta, Project, Technology } from "./lib/types";

export const meta = {
 title: "Yash Chowdhury",
 description: "I'm a Web3 frontend developer with a passion for making blockchain click. I create dApps that bring users and web3 together, minus the complexity.",
 shortDescription: "Web3 Frontend Developer,",
 //url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${process.env.PORT || 3000}`,
 url: "https://igorkowalczyk.dev",
 accounts: {
  github: {
   username: "xinkin",
   //    repo: "igorkowalczyk.github.io",
  },
  twitter: {
   username: "@xinkin_",
  },
  //   discord: {
  //    username: "@majonez.exe",
  //    invite: "https://discord.gg/sgt4QEyDxK",
  //    id: "544164729354977282",
  //   },
  //   instagram: {
  //    username: "majonezexe",
  //   },
 },
} satisfies Meta;

export const header = {
 title: "Yash",
 subtitle: "Web3 Developer",
 description: meta.description,
} satisfies Header;

export const work = [
 {
  name: "ChainLabs",
  started: "2024-06-17T16:59:08Z",
  showendDate: true,
  description: "ChainLabs is a development studio that helps empower consumers by building transparent and decentralized products.",
  images: [
   {
    src: "/assets/projects/chainlabs/chainlabs.png",
    alt: "ChainLabs main page screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  bulletPoints: ["Implemented a comprehensive web3 authentication system integrating Privy, Web3Auth, and Abstract Native Wallet Connect, implementing secure wallet creation and social login flows using NextAuth for enhanced user onboarding", "Built and deployed full-stack account abstraction infrastructure using Biconomy's Smart Accounts, enabling gasless transactions and simplified user experience across multiple client projects", "Developed proxy APIs and utility functions to streamline blockchain interactions across frontend, backend, and smart contract layers, ensuring seamless data flow and transaction handling"],
  technologies: [
   {
    name: "Next.js",
    icon: "/assets/tech/next.svg",
   },
   {
    name: "MongoDB",
    icon: "/assets/tech/mongodb.svg",
   },
   { name: "TypeScript", icon: "/assets/tech/typescript.svg" },
  ],
  website: "https://chainlabs.in",
  github: null,
 },
 {
  name: "ZNS Connect",
  started: "2023-12-29",
  ended: "2024-05-27",
  showendDate: true,
  description: "ZNS Connect is a decentralized naming system that simplifies Web3 by offering user-friendly and memorable domain names.\n\nTOP 10 Polygon Village | Paris Blockchain Week Top 100 | 800K + Domains Minted(Jan 2024)",
  images: [
   {
    src: "/assets/projects/znsconnect/znsconnect.png",
    alt: "ZNS Connect main page screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  bulletPoints: ["Architected and implemented comprehensive frontend infrastructure, integrating Web3 wallet connectivity, smart contract interactions, and real-time domain resolution features", "Engineered custom subgraphs for efficient blockchain data indexing and querying, optimizing domain search and management functionality", "Developed and audited smart contracts for secure domain minting and management, implementing robust validation and ownership transfer mechanisms", "Built automated oracle integration and migration scripts to ensure reliable price feeds and seamless protocol upgrades"],
  technologies: [
   {
    name: "TailwindCSS",
    icon: "/assets/tech/tailwindcss.svg",
   },
   {
    name: "Next.js",
    icon: "/assets/tech/next.svg",
   },
  ],
  website: "https://znsconnect.io",
  github: null,
 },
 //  {
 //   name: "RabbitRP",
 //   description: "Website for a FiveM roleplay server with player applications, server statistics, player profiles, Discord integration and more. Fully customizable and easy to use.",
 //   images: [
 //    {
 //     src: "/assets/projects/rabbitrp/image-01.png",
 //     alt: "RabbitRP main page screenshot",
 //     width: 1920,
 //     height: 1080,
 //    },
 //   ],
 //   technologies: [
 //    {
 //     name: "Astro",
 //     icon: "/assets/tech/astro.svg",
 //    },
 //    {
 //     name: "PostgreSQL",
 //     icon: "/assets/tech/postgresql.svg",
 //    },
 //    {
 //     name: "Discord API",
 //     icon: "/assets/tech/discord.svg",
 //    },
 //    {
 //     name: "TailwindCSS",
 //     icon: "/assets/tech/tailwindcss.svg",
 //    },
 //   ],
 //   website: "https://rabbitrp.pl",
 //   github: null,
 //  },
 //  {
 //   name: "Discord activity watcher",
 //   started: "2023-10-05T00:00:00Z",
 //   description: "API for displaying Discord activity data in JSON or SVG",
 //   images: [
 //    {
 //     src: "/assets/projects/discord-activity/image-01.png",
 //     alt: "Discord activity main page screenshot",
 //     width: 1920,
 //     height: 1080,
 //    },
 //   ],
 //   technologies: [
 //    {
 //     name: "Fresh",
 //     icon: "/assets/tech/fresh.svg",
 //    },
 //    {
 //     name: "Deno",
 //     icon: "/assets/tech/deno.svg",
 //    },
 //    {
 //     name: "TypeScript",
 //     icon: "/assets/tech/typescript.svg",
 //    },
 //    {
 //     name: "Discord API",
 //     icon: "/assets/tech/discord.svg",
 //    },
 //   ],
 //   website: "https://discord-activity.deno.dev",
 //   github: "https://github.com/igorkowalczyk/discord-activity",
 //  },
 //  {
 //   name: "Profile views",
 //   started: "2023-01-27T00:00:00Z",
 //   description: "Create your own badge that will count views anywhere you want!",
 //   images: [
 //    {
 //     src: "/assets/projects/profile-views/image-01.png",
 //     alt: "Profile views main page screenshot",
 //     width: 1920,
 //     height: 1080,
 //    },
 //   ],
 //   technologies: [
 //    {
 //     name: "Astro",
 //     icon: "/assets/tech/astro.svg",
 //    },
 //    {
 //     name: "Deno",
 //     icon: "/assets/tech/deno.svg",
 //    },
 //    {
 //     name: "TypeScript",
 //     icon: "/assets/tech/typescript.svg",
 //    },
 //    {
 //     name: "React",
 //     icon: "/assets/tech/react.svg",
 //    },
 //   ],
 //   website: "https://views.igorkowalczyk.dev",
 //   github: "https://github.com/igorkowalczyk/github-views",
 //  },
] satisfies Project[];

export const awards = [
 {
  name: "Open Source Recognition from Huddle01",
  date: "2023-10",
  description: "Developed a chat interface for Huddle01's audio-spaces application, facilitating seamless cross-peer message exchange within a room.",
 },
 {
  name: "Honourable Mention from Superfluid",
  date: "2023-09",
  description: "Recognized in the Superfluid Wavepool, demonstrating innovative solutions in the field of token streaming.",
 },
] satisfies Awards[];

export const projects = [
 {
  name: "$WAIRREN Bot",
  started: "2024-11-1",
  showendDate: false,
  description: "A unique AI-powered DeFi trading bot that puts a humorous twist on memecoin investing. Built on the Base network, this project features an AI personality (powered by Mira) that starts as a crypto skeptic but can be convinced to invest in memecoins through persuasive conversation.",
  images: [
   {
    src: "/assets/projects/wairren/wairren.png",
    alt: "Wairren main page screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  technologies: [
   {
    name: "Next.js",
    icon: "/assets/tech/next.svg",
   },
  ],
  website: "https://www.wairren.xyz/",
  github: null,
 },
 {
  name: "Fluidity",
  started: "2023-09",
  showendDate: false,
  description: "Fluidity is a chat application that utilizes Superfluid's protocol and OpenAI's text-to-intent formation to simplify the process of creating and managing token streaming.\nIt makes it exceptionally easy for users to seamlessly stream their funds.",
  images: [
   {
    src: "/assets/projects/fluidity/fluidity.png",
    alt: "Fluidity main page screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  technologies: [
   {
    name: "Next.js",
    icon: "/assets/tech/next.svg",
   },
  ],
  website: "https://www.fluidity.fun/",
  github: null,
 },
] satisfies Project[];

export const nav = {
 main: [
  {
   href: "/",
   title: "Home",
  },
  {
   href: "/#my-work",
   title: "My Work",
  },
  {
   href: "/#awards",
   title: "Awards",
  },
  {
   href: "/side-projects",
   title: "Side Projects",
  },

  //   {
  //    href: "/blog/",
  //    title: "Blog",
  //   },
 ],
 // Only for mobile navigation, will be merged with the main navigation
 //  mobile: [
 //   {
 //    href: "/photography/",
 //    title: "Photography",
 //   },
 //   {
 //    href: meta.accounts.discord.invite,
 //    title: "Discord",
 //    target: "_blank",
 //   },
 //  ],
};

export const contact = {
 links: [
  {
   href: "mailto:majonezexe@protonmail.com",
   title: "Email",
   icon(props) {
    return <Icons.AtSign {...props} />;
   },
  },
  //   {
  //    href: meta.accounts.discord.invite,
  //    title: "Discord",
  //    icon(props) {
  //     return <Icons.Discord {...props} />;
  //    },
  //   },
  {
   href: `https://x.com/${meta.accounts.twitter.username}`,
   title: "Twitter / X",
   icon(props) {
    return <Icons.Twitter {...props} />;
   },
  },
  //   {
  //    href: `https://www.instagram.com/${meta.accounts.instagram.username}/`,
  //    title: "Instagram",
  //    icon(props) {
  //     return <Icons.Instagram {...props} />;
  //    },
  //   },
 ],
} satisfies Contact;

export const footer = {
 categories: [
  {
   title: "Important Links",
   links: [
    {
     title: "Home",
     href: "/",
    },
    // {
    //  title: "My work",
    //  href: "/work",
    // },
    {
     title: "Side projects",
     href: "/side-projects",
    },
    // {
    //  title: "Blog",
    //  href: "/blog",
    // },
   ],
  },
  {
   title: "Social",
   links: [
    {
     title: "Github",
     href: `https://github.com/${meta.accounts.github.username}`,
     target: "_blank",
    },
    {
     title: "Twitter",
     href: `https://twitter.com/${meta.accounts.twitter.username}`,
     target: "_blank",
    },
    // {
    //  title: "Instagram",
    //  href: `https://instagram.com/${meta.accounts.instagram.username}`,
    //  target: "_blank",
    // },

    // {
    //  title: "Discord",
    //  href: meta.accounts.discord.invite,
    //  target: "_blank",
    // },
   ],
  },
  {
   title: "Other",
   links: [
    // {
    //  title: "What i use",
    //  href: "/uses",
    // },
    {
     title: "Contact",
     href: "/contact",
    },
    {
     title: "Read CV",
     href: "https://read.cv/xinkin",
     target: "_blank",
    },
    // {
    //  title: "Photography",
    //  href: "/photography",
    // },
   ],
  },
 ],
};

export const technologies = [
 {
  name: "React",
  icon: "/assets/tech/react.svg",
  link: "https://reactjs.org/",
 },
 {
  name: "Next.js",
  icon: "/assets/tech/next.svg",
  class: "invert-0 dark:invert",
  link: "https://nextjs.org/",
 },
 {
  name: "TailwindCSS",
  icon: "/assets/tech/tailwindcss.svg",
  link: "https://tailwindcss.com/",
 },
 {
  name: "Javascript",
  icon: "/assets/tech/javascript.svg",
 },
 {
  name: "Typescript",
  icon: "/assets/tech/typescript.svg",
  link: "https://www.typescriptlang.org/",
 },
 {
  name: "Github",
  icon: "/assets/tech/github.svg",
  class: "dark:invert-0 invert",
  link: "https://github.com",
 },
 {
  name: "MongoDB",
  icon: "/assets/tech/mongodb.svg",
  link: "https://www.mongodb.com/",
 },
 {
  name: "Docker",
  icon: "/assets/tech/docker.svg",
  link: "https://www.docker.com/",
 },
 {
  name: "Vercel",
  icon: "/assets/tech/vercel.svg",
  class: "invert-0 dark:invert",
  link: "https://vercel.com/",
 },
] satisfies Technology[];

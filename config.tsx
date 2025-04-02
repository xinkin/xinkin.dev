import { Icons } from "./components/Icons";
import { Awards, Contact, Header, Meta, Project, Technology } from "./lib/types";

export const meta = {
 title: "Yash Chowdhury",
 description: "I'm a Web3 frontend developer with a passion for making blockchain click. I create dApps that bring users and web3 together, minus the complexity.",
 shortDescription: "Web3 Frontend Developer,",
 url: "https://xinkin-dev.vercel.app/",
 accounts: {
  github: {
   username: "xinkin",
   repo: "xinkin-dev",
  },
  twitter: {
   username: "@xinkin_",
  },
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

  technologies: [{ name: "Next.js" }, { name: "TypeScript" }, { name: "TailwindCSS" }, { name: "Viem" }, { name: "MongoDB" }, { name: "Biconomy" }, { name: "Privy" }, { name: "Web3Auth" }, { name: "Abstract Native Wallet" }, { name: "NextAuth" }, { name: "Ponder.sh" }],

  website: "https://chainlabs.in",
  github: null,
 },
 {
  name: "ZNS Connect",
  started: "2023-12-29",
  ended: "2024-05-27",
  showendDate: true,
  description: "ZNS Connect is a decentralized naming system that simplifies Web3 by offering user-friendly and memorable domain names.",
  images: [
   {
    src: "/assets/projects/znsconnect/znsconnect.png",
    alt: "ZNS Connect main page screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  bulletPoints: ["Architected and implemented Web3 frontend infrastructure with wallet connectivity, smart contract interactions, and developed a custom MetaMask Snap for enhanced user experience", "Engineered custom subgraphs and indexing solutions for optimized blockchain data querying, significantly improving domain search and management functionality", "Developed and audited smart contracts for domain management with automated oracle integrations, ensuring secure minting and reliable price feeds"],
  technologies: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "Viem" }, { name: "TypeScript" }, { name: "Wagmi" }, { name: "Metamask Snap" }],
  website: "https://znsconnect.io",
  github: null,
 },
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
  technologies: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "Viem" }, { name: "TypeScript" }, { name: "Wagmi" }, { name: "Uniswap" }, { name: "DexScreener" }, { name: "Mira Network" }, { name: "OpenAI" }],
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
  technologies: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "Viem" }, { name: "Wagmi" }, { name: "Super Fluid" }, { name: "OpenAI" }],
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
    {
     title: "Side projects",
     href: "/side-projects",
    },
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
   ],
  },
  {
   title: "Other",
   links: [
    {
     title: "Contact",
     href: "/contact",
    },
    {
     title: "Read CV",
     href: "https://read.cv/xinkin",
     target: "_blank",
    },
   ],
  },
 ],
};

export const technologies = [
 {
  name: "React",
  link: "https://reactjs.org/",
 },
 {
  name: "Next.js",
  link: "https://nextjs.org/",
 },
 {
  name: "TailwindCSS",
  link: "https://tailwindcss.com/",
 },
 {
  name: "Javascript",
 },
 {
  name: "Typescript",
  link: "https://www.typescriptlang.org/",
 },
 {
  name: "Github",
  link: "https://github.com",
 },
 {
  name: "MongoDB",
  link: "https://www.mongodb.com/",
 },
 {
  name: "Docker",
  link: "https://www.docker.com/",
 },
 {
  name: "Vercel",
  link: "https://vercel.com/",
 },
] satisfies Technology[];

"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function HomePage() {
  const [selectedType, setSelectedType] = useState<ProjectType>(
    ProjectType.published,
  );

  return (
    <main className="flex min-h-screen h-fit flex-col gap-4 px-10 pb-5 md:gap-8 md:px-12 lg:px-28 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-row items-start justify-between gap-4 pt-28">
        <div className="flex max-w-full flex-row items-start gap-8">
          <ProfilePicture />
          <div className="flex w-80 flex-col gap-2">
            <div className="text-2xl font-bold">Paul</div>
            <div className="line-clamp-3 overflow-hidden text-base">
              Hi, I'm Paul. I'm 15 years old. I am a web and mobile developer.
              Additionally I dabble in a bunch of other programming languages.
            </div>
          </div>
        </div>

        <div className="max-w-2/12 hidden h-32 w-56 flex-col justify-evenly gap-2 md:flex">
          <SocialButton name="Github" href="https://github.com/Modelmaster1" />
          <SocialButton
            name="Instagram"
            href="https://instagram.com/peitenm_ller"
          />
          <SocialButton
            name="More..."
            href="https://linkifyit.vercel.app/paul"
          />
        </div>
      </div>

      <Tabs defaultValue={selectedType} className="hidden w-fit md:block">
        <TabsList className="grid w-full grid-cols-3 rounded-xl">
          <TabsTrigger
            value="pp"
            className="rounded-lg"
            onClick={() => setSelectedType(ProjectType.published)}
          >
            Published Products
          </TabsTrigger>
          <TabsTrigger
            value="d"
            className="rounded-lg"
            onClick={() => setSelectedType(ProjectType.development)}
          >
            In Development
          </TabsTrigger>
          <TabsTrigger
            value="a/c"
            className="rounded-lg"
            onClick={() => setSelectedType(ProjectType.archived)}
          >
            Archived / Cancelled
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-4 block rounded-xl bg-slate-800 p-3 md:hidden">
        <div className="mb-2 ms-1 text-lg opacity-80">My Projects</div>
        <div className="rounded-lg bg-[#030616] p-1">
          <select
            value={selectedType}
            className="me-1 bg-transparent focus:outline-none"
            onChange={(e) => setSelectedType(e.target.value as ProjectType)}
          >
            <option value={ProjectType.published}>Published Products</option>
            <option value={ProjectType.development}>In Development</option>
            <option value={ProjectType.archived}>Archived / Cancelled</option>
          </select>
        </div>
      </div>

      <div className="">
        <div className="columns columns-1 gap-4 md:columns-2 lg:columns-3">
          {[...mockData].map((project) => (
            <ProjectView
              key={project.name}
              type={project.type}
              name={project.name}
              selectedType={selectedType}
              description={project.description}
              link={project.link}
              imageURL={project.imageURL}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function ProfilePicture() {
  return (
    <img
      className="h-32 min-w-32 overflow-hidden rounded-xl"
      src="https://avatars.githubusercontent.com/u/10314780?v=4"
      alt="Profile Picture"
    />
  );
}

enum ProjectType {
  published = "pp",
  development = "d",
  archived = "a/c",
}

const mockData: ProjectViewProps[] = [
  {
    name: "Linkifyit",
    description:
      "Linkifyit is a website that allows you to shorten your links. It is built with Next.js and Tailwind CSS.",
    link: "https://linkifyit.vercel.app",
    type: ProjectType.published,
    imageURL:
      "https://images.unsplash.com/photo-1719150006650-8255498a9faf?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "DocifyIT",
    description:
      "Linkifyit is a website that allows you to shorten your links. It is built with Next.js and Tailwind CSS.",
    link: "https://docifyit.vercel.app",
    type: ProjectType.development,
    imageURL: "https://i.imgur.com/600o32f.png",
  },
  {
    name: "Somthing",
    description:
      "Linkifyit is a website that allows Linkifyit is a website that allows you to shorten your links. It is built with Next.js and Ta Linkifyit is a website that allows you to shorten your links. It is built with Next.js and Ta Linkifyit is a website that allows you to shorten your links. It is built with Next.js and TaLinkifyit is a website that allows you to shorten your links. It is built with Next.js and Ta Linkifyit is a website that allows you to shorten your links. It is built with Next.js and Ta you to shorten your links. It is built with Next.js and Tailwind CSS.",
    link: "https://linkifyit.vercel.app",
    type: ProjectType.archived,
    imageURL:
      "https://images.unsplash.com/photo-1606636661404-cbd176ddb129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDIyNzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA0NTE4MjF8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Better Reader",
    description:
      "An ownivore alternative... is built with Next.js and Ta Linkifyit is a website that allows you to shorten your links. It is built with Next.js and Ta Linkifyit is a website that allows you to shorten your links. It is built with Next.js and TaLinkifyit is a website that allows you to shorten your links. It is built with Next.js and Ta Linkifyit is a website that allows you to shorten your links. It is built with Next.js and Ta you to shorten your links. It is built with Next.js and Tailwind CSS.",
    link: "https://linkifyit.vercel.app",
    type: ProjectType.archived,
    imageURL:
      "https://images.unsplash.com/photo-1467545159547-1b93b24406ae?q=80&w=3123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Linkifyit",
    description:
      "Linkifyit is a website that allows you to shorten your links. It is built with Next.js and Tailwind CSS.",
    link: "https://linkifyit.vercel.app",
    type: ProjectType.archived,
    imageURL:
      "https://images.unsplash.com/photo-1719150006650-8255498a9faf?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Better Reader",
    description:
      "An ownivore alternative... is built with Next.js and Ta Linkifyit is a website that allows you to shorten your links. It is built with Next.js and Ta Linkifyit is a website that allows you to shorten your links. It is built with Next.js and TaLinkifyit is a website that allows you to shorten your links. It is built with Next.js and Ta Linkifyit is a website that allows you to shorten your links. It is built with Next.js and Ta you to shorten your links. It is built with Next.js and Tailwind CSS.",
    link: "https://linkifyit.vercel.app",
    type: ProjectType.archived,
    imageURL:
      "https://images.unsplash.com/photo-1467545159547-1b93b24406ae?q=80&w=3123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Linkifyit",
    description:
      "Linkifyit is a website that allows you to shorten your links. It is built with Next.js and Tailwind CSS.",
    link: "https://linkifyit.vercel.app",
    type: ProjectType.archived,
    imageURL:
      "https://images.unsplash.com/photo-1723754165998-305df32c501e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Linkifyit",
    description:
      "Linkifyit is a website that allows you to shorten your links. It is built with Next.js and Tailwind CSS.",
    link: "https://linkifyit.vercel.app",
    type: ProjectType.archived,
    imageURL:
      "https://images.unsplash.com/photo-1723843038794-97663cc894ba?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Linkifyit",
    description:
      "Linkifyit is a website that allows you to shorten your links. It is built with Next.js and Tailwind CSS.",
    link: "https://linkifyit.vercel.app",
    type: ProjectType.archived,
    imageURL:
      "https://images.unsplash.com/photo-1723754165998-305df32c501e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Linkifyit",
    description:
      "Linkifyit is a website that allows you to shorten your links. It is built with Next.js and Tailwind CSS.",
    link: "https://linkifyit.vercel.app",
    type: ProjectType.archived,
    imageURL:
      "https://images.unsplash.com/photo-1723843038794-97663cc894ba?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

interface ProjectViewProps {
  link: string;
  imageURL?: string;
  description: string;
  name: string;
  type: ProjectType;
}

interface ViewProps extends ProjectViewProps {
  selectedType?: ProjectType;
}

function ProjectView({
  name,
  description,
  link,
  imageURL,
  type,
  selectedType,
}: ViewProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isHere = type != selectedType;

  return (
    <Link
      href={link}
      className={`${isHere ? "hidden" : "flex"} mb-4 w-full h-fit flex-col gap-4 rounded-xl bg-slate-800 p-3 outline outline-slate-600 break-inside-avoid`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div className="relative overflow-hidden rounded-lg">
        <img
          className="aspect-video h-full w-full object-cover"
          src={imageURL}
          alt={`${name} - Project Image`}
        />
      </div>

      <div className={`flex flex-col gap-1`}>
        <div className="text-xl font-semibold">{name}</div>
        <div className={`overflow-hidden text-sm text-slate-400`}>
          {description}
        </div>
      </div>
    </Link>
  );
}

function SocialButton({ href, name }: { href: string; name: string }) {
  function handleClick() {
    window.open(href, "_blank");
  }

  //green color: #59c32f
  return (
    <Button
      variant="secondary"
      className="w-full rounded-xl px-2"
      size="sm"
      onClick={handleClick}
    >
      {name}
    </Button>
  );
}

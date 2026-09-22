import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { IPortfolioData } from "@/app/utils/portfolio";

const ProjectModal = (project: IPortfolioData) => {
  const {
    title,
    url,
    longDescription,
    technologies,
    image,
  } = project;

  return (
    <Dialog>
      <DialogTrigger>
        <div className="py-2 px-4 bg-[#33302D] w-fit cursor-pointer hover:bg-accent hover:rounded-2xl transition-all text-[#FFF8F4] hover:shadow-[2px_2px_0px_0px_#33302D] hover:ring hover:ring-inset ring-[#33302D]">
          Detalhes
        </div>
      </DialogTrigger>

      <DialogContent className="w-full max-w-2xl bg-white">
        <DialogHeader className="p-2 bg-[#F4ECE8]">
          <DialogTitle className="text-xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex flex-row gap-2">
            <Image
              className="w-62.5 h-w-62.5 shrink-0"
              src={image}
              width={250}
              height={250}
              alt={`${title} project image`}
            />
            <div className="flex flex-col px-2 whitespace-pre-line justify-between">
              <div className="border-b pb-2">{longDescription}</div>
              <div>
                {url && (
                  <Link
                    href={url}
                    target="_blank"
                    className="flex w-fit px-2 py-1 hover:bg-accent bg-black transition text-white"
                  >
                    Ver site
                  </Link>
                )}
              </div>
            </div>
          </div>
          Usado no projeto:
          <div className="flex flex-row gap-2 items-center">
            {technologies &&
              technologies.map((technology) => (
                <Tooltip key={`technology-${technology}`}>
                  <TooltipTrigger>
                    <Image
                      src={`/${technology}.svg`}
                      alt={`${technology} logo`}
                      height={30}
                      width={30}
                    ></Image>
                  </TooltipTrigger>
                  <TooltipContent>{technology}</TooltipContent>
                </Tooltip>
              ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;

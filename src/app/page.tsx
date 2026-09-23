"use client";
import ResizableSection from "@/components/resizable-section";
import Section from "@/components/section";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { portfolioData } from "./utils/portfolio";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProjectModal from "@/components/project-modal";

export const Index = () => {
  return (
    <div className="flex flex-col justify-between h-full bg-[radial-gradient(#00000020_1px,transparent_1px)] bg-size-[20px_20px]">
      <div className="flex flex-row justify-center p-4 gap-4">
        <div className="w-fit flex flex-col gap-4 justify-center">
          <ResizableSection
            title="Sobre o site"
            description={[
              "Comecei a desenvolver essa belezinha aqui com a intenção de aprender mais sobre desenvolvimento web. esse site não tem pretensão de ser disruptivo ou revolucionário, é apenas um exercício de criatividade e engenharia.",
              "Espero que goste!",
              "Dê uma volta por aí...",
              "",
              "",
              "...",
              "",
              "",
              "...",
              "",
              "",
              "...",
              "",
              "",
              "Você está me vasculhando?",
            ]}
          />

          <ResizableSection
            title="Sobre mim"
            description={[
              "Sou o Heitor, esse cara da foto à direita. Sou formado em ciências da computação pela Anhembi Morumbi e atuo como engenheiro de software web pleno.",
              "Gosto do que faço profissionalmente, mas também tenho alguns outros hobbies, como arte digital, música, vídeogames e outras coisas.",
              "Vou tentar elencar tudo que faço aqui nesse site. O objetivo dele não é apenas ser um portfólio técnico (apesar de ser o foco, já que ele está na página inicial), mas sim um compilado de tudo que faço: meu personal home page (significado original do PHP).",
              "Pretendo codar este projeto 100% manualmente, sem usar AI para gerar o código. Não que eu seja contra AI em programação, mas sim por que quero sentir que construí artesanalmente.",
              "Em alguns de meus projetos vocês encontrarão código gerado por AI. Não é necessariamente um problema.",
            ]}
          />

          <Section
            title="Portfólio técnico"
            description={[
              "Veja meus projetos de engenharia de software abaixo:",
            ]}
          >
            <div className="p-4 grid grid-cols-3 w-fit gap-4 items-start justify-center">
              {portfolioData.map((project) => (
                <div
                  key={`project-${project.title}`}
                  className="group flex flex-row hover:bg-popover transition shadow-md"
                >
                  <div className="flex flex-col justify-center p-5 border w-max">
                    <div className="flex flex-row gap-1 items-center pb-2">
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            src={`/${project.language}.svg`}
                            width={30}
                            height={30}
                            alt={`${project.language} programming language`}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Escrito em {project.language}</p>
                        </TooltipContent>
                      </Tooltip>
                      <p className="text-xl font-black">{project.title}</p>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        className="w-62.5 h-w-62.5 shrink-0 min-w-62.5 min-h-w-62.5"
                        src={project.image}
                        width={250}
                        height={250}
                        alt={`${project.title} project image`}
                      />
                    </div>
                    <div className="text-sm pt-2 flex flex-col">
                      <p className="pb-2">{project.description}</p>
                      <div className="flex flex-row items-center justify-between border-t border-dotted border-gray-400 text-gray-600 pt-4">
                        {project.isOpenSource && project.repositoryUrl && (
                          <Link
                            href={project.repositoryUrl}
                            target="_blank"
                            className="text-xs hover:border-b hover:cursor-pointer"
                          >
                            <div className="flex flex-row items-center">
                              Repositório
                              <MoveUpRight className="h-3" />
                            </div>
                          </Link>
                        )}

                        <ProjectModal {...project} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
        <div className="w-fit flex flex-col font-mono gap-2">
          <div className="w-45 flex flex-row justify-center bg-white border-gray-800 border overflow-hidden shadow-[2px_2px_0px_0px_#33302D]">
            Heitor Silvano
          </div>
          <div className="w-45 h-45 flex flex-row justify-center bg-white border-gray-800 border overflow-hidden shadow-[2px_2px_0px_0px_#33302D]">
            <Image
              src="/heitor.jpg"
              alt=""
              width={300}
              height={300}
              className="object-cover"
            ></Image>
          </div>
          <div className="flex flex-row text-xs gap-2 w-45">
            <Link
              className="w-fit text-white pl-2 hover:cursor-pointer justify-center bg-accent border-gray-800 border flex flex-row items-center shadow-[2px_2px_0px_0px_#33302D] transition-all duration-150 hover:bg-black group"
              href="https://github.com/heitor-silvano"
              target="_blank"
            >
              <p className="line-clamp-1 transition-all duration-300 flex whitespace-nowrap">
                GitHub
                <span className="max-w-0 overflow-hidden group-hover:max-w-30 transition-all duration-300">
                  /heitor-silvano
                </span>
              </p>
              <MoveUpRight className="h-3.25" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t flex w-full items-center justify-center h-10 bg-[#FFF8F4] border-gray-800">
        <p>2026 Pause/break</p>
      </div>
    </div>
  );
};

export default Index;

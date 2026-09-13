"use client";
import ResizableSection from "@/components/resizable-section";
import Section from "@/components/section";
import Image from "next/image";
import { portfolioData } from "./utils/portfolio";

export const Index = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-row justify-center p-4 gap-4">
        <div className="w-fit flex flex-col gap-4 font-mono justify-center">
          <ResizableSection
            title="Sobre o site"
            description={[
              "comecei a desenvolver essa belezinha aqui com a intenção de aprender mais sobre desenvolvimento web. esse site não tem pretensão de ser disruptivo ou revolucionário, é apenas um exercício de criatividade e engenharia",
              "espero que goste!",
              "dê uma volta por aí",
              "você está me vasculhando?",
            ]}
          />

          <Section
            title="Portfólio"
            description={[
              "veja meus projetos de engenharia de software abaixo",
            ]}
          >
            <div className="p-4 flex flex-row gap-4 items-start">
              {portfolioData.map((project) => (
                <div
                  key={`project-${project.title}`}
                  className="group flex flex-row hover:bg-popover transition"
                >
                  <div className="flex flex-col justify-center p-5 border w-min">
                    <div className="flex flex-row gap-1 items-center pb-2">
                      <Image
                        src={`/${project.language}.svg`}
                        width={30}
                        height={30}
                        alt="Ruby programming language"
                      />
                      <p className="text-xl font-black">{project.title}</p>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        className="w-62.5 h-w-62.5 shrink-0 min-w-62.5 min-h-w-62.5"
                        src={project.image}
                        width={250}
                        height={250}
                        alt=""
                      />
                    </div>
                    <div className="text-sm pt-2">
                      <p>{project.description}</p>
                      <p>repositório: </p>
                      <button>teste</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
        <div className="w-25 flex flex-col font-mono gap-2">
          <div className="w-45 flex flex-row justify-center bg-white border-gray-800 border overflow-hidden shadow-[2px_2px_0px_0px_#33302D]">
            Heitor Nunes
          </div>
          <div className="w-45 h-45 flex flex-row justify-center bg-white border-gray-800 border overflow-hidden shadow-[2px_2px_0px_0px_#33302D]">
            <Image
              src="/heitor.jpg"
              alt=""
              width={250}
              height={250}
              className="object-cover"
            ></Image>
          </div>
          <div className="flex flex-row text-xs gap-2 w-full">
            <div className="w-full px-2 hover:cursor-pointer hover:opacity-75 transition justify-center bg-accent border-gray-800 border">
              Github
            </div>
            <div className="w-full px-2 hover:cursor-pointer hover:opacity-75 transition justify-center bg-accent border-gray-800 border">
              Currículo.pdf
            </div>
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

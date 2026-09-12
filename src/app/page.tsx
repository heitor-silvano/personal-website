"use client";
import ResizableSection from "@/components/resizable-section";
import Section from "@/components/section";
import Image from "next/image";
import { portfolioData } from "./utils/portfolio";

export const Index = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-4 font-mono justify-center">
      <ResizableSection
        title="Sobre"
        description={[
          "comecei a desenvolver essa belezinha aqui com a intenção de aprender mais sobre desenvolvimento web. esse site não tem pretensão de ser disruptivo ou revolucionário, é apenas um exercício de criatividade e engenharia",
          "espero que goste!",
          "dê uma volta por aí",
          "você está me vasculhando?",
        ]}
      />

      <Section title="Portfólio" description={["veja meus projetos de engenharia de software abaixo"]}>
        <div className="p-4 flex flex-row gap-4 items-start">
          {portfolioData.map((project) => (
            <div className="flex flex-row" key={`project-${project.title}`}>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Index;

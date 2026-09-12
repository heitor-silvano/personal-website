"use client";
import ResizableSection from "@/components/resizable-section";
import Section from "@/components/section";
import Image from "next/image";

export const Index = () => {
  return (
    <div className="w-full flex flex-col gap-4 mt-10 p-10 font-mono">
      <ResizableSection
        title="Sobre"
        description={[
          "comecei a desenvolver essa belezinha aqui com a intenção de aprender mais sobre desenvolvimento web. esse site não tem pretensão de ser disruptivo ou revolucionário, é apenas um exercício de criatividade e engenharia",
          "espero que goste!",
          "dê uma volta por aí",
          "você está me vasculhando?",
        ]}
      />

      <Section title="Portfólio" description={["tbd..."]}>
        <div className="p-4">
          <div className="flex flex-col justify-center p-2 border w-fit">
            <div className="flex flex-row gap-1 items-center pb-2">
              <Image
                src="/ruby.svg"
                width={30}
                height={30}
                alt="Ruby programming language"
              />
              <p className="text-2xl font-black">simple-game-project</p>
            </div>
            <div className="flex justify-center">
              <Image
                className="w-62.5 h-w-62.5 shrink-0 min-w-62.5 min-h-w-62.5"
                src="/simple-game-project.png"
                width={250}
                height={250}
                alt=""
              />
            </div>
            <div className="text-sm pt-2">
              <p>Jogo simples feito para rodar em terminal</p>
              <p>repositório: </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Index;

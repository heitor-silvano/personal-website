"use client";
import { Resizable } from "re-resizable";
import Image from "next/image";
import ResizableSection from "@/components/resizable-section";

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

      <ResizableSection
        title="Portfólio"
        description={[
          "tbd..."
        ]}
      />
      
    </div>
  );
};

export default Index;

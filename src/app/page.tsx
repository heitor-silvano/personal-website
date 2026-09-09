"use client";
import { Resizable } from 're-resizable'

export const Index = () => {
  return (
    <div className="w-full flex mt-10 p-10" >
      <Resizable defaultSize={{ width: 700, height: 215 }}
        className="flex flex-row justify-center bg-white border-gray-800 border border-dotted overflow-hidden"
      >
        <div className="p-4 flex flex-col gap-4 text-left">
          <p className="text-3xl font-semibold flex flex-row align-center">
            Bem-vindos ao meu site pessoal, tudo bem?
          </p>
          <div className="w-150">
            <p>
              comecei a desenvolver essa belezinha aqui com a intenção de
              aprender mais sobre desenvolvimento web. esse site não tem
              pretensão de ser disruptivo ou revolucionário, é apenas um
              exercício de criatividade e engenharia
            </p>
            <p>espero que goste!</p>
            <p className="pt-8">dê uma volta por aí</p>
            <p className="pt-16">você está me vasculhando?</p>
          </div>
        </div>
      </Resizable>
    </div>
  );
};

export default Index;

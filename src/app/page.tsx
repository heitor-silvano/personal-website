import Button from "@/components/button";

export const Index = () => {
  return (
    <div className="w-screen flex flex-row justify-center">
      <div className="h-screen w-300 flex flex-row justify-center bg-white border-gray-800 border-r-3 border-l-3">
        <div className="text-center p-4 flex flex-col gap-4 pt-12">
          <p className="text-3xl font-semibold">bem-vindos ao meu site pessoal, tudo bem??</p>
          <div className="w-150 text-left --space-mono">
            <p>
              comecei a desenvolver essa belezinha aqui com a intenção de
              aprender mais sobre desenvolvimento web. esse site não tem
              pretensão de ser disruptivo ou revolucionário, é apenas um
              exercício de criatividade e engenharia
            </p>
            <p>espero que goste!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

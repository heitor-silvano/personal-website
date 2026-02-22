import Button from "@/components/button";
import Link from "next/link";

export const Index = () => {
  return (
    <div>
      <h1 className="text-center underline">pause break</h1>
      <div className="text-center">
        <p>bem-vindos ao meu site pessoal, tudo bem??</p>
        <p>links interessantes:</p>
        <div className="flex flex-row gap-4 justify-center">
          <Button text="vá pra puta que pariu" path="pqp" />
          <div>
            <Button text="galeria" path="art" />
          </div>
          <div>
            <Button text="vídeos" path="videos" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

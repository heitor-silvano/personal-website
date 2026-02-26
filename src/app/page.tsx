import Button from "@/components/button";

export const Index = () => {
  return (
    <div>
      <div className="text-center">
        <p>bem-vindos ao meu site pessoal, tudo bem??</p>
        <p>links interessantes:</p>
        <div className="flex flex-row gap-4 justify-center">
          <Button text="microblog" path="micro-blog" />
          <div>
            <Button text="galeria" path="art"/>
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

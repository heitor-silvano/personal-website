import { Grid3x3, Rows3 } from "lucide-react";
import { ReactNode, useState } from "react";

const Section = (props: {
  title: string;
  description?: string[];
  children?: ReactNode;
}) => {
  const [isGridView, setIsGridView] = useState(true)

  return (
    <div className="w-250 h-full flex flex-row justify-center bg-white border-gray-800 border overflow-hidden shadow-[2px_2px_0px_0px_#33302D]">
      <div className="flex flex-col gap-4 text-left w-full">
        <div className="flex flex-row bg-[#F4ECE8] justify-between">
          <p className="px-4 py-1 text-2xl font-light flex flex-row align-center">
            {props.title}
          </p>
          <div className="flex gap-2 items-center pr-2 text-white">
            <div title="Visualização em lista">
              <Rows3
                strokeWidth={1.25}
                nonScalingStroke={true}
                onClick={() => setIsGridView(false)}
                className={`bg-[#B15F00] p-1 w-7 h-7 hover:cursor-pointer ${!isGridView && "shadow-[inset_0_-3px_0_0_#e3aa68]" }`}
              />
            </div>
            <div title="Visualização 3x3">
              <Grid3x3
                strokeWidth={1.25}
                nonScalingStroke={true}
                onClick={() => setIsGridView(true)}
                className={`bg-[#B15F00] p-1 w-7 h-7 hover:cursor-pointer ${isGridView && "shadow-[inset_0_-3px_0_0_#e3aa68]" }`}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 gap-5">
          {props.description &&
            props.description.map((text, index) => {
              return <p key={`description-${index}`}>{text}</p>;
            })}
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Section;

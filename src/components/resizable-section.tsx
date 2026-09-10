import { Resizable } from "re-resizable";
import { ReactNode } from "react";

const ResizableSection = (props: { title: string; description: string[], children?: ReactNode }) => {
  return (
    <Resizable
      defaultSize={{ width: 700, height: 110 }}
      className="flex flex-row justify-left bg-white border-gray-800 border overflow-hidden"
    >
      <div className="flex flex-col gap-4 text-left w-full">
        <div className="flex flex-row bg-[#F4ECE8]">
          <p className="px-4 py-1 text-3xl font-semibold flex flex-row align-center">
            {props.title}
          </p>
        </div>
        <div className="flex flex-col px-4 gap-5">
          {props.description.map((text, index) => {
            return <p key={`description-${index}`}>{text}</p>;
          })}
        </div>
        {props.children}
      </div>
    </Resizable>
  );
};

export default ResizableSection;

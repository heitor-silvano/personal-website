import { ReactNode } from "react";

const Section = (props: { title: string; description: string[], children?: ReactNode }) => {
  return (
    <div
      className="w-250 h-full flex flex-row justify-center bg-white border-gray-800 border overflow-hidden shadow-[2px_2px_0px_0px_#33302D]"
    >
      <div className="flex flex-col gap-4 text-left w-full">
        <div className="flex flex-row bg-red">
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
    </div>
  );
};

export default Section;

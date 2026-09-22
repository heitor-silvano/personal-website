import { Resizable } from "re-resizable";
import { ReactNode, useRef, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const ResizableSection = (props: {
  title: string;
  description: string[];
  children?: ReactNode;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(110);
  const lastMouseDownTimeRef = useRef<number>(0);
  const [shouldResize, setShouldResize] = useState(false);

  const handleDoubleClick = () => {
    const now = Date.now();

    if (now - lastMouseDownTimeRef.current < 300) {
      setShouldResize(true);
      return;
    }

    lastMouseDownTimeRef.current = now;
    setShouldResize(false);
  };

  return (
    <Resizable
      size={{ width: 1000, height: sectionHeight }}
      enable={{
        right: false,
        bottom: true,
      }}
      onResizeStop={() => {
        if (!sectionRef.current) {
          return;
        }

        if (shouldResize) {
          setSectionHeight(110);
          return;
        }
        setSectionHeight(sectionRef.current.clientHeight + 2);
      }}
      className="flex flex-row justify-left bg-white border-gray-800 border overflow-hidden shadow-[2px_2px_0px_0px_#33302D]"
      handleComponent={{
        bottom: (
          <div
            className="w-full h-2 bg-linear-to-br from-blue-500/50 to-white/50 hover:cursor-row-resize"
            onMouseDown={handleDoubleClick}
          />
        ),
      }}
    >
      <div className="flex flex-col gap-4 text-left w-full" ref={sectionRef}>
        <div className="flex flex-row bg-[#F4ECE8] items-center justify-between">
          <p className="px-4 py-1 text-2xl font-light flex flex-row align-center">
            {props.title}
          </p>
          <div className="pr-2">
            <Tooltip>
              <TooltipTrigger
                render={
                  <div className="w-6.25 h-6.25 bg-[#B15F00] font-mono flex justify-center text-white hover:cursor-help">
                    i
                  </div>
                }
              />
              <TooltipContent>
                <p>
                  Este é um elemento expansível, clique duas vezes na borda
                  inferior para retornar ao tamanho original.
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
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

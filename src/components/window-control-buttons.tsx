import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

const WindowControlButtons = (props: {
  onClick: () => void;
  title: string;
}) => {
  return (
    <div className="flex flex-row border-black bg-white border-b-3 w-full justify-end h-8 relative">
      <div className="hover:bg-amber-600 px-2 z-10 cursor-pointer justify-center flex flex-row w-8 h-8">
        <MinusIcon/>
      </div>
      <div
        className="hover:bg-amber-600 px-2 z-10 cursor-pointer justify-center flex flex-row w-8 h-8 inset-0"
        onClick={props.onClick}
      >
        <ArrowsPointingOutIcon />
      </div>
      <div className="hover:bg-amber-600 px-2 z-10 cursor-pointer justify-center flex flex-row w-8 h-8">
        <XMarkIcon/>
      </div>
      <div className="absolute font-mono flex flex-row items-center text-center px-2 w-full text-sm inset-0">
        {props.title}
      </div>
    </div>
  );
};

export default WindowControlButtons;

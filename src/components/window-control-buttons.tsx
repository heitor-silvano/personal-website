import Image from "next/image";
import WindowCloseIcon from "../public/window-close.svg";
import WindowMaximizeIcon from "../public/window-maximize.svg";
import WindowMinimizeIcon from "../public/window-minimize.svg";

const WindowControlButtons = (props: {
  onClick: () => void;
  title: string;
}) => {
  return (
    <div className="flex flex-row border-gray-300 bg-white border-b w-full justify-end h-8 relative">
      <div className="hover:bg-amber-600 px-2 z-10 cursor-pointer justify-center flex flex-row w-8 h-8">
        <Image
          src={WindowMinimizeIcon}
          alt="Close window"
          className="w-4 flex flex-row"
        ></Image>
      </div>
      <div
        className="hover:bg-amber-600 px-2 z-10 cursor-pointer justify-center flex flex-row w-8 h-8 inset-0"
        onClick={props.onClick}
      >
        <Image
          src={WindowMaximizeIcon}
          alt="Close window"
          className="w-4 flex flex-row"
        ></Image>
      </div>
      <div className="hover:bg-amber-600 px-2 z-10 cursor-pointer justify-center flex flex-row w-8 h-8">
        <Image
          src={WindowCloseIcon}
          alt="Close window"
          className="w-4 flex flex-row"
        ></Image>
      </div>
      <div className="absolute flex flex-row items-center text-center px-2 w-full text-sm inset-0">
        {props.title}
      </div>
    </div>
  );
};

export default WindowControlButtons;

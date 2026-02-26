import WindowCloseIcon from "../public/window-close.svg";
import Image from "next/image";

const SidePanel = (props: {
  title: string;
  image: string;
  isVisible: boolean;
  onClose: () => void;
}) => {
  if (!props.isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={props.onClose}></div>
      <div className="h-screen top-0 right-0 bg-white flex flex-col fixed z-50 w-200 overflow-scroll border-l-2">
        <div className="border-b-2 w-full fixed bg-amber-200">
          <div className="flex flex-row gap-1 h-8">
            <div
              className="p-2 hover:cursor-pointer hover:bg-amber-700"
              onClick={props.onClose}
            >
              <Image
                src={WindowCloseIcon}
                alt="Close window"
                className="w-4 flex flex-row"
              ></Image>
            </div>
            <div className="flex flex-row items-center">
              Visualizando "{props.title}"
            </div>
          </div>
        </div>
        <Image src={props.image} alt={props.title} className="pt-8"></Image>
      </div>
    </>
  );
};

export default SidePanel;

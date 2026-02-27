import Image, { StaticImageData } from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

const SidePanel = (props: {
  title: string;
  image: { default: StaticImageData };
  isVisible: boolean;
  onClose: () => void;
}) => {
  if (!props.isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={props.onClose}></div>
      <div className="h-screen top-0 right-0 bg-white flex flex-col fixed z-50 w-200 overflow-scroll border-l-3">
        <div className="border-b-3 w-full fixed bg-amber-200">
          <div className="flex flex-row gap-1 h-8">
            <div
              className="hover:cursor-pointer hover:bg-amber-700"
              onClick={props.onClose}
            >
              <XMarkIcon className="w-8 flex flex-row items" />
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

import Image, { StaticImageData } from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

const SidePanel = (props: {
  title: string;
  image: string;
  isVisible: boolean;
  onClose: () => void;
}) => {
  if (!props.isVisible) return null;

  return (
    <div className="z-50">
      <div className="fixed inset-0" onClick={props.onClose}></div>
      <div className="h-screen top-0 right-0 bg-white flex flex-col fixed w-1/2 overflow-scroll border-l-3">
        <div className="border-b-3 w-full fixed bg-amber-600">
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
        <Image src={props.image} width={200} height={200} alt={props.title} className="pt-8"></Image>
      </div>
    </div>
  );
};

export default SidePanel;

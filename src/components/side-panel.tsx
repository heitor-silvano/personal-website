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
      <div
        className="fixed inset-0 z-40"
        onClick={props.onClose}
      ></div>
      <div className="h-screen top-0 right-0 bg-white flex flex-col fixed z-50 w-200 overflow-scroll border-l-2">
        <div
          className="p-2 border-b-2 w-full fixed bg-amber-200"
          onClick={props.onClose}
        >
          <div className="p-2 w-min hover:cursor-pointer hover:bg-amber-700">
            X
          </div>
        </div>
        <Image src={props.image} alt={props.title} className="pt-14"></Image>
        <div className="p-4">{props.title}</div>
      </div>
    </>
  );
};

export default SidePanel;

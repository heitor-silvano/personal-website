import Draggable from "react-draggable";
import Image from "next/image";
import { useRef } from "react";

const DraggableArtwork = (props: { title: string; imageFile: string }) => {
  const nodeReference = useRef<HTMLDivElement>(null);
  const startXPosition = Math.floor(Math.random() * (screen.width - 75));
  const startYPosition = Math.floor(Math.random() * (screen.height - 150));

  return (
    <Draggable
      nodeRef={nodeReference}
      defaultPosition={{ x: startXPosition, y: startYPosition }}
      bounds={false}
    >
      <div
        ref={nodeReference}
        className="w-75 h-full text-center align-middle border border-gray-300 shadow-2xl"
      >
        <div className="w-full bg-white p-2 border-b border-gray-300">
          {props.title}
        </div>
        <Image src={props.imageFile} alt="artwork" className="w-full"></Image>
      </div>
    </Draggable>
  );
};

export default DraggableArtwork;

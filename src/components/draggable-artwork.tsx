"use client";
import Draggable from "react-draggable";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SidePanel from "./side-panel";

let highestZIndex = 1;

const DraggableArtwork = (props: { title: string; imageFile: string }) => {
  const [zIndex, setZIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [defaultPosition, setDefaultPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const x = Math.floor(Math.random() * (screen.width - 350));
    const y = Math.floor(Math.random() * (screen.height - 600));

    setDefaultPosition({ x, y });
  }, []);

  const bringToFront = () => {
    highestZIndex += 1;
    setZIndex(highestZIndex);
  };

  const handleOpenPanel = () => {
    setIsPanelOpen(true);
  };

  const nodeReference = useRef<HTMLDivElement>(null);

  if (!defaultPosition) return null;

  return (
    <>
      <Draggable
        nodeRef={nodeReference}
        defaultPosition={defaultPosition}
        onStart={bringToFront}
        onMouseDown={() => setIsDragging(true)}
        onStop={() => setIsDragging(false)}
        bounds="parent"
      >
        <div
          ref={nodeReference}
          className={`absolute inline-block max-w-75 text-center align-middle border border-gray-300 shadow-2xl ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onMouseDown={bringToFront}
          style={{ zIndex }}
        >
          <div className="flex flex-row border-gray-300 bg-white border-b w-full justify-end p-2">
            <div className="hover:bg-amber-600 px-2 z-10 cursor-pointer">-</div>
            <div
              className="hover:bg-amber-600 px-2 z-10 cursor-pointer"
              onClick={handleOpenPanel}
            >
              []
            </div>
            <div className="hover:bg-amber-600 px-2 z-10 cursor-pointer">X</div>
            <div className="absolute flex flex-row justify-center w-full">
              {props.title}
            </div>
          </div>

          <Image
            src={props.imageFile}
            draggable={false}
            alt="artwork"
            className="w-full"
          ></Image>
        </div>
      </Draggable>

      <SidePanel image={props.imageFile} title={props.title} isVisible={isPanelOpen} onClose={() => setIsPanelOpen(false)}/>
    </>
  );
};

export default DraggableArtwork;

"use client";
import Draggable from "react-draggable";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import SidePanel from "./side-panel";
import WindowControlButtons from "./window-control-buttons";

let highestZIndex = 1;

const DraggableArtwork = (props: {
  title: string;
  imageFile: string
}) => {
  const [zIndex, setZIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [defaultPosition, setDefaultPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const x = Math.floor(Math.random() * (window.innerWidth - 300));
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
          <WindowControlButtons onClick={handleOpenPanel} title={props.title} />
          <Image
            src={props.imageFile}
            draggable={false}
            width={300}
            height={400}
            alt="artwork"
            className="w-full"
          ></Image>
        </div>
      </Draggable>

      <SidePanel
        image={props.imageFile}
        title={props.title}
        isVisible={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      />
    </>
  );
};

export default DraggableArtwork;

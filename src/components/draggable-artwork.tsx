"use client";
import Draggable from "react-draggable";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

let highestZIndex = 1;

const DraggableArtwork = (props: { title: string; imageFile: string }) => {
  const [zIndex, setZIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
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

  const nodeReference = useRef<HTMLDivElement>(null);

  if (!defaultPosition) return null

  return (
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
        <div className="w-full bg-white p-2 border-b border-gray-300">
          {props.title}
        </div>
        <Image
          src={props.imageFile}
          draggable={false}
          alt="artwork"
          className="w-full"
        ></Image>
      </div>
    </Draggable>
  );
};

export default DraggableArtwork;

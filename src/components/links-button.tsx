"use client";
import React, { useEffect, useRef, useState } from "react";

const LinksButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleOpenContextMenu = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
    setIsOpen(!isOpen);
  };

  const handleOpenLink = (link: string) => {
    window.open(link, "_blank");
    setIsOpen(!isOpen);
  };

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const links: Array<{ url: string; title: string }> = [
    {
      url: "https://www.youtube.com/@CrazzeHL",
      title: "youtube",
    },
    {
      url: "https://www.deviantart.com/crazzehl",
      title: "deviantart - paintings & drawings",
    },
    {
      url: "https://www.artstation.com/crazze",
      title: "artstation - 3d",
    },
  ];

  return (
    <>
      <div
        className="bg-purple-500 hover:bg-purple-300 font-mono border-3 z-20 text-gray-800 font-semibold border-gray-800 rounded-md hover:cursor-pointer py-2 px-4"
        onClick={handleOpenContextMenu}
      >
        LINKS
      </div>
      <div
        ref={menuRef}
        style={
          isOpen
            ? { top: mousePosition.y, left: mousePosition.x }
            : { top: 0, left: 0 }
        }
        className={`border border-gray-200 shadow-2xl absolute z-21 ${isOpen ? "opacity-100" : "opacity-0"}`}
      >
        {links.map((item, index) => (
          <div
            key={`context-item-${index}`}
            className="bg-white w-55 hover:cursor-pointer p-2 gap-2 text-xs hover:bg-gray-200"
            onClick={() => handleOpenLink(item.url)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default LinksButton;

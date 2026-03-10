import React, { useState } from "react";

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

  const handleCloseClickingOut = () => {
    if (!isOpen) return

    setIsOpen(false);
  };

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
        className="bg-emerald-500 font-mono border-3 z-10 text-emerald-100 font-semibold border-gray-800 rounded-md hover:cursor-pointer py-2 px-4"
        onClick={handleOpenContextMenu}
      >
        LINKS
      </div>
      <div
        style={
          isOpen
            ? { top: mousePosition.y, left: mousePosition.x }
            : { top: 0, left: 0 }
        }
        className={`border border-gray-200 shadow-2xl absolute z-11 ${isOpen ? "opacity-100" : "opacity-0"}`}
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

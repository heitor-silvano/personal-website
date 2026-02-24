"use client";
import DraggableArtwork from "@/components/draggable-artwork";

const ArtPage = () => {
  const joon = require("../../public/jo-on.jpg");
  const peachy = require("../../public/peachy-fly.jpg");
  const artworks = [
    { title: "jo-on portrait", image: joon },
    { title: "peachy fly", image: peachy },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {artworks.map((artwork, id) => {
        return (
          <DraggableArtwork
            imageFile={artwork.image}
            title={artwork.title}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default ArtPage;

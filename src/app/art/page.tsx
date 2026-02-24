"use client";
import DraggableArtwork from "@/components/draggable-artwork";

const ArtPage = () => {
  const joon = require("../../public/jo-on.jpg");
  const peachy = require("../../public/peachy-fly.jpg");
  const artworks = [
    { title: "jo-on portrait", image: joon },
    { title: "peachy fly", image: peachy },
  ];

  return artworks.map((artwork, id) => {
    return <DraggableArtwork imageFile={artwork.image} title={artwork.title} key={id} />;
  });
};

export default ArtPage;

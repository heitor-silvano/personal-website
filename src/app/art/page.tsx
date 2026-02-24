"use client";
import DraggableArtwork from "@/components/draggable-artwork";

const ArtPage = () => {
  const joon = require("../../public/jo-on.jpg");
  const peachy = require("../../public/peachy-fly.jpg");
  const selfPortrait = require("../../public/self-portrait.png");
  const sleephPhotographer = require("../../public/sleepy-photographer.png");
  const cristalCristals = require("../../public/cristal-cristals.png");
  const artworks = [
    { title: "jo-on portrait", image: joon },
    { title: "peachy fly", image: peachy },
    { title: "self-portrait", image: selfPortrait },
    { title: "sleepy photographer", image: sleephPhotographer },
    { title: "cristal cristals", image: cristalCristals },
  ];

  return (
    <div className="relative min-h-[calc(100vh-3rem)] overflow-hidden">
      <div className="px-4">
        <p>
          essa é a parte do site que eu apresento meus desenhos, pinturas entre
          outras coisas do gênero
        </p>
        <p>clique nelas para mais informações</p>
      </div>
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

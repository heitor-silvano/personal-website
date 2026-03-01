"use client";
import DraggableArtwork from "@/components/draggable-artwork";
import { useEffect, useState } from "react";

const ArtPage = () => {
  const [artworks, setArtworks] = useState<
    Array<{
      title: string;
      imageUrl: string;
      description?: string;
    }>
  >([]);

  useEffect(() => {
    fetch("/api/artworks")
      .then((res) => res.json())
      .then(setArtworks);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-3rem)] overflow-hidden">
      <div className="px-4">galeria</div>
      {artworks.map(
        (artwork, id) =>
          artwork.imageUrl && (
            <DraggableArtwork
              imageFile={artwork.imageUrl}
              title={artwork.title}
              key={id}
            />
          ),
      )}
    </div>
  );
};

export default ArtPage;

"use client";
import DraggableArtwork from "@/components/draggable-artwork";
import { useEffect, useState } from "react";

const ArtPage = () => {
  const [organizationType, setOrganizationType] = useState<
    "organized" | "messy"
  >("messy");
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

  const handleOrganization = () => {
    setOrganizationType(organizationType === "messy" ? "organized" : "messy");
  };

  return (
    <div className="h-screen overflow-hidden pt-2.5 bg-gray-100">
      <div className="flex justify-center">
        <div className="p-2 fixed right-0 bottom-0 z-1">
          <div
            className="p-4 mt-2 border border-dashed bg-white text-xs w-min flex flex-row text-center hover:bg-purple-300 hover:cursor-pointer"
            onClick={handleOrganization}
          >
            <p>
              {organizationType === "messy"
                ? "organizar essa bagunça"
                : "desorganizar 🔥"}
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-screen overflow-visible">
        {artworks.map(
          (artwork, id) =>
            artwork.imageUrl && (
              <DraggableArtwork
                imageFile={artwork.imageUrl}
                title={artwork.title}
                key={id}
                type={organizationType}
              />
            ),
        )}
      </div>
    </div>
  );
};

export default ArtPage;

"use client";
import Link from "next/link";
import KeyboardButton from "./keyboard-button";

const MainMenu = () => {
  return (
    <div className="p-2">
      <div className="flex flex-row gap-2 pointer-events-auto">
        <Link href={"/"} className="bg-amber-600 text-white px-4 py-2 transition-colors hover:bg-black border border-black">Início</Link>
        <Link href={"art"} className="bg-amber-600 text-white px-4 py-2 transition-colors hover:bg-black border border-black">Galeria</Link>
      </div>
    </div>
  );
};

export default MainMenu;

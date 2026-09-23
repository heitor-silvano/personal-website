"use client";
import KeyboardButton from "./keyboard-button";

const MainMenu = () => {
  return (
    <div className="p-2">
      <div className="flex flex-row gap-2">
        <KeyboardButton text="início" path="/" />
        <KeyboardButton text="art" path="art" />
      </div>
    </div>
  );
};

export default MainMenu;

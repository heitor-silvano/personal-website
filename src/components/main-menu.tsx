"use client";
import KeyboardButton from "./keyboard-button";

const MainMenu = () => {
  return (
    <div className="p-2">
      <div className="flex flex-row gap-2">
        <KeyboardButton text="galeria" path="art" />
        <KeyboardButton text="wip" path="micro-blog" />
        <KeyboardButton text="wip" path="videos" />
      </div>
    </div>
  );
};

export default MainMenu;

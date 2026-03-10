"use client";
import { useState } from "react";
import Button from "./button";
import LinksButton from "./links-button";

const MainMenu = () => {
  return (
    <div className="p-2">
      <div className="flex flex-row gap-2">
        <Button text="galeria" path="art" />
        <Button text="wip" path="micro-blog" />
        <Button text="wip" path="videos" />
        <LinksButton />
      </div>
    </div>
  );
};

export default MainMenu;

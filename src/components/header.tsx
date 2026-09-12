"use client";

import { usePathname } from "next/navigation";

const Header = () => {
  const path = getPath()

  return (
    <>
      pause<span className="text-accent">/break</span>
      {path}
    </>
  );
};

const getPath = () => {
  const path = usePathname();

  if (path === "/"){
    return ""
  }

  return path
};

export default Header;

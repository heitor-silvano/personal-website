"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BackButton = () => {
  const path = usePathname();

  if (path === "/") return false;

  return (
    <Link
      href="/"
      className="flex flex-row p-2 items-center hover:bg-amber-600 transition-all duration-200 font-mono"
    >
      [esc]
    </Link>
  );
};

export default BackButton;

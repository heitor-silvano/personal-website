"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const path = usePathname();

  if (path === "/") return false;

  const router = useRouter()

  useEffect(() => {
    const handleEventKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        router.push("/")
      }
    };

    document.addEventListener("keydown", handleEventKeyDown);
  }, []);

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

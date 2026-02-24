"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BackButton = () => {
  const path = usePathname();

  if (path === "/") return false;

  return <Link href="/" className="p-2 hover:bg-amber-600 transition-all duration-200"> {"<- Voltar"}</Link>;
};

export default BackButton;

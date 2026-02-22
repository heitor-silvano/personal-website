"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BackButton = () => {
  const path = usePathname();

  if (path === "/") return false;

  return <Link href="/"> {"<- Voltar"}</Link>;
};

export default BackButton;

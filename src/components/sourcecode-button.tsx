import { GitBranch } from "lucide-react";
import Link from "next/link";

const SourcecodeButton = () => {
  return (
    <Link
      href={"https://github.com/heitor-silvano/personal-website"}
      target="_blank"
      className="flex items-center bg-black text-white px-4 py-2 gap-2 hover:cursor-pointer hover:bg-white hover:text-black hover:ring transition-all group"
    >
      Código
      <GitBranch stroke="white" height={18} width={18} className="group-hover:stroke-black transition-all" />
    </Link>
  );
};

export default SourcecodeButton;

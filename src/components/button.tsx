"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Button = (props: { text: string; path: string}) => {
  const buttonClasses: string = `bg-gray-500 pt-2 pl-2 pr-2 pb-4 hover:bg-gray-400 hover:border-t-gray-200 hover:border-l-gray-300 hover:border-b-gray-700 hover:border-r-gray-600 hover:outline-gray-600 hover:text-gray-600 hover:font-gray-600 transition-all duration-100 ease-linear border-3 border-r-20 border-b-8 border-r-gray-700 border-t-gray-300 outline-3 border-b-gray-800 border-l-gray-400 rounded-sm font-mono text-gray-800 text-shadow-2xs`;
  const selectedButtonClasses = buttonClasses.replaceAll("gray", "amber");

  const path = usePathname();
  const isPathSelected = path === `/${props.path}`;
  return (
    <div className="p-2">
      <Link
        href={props.path}
        className={isPathSelected ? selectedButtonClasses : buttonClasses}
      >
        {props.text.toUpperCase()}
      </Link>
    </div>
  );
};

export default Button;

import Link from "next/link";

const Button = (props: { text: string; path: string }) => {
  return (
    <div className="p-2">
      <Link
        href={props.path}
        className="bg-gray-500 p-2 hover:bg-gray-400 hover:border-t-gray-200 hover:border-l-gray-300 hover:border-b-gray-700 hover:border-r-gray-600 hover:outline-gray-600 hover:text-gray-600 hover:font-gray-600 transition-all duration-100 ease-linear border-3 border-r-15 border-b-8 border-r-gray-700 border-t-gray-300 outline-2 border-b-gray-800 border-l-gray-400 rounded-sm font-mono text-gray-800 text-shadow-2xs"
      >
        {props.text.toUpperCase()}
      </Link>
    </div>
  );
};

export default Button;

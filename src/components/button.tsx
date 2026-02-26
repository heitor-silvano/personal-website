import Link from "next/link";

const Button = (props: { text: string; path: string }) => {
  return (
    <div className="p-2">
      <Link
        href={props.path}
        className="bg-gray-300 p-2 hover:bg-gray-200 hover:outline-gray-600 hover:text-gray-600 hover:font-gray-600 transition-all duration-100 ease-linear border-3 border-r-10 border-b-8 border-r-gray-700 border-t-gray-400 outline-2 border-b-gray-800 border-l-gray-500 rounded-sm font-mono text-gray-800"
      >
        {props.text}
      </Link>
    </div>
  );
};

export default Button;

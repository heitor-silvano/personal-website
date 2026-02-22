import Link from "next/link";

const Button = (props: { text: string; path: string }) => {
  return (
    <div className="p-2">
      <Link
        href={props.path}
        className="bg-amber-300 p-2 hover:bg-amber-700 hover:text-white hover:rounded-xl transition-all duration-100 ease-linear"
      >
        {props.text}
      </Link>
    </div>
  );
};

export default Button;

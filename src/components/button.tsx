import Link from "next/link";

const Button = (props: { text: string, path: string }) => {
  return (
    <div className="p-2">
      <Link
        href={props.path}
        className="bg-emerald-300 p-2 hover:bg-emerald-700 hover:text-white"
      >
        {props.text}
      </Link>
    </div>
  );
};

export default Button;

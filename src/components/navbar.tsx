import BackButton from "./back-button";

const Navbar = () => {
  return (
    <div className="bg-amber-200 flex flex-row items-center p-4 gap-4 fixed top-0 left-0 w-full h-12 z-50 outline outline-gray-300">
      <div className="z-2">
        <BackButton/>
      </div>
      <div className="underline inset-0 absolute flex items-center justify-center">
        pause break
      </div>
    </div>
  );
};

export default Navbar;

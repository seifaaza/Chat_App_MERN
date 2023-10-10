import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-6 w-full flex justify-start z-10">
      <div className="mx-auto w-full md:max-w-5xl lg:max-w-6xl xl:max-w-7xl ">
        <Link to={"/"} className="cursor-pointer">
          <img
            src="/chat_flow_logo.svg"
            alt="Chat Flow Logo"
            className=" w-8"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

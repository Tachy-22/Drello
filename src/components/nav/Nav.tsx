import DesktopNav from "./DesktopNav";

const Nav = () => {

  return (
    <nav className="py-[0.5rem] w-full flex justify-center absolute top-0 z-30 bg-white shadow-lg">
      <DesktopNav />
    </nav>
  );
};

export default Nav;

import ThemeBtn from "../ThemeBtn/ThemeBtn";
import Links from "../Links/Links";

const Header = () => {
  return (
    <div className="fixed top-0 z-20 flex w-[97%] items-center justify-between bg-base backdrop-blur px-4 py-1">
      <div>
        <Links />
      </div>
      <div className="flex items-center gap-2">
        <button className="btn btn-primary btn-sm  rounded-sm text-xl text-white ">
          <a href="">My resume</a>
        </button>
        <ThemeBtn />
      </div>
    </div>
  );
};

export default Header;

import ThemeBtn from "../ThemeBtn/ThemeBtn";
import Links from "../Links/Links";

const Header = ({setIsPolish, isPolish}) => {
  return (
    <div className="fixed top-0 z-20 flex w-[90%] md:w-[94%] lg:w-[97%] items-center justify-between bg-base backdrop-blur px-4 py-2">
      <div>
        <Links />
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => setIsPolish(!isPolish)} className="btn-sm btn-ghost rounded-sm ">
           {isPolish 
           ? <img className="w-6" src="../../assets/Flag_of_the_United_Kingdom_(3-5).svg" alt="" />
           : <img className="w-6 border-[1px] border-zinc-700" src="../../assets/Flag_of_Poland.svg" alt="" />} </button>
        <button onClick={() => window.open("/assets/Oleksandr_Palyukh_JS_DEV.pdf")} className="btn btn-primary btn-sm  rounded-sm  text-xl text-white ">
          <a href="">{isPolish ? "Moje CV" : "My Resume"}</a>
        </button>
        <ThemeBtn />
      </div>
    </div>
  );
};

export default Header;

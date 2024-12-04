const SideBarLink = ({ value, href, children, isSelected, setSelected }) => {
  return (
    <a
      style={{ rotate: "90deg" }}
      className={`btn btn-ghost btn-sm rounded-none md:btn-md lg:text-lg 
        ${isSelected === value 
            ? "border-t-4 border-t-primary bg-neutral opacity-85" 
            : "border-transparent"}`}
      href={href}
      onClick={() => {
        setSelected(value);
      }}
    >
      {children}
    </a>
  );
};

export default SideBarLink;

const SideBarLink = ({ value, href, children }) => {
  return (
    <a
      style={{ rotate: "90deg" }}
      className=" btn btn-ghost   lg:text-lg"
      href={href}
    >
      {children}
    </a>
  );
};

export default SideBarLink;

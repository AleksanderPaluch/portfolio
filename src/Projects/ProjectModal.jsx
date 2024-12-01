import React from "react";

const ProjectModal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return <></>;

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex cursor-pointer justify-center overflow-y-scroll bg-zinc-950/50 px-4 py-12 backdrop-blur"
      >
        <button className="btn-circle btn-outline btn-primary btn-sm absolute right-8 top-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="h-[800px] w-full max-w-2xl bg-base-100 ">
            <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            hic excepturi repellat est labore consequatur non sed neque aliquam
            minus cupiditate eveniet maxime voluptate, fugiat commodi architecto
            aliquid officia voluptas.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;

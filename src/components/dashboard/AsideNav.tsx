"use client";
import Link from "next/link";

import { useCallback, useState } from "react";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Modal from "../modal/Modal";
import AddMemberForm from "./AddMemberForm";
const navData = [
  { href: "/dashboard/boards", text: "Boards", icon: <TbLayoutBoardSplit /> },
  {
    href: "/dashboard/members",
    text: "Members",
    icon: <FaPeopleGroup />,
    add: true,
  },
];
const yourBoardsData = [
  { href: "/dashboard/demo1", text: "Demo1" },
  { href: "/dashboard/demo2", text: "Demo2" },
];

const AsideNav = () => {
  const [isAsideNavVisible, setAsideNavVisibility] = useState(true);
  const handleAsideToggle = useCallback(() => {
    setAsideNavVisibility((prev) => !prev);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <aside
      className={`" bg-gray-800/90 text-white h-full w-[18rem] transition-all duration-[1s]  ${
        isAsideNavVisible ? "" : "absolute -translate-x-[100%] "
      } gap-3 `}
    >
      <div className=" flex justify-between items-center p-3  border-b drop-shadow-lg">
        <div className="">
          <h2 className="text-md">Drello Workspace</h2>
          <p className="uppercase">free</p>
        </div>
        <div
          onClick={handleAsideToggle}
          className={` ${
            isAsideNavVisible
              ? "text-white -rotate-90 border-white"
              : "translate-x-[150%] text-black rotate-90 border-black "
          } cursor-pointer flex justify-center items-center  text-2xl font-extrabold  rounded-full h-8 w-8 border  transition-all duration-[1s]`}
        >
          <span>&#94;</span>
        </div>
      </div>
      <div className=" flex flex-col pt-[1rem] ">
        {navData.map(({ href, text, icon, add }, index) => (
          <Link
            key={index}
            className="hover:bg-white/20 px-3 py-2 flex gap-2 items-center "
            href={href}
          >
            {icon}
            <div className=" flex justify-between w-full items-center">
              <p className="text-sm">{text}</p>
              {add && (
                <FaPlus
                  onClick={openModal}
                  className="hover:bg-white/20 rounded-md p-1 h-fit flex justify-center items-center text-center text-xl"
                />
              )}
            </div>
          </Link>
        ))}
      </div>
      <div className=" flex flex-col ">
        <p className="text-md font-semibold px-3 py-2">Your Boards</p>
        <div className=" flex flex-col text-sm">
          {yourBoardsData.map(({ href, text }, index) => (
            <Link
              key={index}
              className="hover:bg-white/20 px-3 py-2"
              href={href}
            >
              <p className="">{text}</p>
            </Link>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <AddMemberForm/>
      </Modal>
    </aside>
  );
};

export default AsideNav;

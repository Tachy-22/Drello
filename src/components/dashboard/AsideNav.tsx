"use client";
import Link from "next/link";

import { useCallback, useState } from "react";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Modal from "../modal/Modal";
import AddMemberForm from "./AddMemberForm";
import useModalControls from "./controls/hooks/useModalControls";
import { members, boards } from "./controls/hooks/useModalControls";
import AddBoardForm from "./AddBoardForm";
import { InitialBoardsData } from "../Boards/initialdata";

const navData = [
  { href: "/dashboard/boards", text: "Boards", icon: <TbLayoutBoardSplit /> },
  {
    href: "/dashboard/members",
    text: "Members",
    icon: <FaPeopleGroup />,
    add: true,
  },
];


const AsideNav = () => {
  const [isAsideNavVisible, setAsideNavVisibility] = useState(true);
  const handleAsideToggle = useCallback(() => {
    setAsideNavVisibility((prev) => !prev);
  }, []);

  const { isOpen, modalChild, handleModalChild, closeModal } =
    useModalControls();

  return (
    <aside
      className={`" bg-gray-800/90 text-white top-0 h-full w-[18rem] transition-all duration-[0.1s]  ${
        isAsideNavVisible
          ? "absolute lg:static -translate-x-[100%] lg:translate-x-0"
          : "absolute -translate-x-[100%] "
      } gap-3 z-50`}
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
              : "translate-x-[150%] translate-y-[160%] bg-white text-black rotate-90 border-black "
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
                  onClick={() => {
                    handleModalChild(members);
                  }}
                  className="hover:bg-white/20 rounded-md p-1 h-fit flex justify-center items-center text-center text-2xl"
                />
              )}
            </div>
          </Link>
        ))}
      </div>
      <div className=" flex flex-col ">
        <p className="text-md font-semibold px-3 py-2 flex justify-between items-center">
          Your Boards{" "}
          <FaPlus
            onClick={() => {
              handleModalChild(boards);
            }}
            className="hover:bg-white/20 rounded-md p-1 h-fit flex justify-center items-center text-center text-2xl"
          />
        </p>
        <div className=" flex flex-col text-sm">
          {InitialBoardsData.boardOrder.map((columnId, index) => {
            const boardTitle =
              InitialBoardsData.boards[
                columnId as keyof typeof InitialBoardsData.boards
              ].title;
            return (
              <Link
                key={index}
                className="hover:bg-white/20 px-3 py-2"
                href={columnId}
              >
                <p className="">{boardTitle}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        {modalChild === members ? (
          <AddMemberForm />
        ) : (
          <AddBoardForm onClose={closeModal} />
        )}
      </Modal>
    </aside>
  );
};

export default AsideNav;

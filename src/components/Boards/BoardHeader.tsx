import React from "react";
import { InitialBoardsData } from "./initialdata";

const BoardHeader = ({ boardId }: { boardId: string }) => {
  const boardTitle =
    InitialBoardsData.boards[boardId as keyof typeof InitialBoardsData.boards]
      ?.title;
  return (
    <div className="text-white w-full flex justify-between pb-4 mb-2 backdrop-blur-3xl backdrop-brightness-75 p-6">
      <div className="w-fit ">{boardTitle}</div>
      <ul className="w-fit flex gap-3">
        <li className="">filter</li>
        <li className="">profiledropdown </li>
        <li className="">share</li>
        <li className="">settings</li>
      </ul>
    </div>
  );
};

export default BoardHeader;

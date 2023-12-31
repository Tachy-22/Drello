"use client";

import { FC, useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { GoCheck } from "react-icons/go";
interface AddBoardFormProps {
  onClose: () => void;
}

const backgroundColors = [
  "rgb(34, 140, 213)",
  "rgb(11, 80, 175)",
  "rgb(103, 66, 132)",
  " rgb(168, 105, 193)",
  "rgb(239, 118, 58)",
  "rgb(244, 136, 166)",
  "rgb(63, 164, 149)",
];

const AddBoardForm: FC<AddBoardFormProps> = ({ onClose }) => {
  const [bgColor, setBgColor] = useState<string>("rgb(34, 140, 213)");
  const [boardTitle, setBoardTitle] = useState<string >("");

  const handleBackgroundColorSelection = useCallback((color: string) => {
    setBgColor(color);
  }, []);
  
  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setBoardTitle(e.target.value);
    },
    []
  );

  const handleFormSubmission = useCallback(() => {
    const boardCreationData = {
      boardTitle,
      bgColor,
    };
    console.log("formdata :", boardCreationData);
    setBoardTitle("");
    onClose();
  }, [bgColor, boardTitle, onClose]);

  const isButtonDisabled = useMemo(
    () => boardTitle === null || boardTitle === "",
    [boardTitle]
  );

  return (
    <form className="rounded-lg bg-white p-6 w-fit md:w-[25rem] flex flex-col gap-3">
      <div className="header font-semibold w-full text-center">
        Create board
      </div>
      <div className=" flex justify-center">
        <Image
          style={{ backgroundColor: bgColor }}
          src={`/svgs/createBoardImg.svg`}
          alt={`template`}
          width={200}
          height={200}
          className="border p-2 rounded-md "
        />
      </div>
      <div className="form flex flex-col gap-1">
        <div className="">
          <label
            htmlFor="background"
            className=" text-sm font-bold text-gray-700"
          >
            Background :
          </label>
          <ul className="flex justify-between my-1">
            {backgroundColors.map((color, id) => {
              return (
                <li
                  onClick={() => {
                    handleBackgroundColorSelection(color);
                  }}
                  key={id}
                  className=" "
                >
                  <button
                    type="button"
                    style={{ backgroundColor: `${color}` }}
                    className={` h-10 w-10  rounded-md hover:brightness-90 transition-colors duration-[0.3s] flex justify-center items-center text-gray-200 text-base font-light `}
                  >
                    {color === bgColor && <GoCheck />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">
          <label
            htmlFor="title"
            className=" text-sm font-bold mb-2 text-gray-700"
          >
            Board title :
          </label>
          <div className="w-full border border-gray-300 rounded-lg   my-1">
            <input
              type="text"
              id="title"
              name="board-title"
              className="outline- p-2 px-3 w-full rounded-lg"
              autoFocus
              autoComplete=""
              value={boardTitle}
              onChange={handleTitleChange}
            />
          </div>
        </div>
        <button
          disabled={isButtonDisabled}
          onClick={handleFormSubmission}
          className={`${
            isButtonDisabled
              ? "bg-black/20 border border-gray-400 cursor-not-allowed "
              : "bg-blue-500 hover:bg-blue-500/90"
          } text-white w-full  text-center p-1 rounded-lg my-2 transition-colors duration-200 "`}
          type="submit"
        >
          create
        </button>
      </div>
    </form>
  );
};

export default AddBoardForm;

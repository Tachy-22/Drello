import { FC } from "react";
interface AddBoardFormProps {
  onClose: () => void;
}

const AddBoardForm: FC<AddBoardFormProps> = ({ onClose }) => {
  return (
    <div className="rounded-lg bg-white p-6 w-fit md:w-[30rem] flex flex-col gap-3">
      <div className="header font-semibold w-full text-center">
        Create board
      </div>
      <form method="dialog" className="form ">
        <label htmlFor="title" className=" text-sm font-bold text-gray-700">
          Board title :
        </label>
        <div className="w-full border rounded-lg  p-2 px-3 my-1">
          <input
            type="text"
            id="title"
            className="outline-none"
            autoFocus
            autoComplete=""
          />
        </div>
        <button
          onClick={onClose}
          className=" text-white w-full bg-blue-500 hover:bg-blue-500/90 text-center p-1 rounded-lg my-2 transition-colors duration-200"
          type="submit"
        >
          create
        </button>
      </form>
    </div>
  );
};

export default AddBoardForm;

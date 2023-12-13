 import{ InitialBoardsData } from "../../initialdata";

  const columnIds = (boardTitle: string) => {
  const columns =
    InitialBoardsData.boards[
      boardTitle as keyof typeof InitialBoardsData.boards
    ]?.columnIds;

  return !!columns ? columns : [];
};

export default columnIds
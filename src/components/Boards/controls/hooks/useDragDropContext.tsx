import React from "react";
import initialData from "../../initialdata";
import { DropResult } from "@hello-pangea/dnd";
import columnIds from "../functions/ColumnIds";

const useDragDropContext = (boardTitle: string) => {
  const [listData, setListData] = React.useState<InitialData>(initialData);
  const [boardData, setBoardData] = React.useState<string[]>(
    columnIds(boardTitle)
  );

  const handleDragEnd = React.useCallback(
    (result: DropResult) => {
      const { destination, source, draggableId, type } = result;

      //handle invalid drops
      const nullDropCondition =
        destination?.droppableId === source.droppableId &&
        destination?.index === source.index;

      if (!destination) {
        return;
      }

      if (nullDropCondition) {
        return;
      }


      //handle column type drops
      if (type === "column") {
        const newColumnOrder = Array.from(boardData);
        newColumnOrder.splice(source.index, 1);
        newColumnOrder.splice(destination.index, 0, draggableId);

        setBoardData(newColumnOrder);

        return;
      }

      const home = listData.columns[source.droppableId];
      const foreign = listData.columns[destination.droppableId];

      if (home === foreign) {
        const newTaskIds = Array.from(home.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newHome = {
          ...home,
          taskIds: newTaskIds,
        };

        const newState = {
          ...listData,
          columns: {
            ...listData.columns,
            [newHome.id]: newHome,
          },
        };

        setListData(newState);

        return;
      }


      // handle moving from one list to another
      const homeTaskIds = Array.from(home.taskIds);
      homeTaskIds.splice(source.index, 1);
      const newHome = {
        ...home,
        taskIds: homeTaskIds,
      };

      const foreignTaskIds = Array.from(foreign.taskIds);
      foreignTaskIds.splice(destination.index, 0, draggableId);
      const newForeign = {
        ...foreign,
        taskIds: foreignTaskIds,
      };

      const newState = {
        ...listData,
        columns: {
          ...listData.columns,
          [newHome.id]: newHome,
          [newForeign.id]: newForeign,
        },
      };
      setListData(newState);
      return;
    },
    [listData, boardData]
  );
  return { listData, boardData, handleDragEnd };
};

export default useDragDropContext;


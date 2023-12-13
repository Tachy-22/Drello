"use client";

import BoardTab from "./BoardTab";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import useDragDropContext from "./controls/hooks/useDragDropContext";

const BoardTabContainer = ({ boardId }: { boardId: string }) => {
  const { listData, boardData, handleDragEnd } = useDragDropContext(boardId);



  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex gap-4 p-4 px-[3rem]"
            >
              {boardData.map((columnId, index) => {
                const column = listData.columns[columnId];
                const tasks = column.taskIds.map(
                  (taskId) => listData.tasks[taskId]
                );
                return (
                  <BoardTab
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default BoardTabContainer;

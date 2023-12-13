"use client";
import React from "react";
//import BoardTabList from "./BoardTabList";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import BoardTabCard from "./BoardTabCard";

const BoardTab: React.FC<BoardTabProps> = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="flex flex-col gap-2  bg-gray-200 rounded-lg w-[20rem] h-fit "
        >
          <p {...provided.dragHandleProps} className="p-2 text-gray-900 font-semibold">
            {column.title}
          </p>
          <Droppable droppableId={column.id}>
            {(provided, snapshot) => (
              <div
                className={`${
                  snapshot.isDraggingOver ? "bg-gray-400/50 " : ""
                }  gap-3 flex-col flex p-4 transition-colors rounded-lg duration-[1s] h-fit`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.map((task, index) => {
                  return (
                    <BoardTabCard key={task.id} index={index} task={task} />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default BoardTab;

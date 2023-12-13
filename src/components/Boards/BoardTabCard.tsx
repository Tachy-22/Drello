"use client";

import React from "react";
import { Draggable } from "@hello-pangea/dnd";

const BoardTabCard = ({ task, index }: { task: Task; index: number }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={` ${
            snapshot.isDragging ? " " : ""
          } p-3 border border-gray-300 drop-shadow-lg rounded-lg bg-white `}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default BoardTabCard;

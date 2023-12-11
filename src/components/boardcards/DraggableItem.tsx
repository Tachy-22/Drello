import { DragEvent, RefObject } from "react";

type DraggableItemProps = {
  onDragging: (event: DragEvent<HTMLDivElement>, text: string) => void;
  text: string;
  onDraggingOver: (event: DragEvent<HTMLDivElement>, text: string) => void;
  onDraggingEnd: (event: DragEvent<HTMLDivElement>) => void;
};

const DraggableItem: React.FC<DraggableItemProps> = ({
  onDragging,
  text,
  onDraggingOver,
  onDraggingEnd,
}) => {
  return (
    <div
      draggable
      onDragEndCapture={(e) => onDraggingEnd(e)}
      onDragStart={(e) => onDragging(e, text)}
      onDragOver={(e) => onDraggingOver(e, text)}
      className="border w-full p-2  cursor-pointer transition-all duration-[3s] rounded-lg bg-white "
    >
      {JSON.parse(text).cardText}
    </div>
  );
};

export default DraggableItem;

"use client";
import { useState, DragEvent, useRef, useEffect } from "react";
import DraggableItem from "./DraggableItem";
import { InitialItemsType, ListItem, Item } from "./Boards";

const DropTarget = ({
  listKey,
  ListOfItems,
}: {
  listKey: number;
  ListOfItems: ListItem;
}) => {
  const DropTargetRef = useRef(null);
  const [isDraggingOverTarget, setDraggingOverTarget] = useState(false);
  const [boardList, setBoardList] = useState<Item[]>(ListOfItems.items);
  const [itemCurrentlyOver, setListItemCurrentlyOver] = useState<null | string>(
    null
  );
  const [indicatorCursorPosition, setCursorIndicatorPosition] = useState<
    null | string
  >(null);
  const [currentlyDraggedElement, setCurrentlyDraggedElement] = useState<
    string | null
  >(null);
  const [currentlyDraggedElementId, setCurrentlyDraggedElementId] = useState<
    number | null
  >(null);

  // function for the draggableItem
  const handleDragStart = (event: DragEvent<HTMLDivElement>, text: string) => {
    event.dataTransfer.setData("text/plain", text);
    //   console.log(draggableItemRef?.current?.childNodes[0]);
    setCurrentlyDraggedElement(JSON.parse(text).cardText);
    console.log("JSON.parse(text).id", JSON.parse(text), JSON.parse(text).id);
    setCurrentlyDraggedElementId(() => JSON.parse(text).id);
  };

  //confirms that the droptarget is being hoveed
  const handleDraggingOverTarget = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDraggingOverTarget(true);
  };

  //confirms that the draggable item has left the droptarget and then filters the dropList
  const handleDragLeaveTarget = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDraggingOverTarget(false);

    const dataId = JSON.parse(
      event.dataTransfer.getData("text/plain").toString()
    ).id;
    console.log(dataId);

    console.log("Exited Target");
    setBoardList((prevList) => {
      const filteredList = prevList.filter(({ cardText }) => cardText !== "");
      const finalFilteredList = filteredList.filter(
        ({ cardText }) => cardText !== currentlyDraggedElement
      );
      return finalFilteredList;
    });
  };

  const handleDragEnterTarget = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const dataId = JSON.parse(
      event.dataTransfer.getData("text/plain").toString()
    ).id;
    setCurrentlyDraggedElementId(dataId);

    console.log("Entered bound");

    console.log(listKey, dataId);
  };

  //handles where to release the draggable item when it is dropped
  const handleDropOnTarget = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const data = JSON.parse(
      event.dataTransfer.getData("text/plain").toString()
    ).cardText;

    setDraggingOverTarget(false);

    const indexOfItemCard1 = boardList.findIndex(
      (item) => item.cardText === itemCurrentlyOver
    );

    if (indicatorCursorPosition === "top") {
      if (indexOfItemCard1 !== -1) {
        setBoardList((prevList) => {
          const newList = [...prevList];
          newList.splice(indexOfItemCard1, 0, { cardText: data, id: listKey });
          return newList;
        });
      } else {
        setBoardList((prevList) => [
          ...prevList,
          { cardText: data, id: listKey },
        ]);
      }
    } else if (
      indicatorCursorPosition === "bottom" &&
      indexOfItemCard1 !== -1
    ) {
      setBoardList((prevList) => {
        const newList = [...prevList];
        newList.splice(indexOfItemCard1 + 1, 0, {
          cardText: data,
          id: listKey,
        });
        return newList;
      });
    } else {
      setBoardList((prevList) => [
        ...prevList,
        { cardText: data, id: listKey },
      ]);
    }
  };

  //handles knowing where to put the draggable item by setting the position relative to the items its currently over
  const handleDraggingOverCard = (
    event: DragEvent<HTMLDivElement>,
    text: string
  ) => {
    event.preventDefault();
    setListItemCurrentlyOver(JSON.parse(text).cardText);

    const { clientY } = event;
    const cardRect = event.currentTarget.getBoundingClientRect();

    const position =
      clientY - cardRect.top <= cardRect.height / 2 ? "top" : "bottom";

    setCursorIndicatorPosition(position);
  };

  const handleDragEnd = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("drag ended the item dropped was", currentlyDraggedElement);
  };

  return (
    <div
      ref={DropTargetRef}
      onDragEnter={handleDragEnterTarget}
      onDragEnd={handleDragEnd}
      onDragOver={handleDraggingOverTarget}
      onDragLeave={handleDragLeaveTarget}
      onDrop={handleDropOnTarget}
      className={` p-4 pt-[2rem] drop-target  transition-all duration-[3s] flex flex-col border h-full `}
    >
      <div
        className={` draggable-container flex  transition-all duration-500 flex-col border p-4 rounded-lg w-[20rem] gap-4 bg-[#f1f2f4] ${
          isDraggingOverTarget ? "border-red-400 " : ""
        }`}
      >
        <p className="">Dragfrom or drop to</p>
        {boardList.map((cardText, id) => (
          <div key={id} className="relative flex flex-col gap-4">
            {itemCurrentlyOver === cardText.cardText &&
              isDraggingOverTarget &&
              indicatorCursorPosition === "top" && (
                <div
                  className={`"  bg-gray-600/30 w-full h-[2.5rem] transition-all duration-[3s] text-white p-2 rounded-lg border-dashed border border-black/50 `}
                ></div>
              )}
            <DraggableItem
              key={id}
              text={JSON.stringify(cardText)}
              onDragging={handleDragStart}
              onDraggingOver={handleDraggingOverCard}
              onDraggingEnd={handleDragEnd}
            />
            {itemCurrentlyOver === cardText.cardText &&
              isDraggingOverTarget &&
              indicatorCursorPosition === "bottom" && (
                <div className=" bg-gray-600/30 w-full h-[2.5rem] transition-all duration-[3s] text-white p-2 rounded-lg border-dashed border border-black/50"></div>
              )}
          </div>
        ))}
        {boardList.length === 0 && isDraggingOverTarget && (
          <div
            className={`"  bg-gray-600/30 w-full h-[2.5rem] transition-all duration-[3s] text-white p-2 rounded-lg border-dashed border border-black/50 `}
          ></div>
        )}
      </div>
    </div>
  );
};

export default DropTarget;

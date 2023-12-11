"use client";
import React, { useState } from "react";
import DropTarget from "./DropTarget";

export type Item = { cardText: string; id: number };

export type ListItem = {
  items: Item[];
  id: number;
};

export type InitialItemsType = ListItem[];

const Boards: React.FC = () => {
  //all the lists n the board
  const initialItems: InitialItemsType = [
    {
      items: [
        { cardText: `Item A`, id: 0 },
        { cardText: `Item B`, id: 0 },
        { cardText: `Item C`, id: 0 },
        { cardText: `Item D`, id: 0 },
      ],
      id: 0,
    },
    {
      items: [
        { cardText: `Item 1`, id: 1 },
        { cardText: `Item 2`, id: 1 },
        { cardText: `Item 3`, id: 1 },
        { cardText: `Item 4`, id: 1 },
      ],
      id: 1,
    },
  ];

  const [items, setItems] = useState<InitialItemsType>(initialItems);

  return (
    <div className="flex h-full">
      {items.map((list, listIndex) => (
        <DropTarget key={listIndex} listKey={listIndex} ListOfItems={list} />
      ))}
    </div>
  );
};

export default Boards;

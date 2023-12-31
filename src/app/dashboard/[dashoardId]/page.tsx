import BoardHeader from "next/components/Boards/BoardHeader";
import BoardTabContainer from "next/components/Boards/BoardTabContainer";

import React from "react";

const DashBoard = async ({ params }: { params: { dashoardId: string } }) => {
  console.log(params.dashoardId);



  return (
    <section className="h-full w-full   transition-all duration-[1s]">
      <BoardHeader boardId={params.dashoardId} />
      <BoardTabContainer boardId={params.dashoardId} />
    </section>
  );
};

export default DashBoard;

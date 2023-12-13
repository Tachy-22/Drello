import React from "react";

const BoardTabList = ({ children }: { children: React.ReactNode }) => {
  return <div className="gap-3 flex-col flex">{children}</div>;
};

export default BoardTabList;

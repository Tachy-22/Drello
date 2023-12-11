import AsideNav from "next/components/dashboard/AsideNav";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-white h-full  flex">
      <div className="">
        <AsideNav />
      </div>
      <div className="">{children}</div>
    </section>
  );
};

export default DashboardLayout;

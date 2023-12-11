import Boards from "next/components/boardcards/Boards";

const DashBoard = ({ params }: { params: { dashoardId: string } }) => {
  console.log(params.dashoardId);
  return (
    <section className="bg-white h-full -2  transition-all duration-[1s]">
      <Boards />
    </section>
  );
};

export default DashBoard;

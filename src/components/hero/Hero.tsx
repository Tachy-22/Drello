import Image from "next/image";
import EmailSignUp from "./EmailSignUp";

const Hero = () => {
  return (
    <section className="flex overflow-hidden text-white justify-center gap-2 xl:w-[65%] py-[3rem]  z-10 ">
      <div className="flex flex-col w-fit gap-3  ">
        <h1 className=" text-4xl font-semibold   flex flex-col gap-3">
          <span className="">Drello brings all your</span>{" "}
          <span>tasks, teammates, and</span>{" "}
          <span className="">tools together</span>
        </h1>
        <p className="font-semibold py-3">
          Keep everything in the same place—even if your team isn’t.
        </p>
        <EmailSignUp />
      </div>
      <Image
        src={`/images/herosvg1.webp`}
        alt="hero illustration"
        className="lg:w-[540px] lg:h-[468px]  "
        width={540}
        height={468}
      />
    </section>
  );
};

export default Hero;

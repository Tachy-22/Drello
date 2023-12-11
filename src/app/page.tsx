import Hero from "next/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center border-green-400 w-full h-full">
      <>
        <div className=" absolute left-0 bottom-0 z-0 ">
          <Image
            src={`/svgs/blob2.svg`}
            alt="hero illustration"
            className="lg:w-[540px] lg:h-[475px]"
            width={540}
            height={475}
          />
        </div>
        <div className=" absolute top-0 left- z-0 ">
          <Image
            src={`/svgs/blob4.svg`}
            alt="hero illustration"
            className="lg:w-[540px] lg:h-[475px]"
            width={540}
            height={475}
          />
        </div>
        <div className=" absolute right-0 top-0 ">
          <Image
            src={`/svgs/blob1.svg`}
            alt="hero illustration"
            className="lg:w-[540px] lg:h-[475px]"
            width={540}
            height={475}
          />
        </div>
        <div className=" absolute left-[5rem] top-10 ">
          <Image
            src={`/svgs/blob3.svg`}
            alt="hero illustration"
            className="lg:w-[540px] lg:h-[475px]"
            width={540}
            height={475}
          />
        </div>
        <div className=" absolute right-[15rem] bottom-0 ">
          <Image
            src={`/svgs/blob3.svg`}
            alt="hero illustration"
            className="lg:w-[540px] lg:h-[475px]"
            width={540}
            height={475}
          />
        </div>
      </>
      <Hero />
    </div>
  );
}

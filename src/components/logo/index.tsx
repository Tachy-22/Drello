import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={`/logos/drello_logo.webp`}
      alt="hero illustration"
      className="w-[6rem] h-[1.5rem] "
      width={600}
      height={138}
    />
  );
};

export default Logo;

import React from "react";
import { Image, Button } from "@nextui-org/react";

export default function About() {
  return (
    <section
      id="about"
      className="py-[133px] lg:px-[85px] px-[40px] bg-white flex lg:flex-row flex-col items-center  gap-[60px]"
    >
      <div className="lg:w-[50%]">
        <Image
          isBlurred
          src="/About Me.svg"
          alt="NextUI Album Cover"
          isZoomed
          classNames="w-full h-full"
        />
      </div>

      <div className="lg:w-[50%] flex justify-start flex-col items-start">
        <div className="text-center text-gray-800 text-xl font-semibold  leading-loose">
          About
        </div>
        <div className="text-gray-800 text-6xl font-bold mt-[10px] leading-10">
          About Me
        </div>

        <div className="mt-[32px] text-blue-950 text-2xl font-normal leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
          faucibus massa sollicitudin amet augue. Nibh metus a semper purus
          mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
          adipiscing velit non nulla in amet pellentesque.
          <br />
          <br />
          Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
          eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod
          risus r.
        </div>
      </div>
    </section>
  );
}

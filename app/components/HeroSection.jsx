import React from "react";
import { Image, Button } from "@nextui-org/react";

export default function HeroSection() {
  return (
    <section id="home" className="flex  bg-slate-50">
      <div className="lg:px-[85px] px-[40px] py-[200px] w-full flex lg:flex-row flex-col items-center ">
        <div className="lg:w-[50%] flex items-start flex-col ">
          <div className="text-center text-gray-800 text-xl font-semibold leading-loose">
            Hey, I am John
          </div>
          <div className="w-full py-[21px]">
            <span className="text-gray-800 text-7xl font-bold leading-10">
              I create{" "}
            </span>
            <span className="text-indigo-600 text-7xl font-bold leading-10">
              product design{" "}
            </span>
            <div className="mt-[8px]">
              <span className="text-gray-800 text-7xl font-bold  leading-10">
                and brand experience
              </span>
            </div>
          </div>

          <div className="  text-blue-950 text-2xl font-normal leading-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </div>
          <Button className="lg:w-44 w-full mt-[32px] h-16 px-11 py-5 bg-indigo-600 rounded-md justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-base font-normal leading-normal">
              Get In Touch
            </div>
          </Button>
        </div>

        <div className="lg:w-[50%]  mt-[50px] lg:mt-0 ">
          {" "}
          <Image
            isBlurred
            src="/FineBoy.svg"
            alt="NextUI Album Cover"
            isZoomed
            classNames="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

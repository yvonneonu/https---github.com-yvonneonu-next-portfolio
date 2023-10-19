import React from "react";
import { Button, Image } from "@nextui-org/react";
import { ArrowUp } from "iconsax-react";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-[85px] lg:px-[85px] px-[40px] flex flex-col justify-center items-center bg-white  "
    >
      <div className="w-full justify-between items-center flex flex-col lg:flex-row">
        <div className="flex flex-col">
          <div className=" text-gray-800 text-base font-semibold leading-normal">
            Recent Projects
          </div>
          <div className=" text-gray-800 text-5xl font-bold mt-[21px] leading-10">
            My Portfolio
          </div>
        </div>

        <Button className="bg-[#E62872] lg:w-64 w-full h-20 px-5 py-3.5 rounded-xl shadow justify-center items-center gap-4 flex  mt-[30px] lg:mt-0">
          <Image
            isBlurred
            src="./Social icon.svg"
            alt="NextUI Album Cover"
            isZoomed
            classNames="w-full h-full"
          />
          <div className="text-white text-base font-normal leading-normal">
            Visit My Dribbble
          </div>
        </Button>
      </div>

      <div className="gap-[42px] flex lg:flex-row flex-col items-center justify-center">
        {items1.map((item) => (
          <div
            key={item.title}
            className="mt-[106px] border w-96 rounded-lg hover:shadow-xl"
          >
            <div>
              <Image
                isBlurred
                src={item.imageSrc}
                alt="NextUI Album Cover"
                isZoomed
                classNames=" h-96"
              />
            </div>

            <div className="p-[32px]">
              <div className=" text-gray-800 text-2xl font-bold leading-loose">
                {item.title}
              </div>
              <div className=" text-blue-950 text-base font-normal leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </div>

              <div className="mt-[32px]  ">
                <div className="flex flex-row items-center gap-[16px]">
                  <div className="text-black text-sm font-semibold leading-tight">
                    View In Dribbble
                  </div>

                  <ArrowUp size="20" />
                </div>
                <div className="w-[150px] border-b mt-[10px] border-indigo-600"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
const items1 = [
  {
    imageSrc: "./Image1.svg",
    title: " Ahuse",
  },
  {
    imageSrc: "./Image.svg",
    title: "App Dashboardo",
  },
  {
    imageSrc: "./Image3.svg",
    title: "Easy Rent",
  },
];

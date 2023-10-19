import React from "react";
import { Image, Button } from "@nextui-org/react";

export default function SkillsSection() {
  function renderItems() {
    return items.map((item, index) => (
      <div
        key={index}
        className="p-[32px] hover:border-b-4 rounded-xl hover:border-[#5E3BEE] bg-[#F5FCFF] cursor-pointer"
      >
        <Image
          isBlurred
          src={item.imageSrc}
          alt={item.altText}
          isZoomed
          classNames="w-full h-full"
        />
        <div className="mt-[32px] text-gray-800 text-3xl font-bold leading-10">
          {item.title}
        </div>
        <div className="mt-[21px] text-blue-950 text-xl font-normal leading-loose">
          {item.description}
        </div>
      </div>
    ));
  }
  return (
    <section className="py-[149px] lg:px-[85px] px-[40px] bg-white  flex w-full items-start flex-col">
      <div className="text-center text-gray-800 text-xl font-semibold leading-loose">
        My Skills
      </div>
      <div className="mt-[21px] text-gray-800 text-6xl font-bold leading-10">
        My Expertise
      </div>
      <div className="mt-[106px] gap-[42px] flex flex-col lg:flex-row">
        {renderItems()}
      </div>
    </section>
  );
}
const items = [
  {
    imageSrc: "/Strategy & Direction.svg",
    altText: "NextUI Album Cover",
    title: "Strategy & Direction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    imageSrc: "/Branding & Logo.svg",
    altText: "Branding & Logo",
    title: "Branding & Logo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    imageSrc: "/UI & UX Design.svg",
    altText: "NextUI Album Cover",
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    imageSrc: "/Webflow Development.svg",
    altText: "NextUI Album Cover",
    title: "Webflow Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  // Add more items as needed
];

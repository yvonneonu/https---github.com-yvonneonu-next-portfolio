import React from "react";
import { Image } from "@nextui-org/react";
import { Star1 } from "iconsax-react";

export default function Feedback() {
  return (
    <section
      id="testimonials"
      className="py-[85px] lg:px-[85px] px-[40px] bg-slate-50 flex flex-col justify-center"
    >
      <div className="w-96 text-gray-800 text-base font-semibold  leading-normal">
        Clients Feedback
      </div>

      <div className="mt-[21px] text-gray-800 text-5xl font-bold leading-10">
        Customer testimonials
      </div>

      <div className="mt-[106px]">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-[43px]">
          {items2.map((item) => (
            <div
              key={item.id}
              className="lg:w-96 h-96 p-11 rounded-lg border border-teal-700 flex-col justify-start items-start gap-11 flex"
            >
              <div className="flex flex-row">
                <Star1 size="20" color="#006B6A" variant="Bold" />
                <Star1 size="20" color="#006B6A" variant="Bold" />
                <Star1 size="20" color="#006B6A" variant="Bold" />
                <Star1 size="20" color="#006B6A" variant="Bold" />
                <Star1 size="20" color="#006B6A" variant="Bold" />
              </div>
              <div className="self-stretch text-blue-950 text-base font-normal  leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.
              </div>

              <div className="justify-start items-center gap-5 inline-flex">
                <Image
                  isBlurred
                  src={item.imageSrc}
                  alt="NextUI Album Cover"
                  isZoomed
                  classNames="w-full h-full"
                />
                <div className="flex-col justify-start items-start flex">
                  <div className="text-gray-800 text-base font-semibold  leading-normal">
                    {item.title}
                  </div>
                  <div className="text-blue-950 text-base font-normal leading-normal">
                    {item.subTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const items2 = [
  {
    id: 1,
    title: "Dianne Russell",
    imageSrc: "./AvatarImage.svg",
    subTitle: "Starbucks",
  },
  {
    id: 2,
    title: "Kristin Watson",
    imageSrc: "./Avatar Image (1).svg",
    subTitle: "Louis Vuitton",
  },
  {
    id: 3,
    title: "Kathryn Murphy",
    imageSrc: "./Avatar Image (2).svg",
    subTitle: "McDonald's",
  },
];

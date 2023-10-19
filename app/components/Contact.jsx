import { Button } from "@nextui-org/react";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-[149px] lg:px-[85px] px-[40px] bg-white  flex w-full items-center justify-center flex-col"
    >
      <div className="">
        {" "}
        <div className="text-center text-gray-800 text-base font-semibold leading-normal">
          Get In Touch
        </div>
        <div className="mt-[21px] text-center text-gray-800 text-5xl font-bold leading-10">
          Contact me
        </div>
        <div className="mt-[32px] text-center text-blue-950 text-lg font-normal  leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </div>
        <div className="mt-[62px] flex flex-col gap-[32px] ">
          <div className="flex justify-between gap-[32px]">
            <div className="">
              <label
                htmlFor="firstName"
                className=" text-gray-800 text-base font-normal leading-normal"
              >
                First name{" "}
              </label>
              <input
                type="text"
                required
                id="firstName"
                name="firstName"
                className="w-full h-12 px-4 mt-[10px] border border-cila-slate-200 text-cila-slate-700  focus:invalid:border-cila-red-300 invalid:text-cila-red-300 font-lotar focus:outline-none focus:ring-2 focus:ring-cila-slate-700 focus:border-transparent placeholder:font-lota autofill:bg-cila-slate-50 "
                placeholder="John"
              />
            </div>

            <div className="">
              <label htmlFor="lastName" className="mb-1 text-sm">
                Last Name
              </label>
              <input
                type="text"
                required
                id="lastName"
                name="lastName"
                // onChange={handleChange}
                className="w-full h-12 px-4 mt-[10px] border border-cila-slate-200 text-cila-slate-700  focus:invalid:border-cila-red-300 invalid:text-cila-red-300 font-lotar focus:outline-none focus:ring-2 focus:ring-cila-slate-700 focus:border-transparent placeholder:font-lota autofill:bg-cila-slate-50 "
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="flex justify-between gap-[32px]">
            <div className="">
              <label
                htmlFor="email"
                className=" text-gray-800 text-base font-normal leading-normal"
              >
                Email
              </label>
              <input
                type="text"
                required
                id="email"
                name="email"
                className="w-full h-12 px-4 mt-[10px] border border-cila-slate-200 text-cila-slate-700  focus:invalid:border-cila-red-300 invalid:text-cila-red-300 font-lotar focus:outline-none focus:ring-2 focus:ring-cila-slate-700 focus:border-transparent placeholder:font-lota autofill:bg-cila-slate-50 "
                placeholder="John"
              />
            </div>

            <div className="">
              <label htmlFor="phoneNumber" className="mb-1 text-sm">
                Phone Number
              </label>
              <input
                type="text"
                required
                id="phoneNumber"
                name="phoneNumber"
                // onChange={handleChange}
                className="w-full h-12 px-4 mt-[10px] border border-cila-slate-200 text-cila-slate-700  focus:invalid:border-cila-red-300 invalid:text-cila-red-300 font-lotar focus:outline-none focus:ring-2 focus:ring-cila-slate-700 focus:border-transparent placeholder:font-lota autofill:bg-cila-slate-50 "
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="flex justify-between gap-[32px]">
            <div className="w-full">
              <label
                htmlFor="chooseaTopic"
                className=" text-gray-800 text-base font-normal leading-normal"
              >
                Choose a topic
              </label>
              <input
                type="text"
                required
                id="chooseaTopic"
                name="chooseaTopic"
                className="w-full h-12 px-4 mt-[10px] border border-cila-slate-200 text-cila-slate-700  focus:invalid:border-cila-red-300 invalid:text-cila-red-300 font-lotar focus:outline-none focus:ring-2 focus:ring-cila-slate-700 focus:border-transparent placeholder:font-lota autofill:bg-cila-slate-50 "
                placeholder="Select one..."
              />
            </div>
          </div>

          <div className="flex  gap-[32px]">
            <div className="w-full">
              <label
                htmlFor="message"
                className=" text-gray-800 text-base font-normal leading-normal"
              >
                Message
              </label>
              <textarea
                type="text"
                required
                id="message"
                name="message"
                className="w-full px-4 py-2 mt-[10px] border border-cila-slate-200 text-cila-slate-700  focus:invalid:border-cila-red-300 invalid:text-cila-red-300 font-lotar focus:outline-none focus:ring-2 focus:ring-cila-slate-700 items-end justify-start focus:border-transparent placeholder:font-lota autofill:bg-cila-slate-50 "
                placeholder="Tape your message"
              />
            </div>
          </div>

          <div className="flex flex-row gap-[10px]">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />

            <div className="text-gray-800 text-sm font-normal leading-tight">
              I accept the terms
            </div>
          </div>

          <div className="w-full justify-center flex">
            <Button className="bg-[#5E3BEE] lg:w-44 w-full h-16 px-11 py-5 rounded-lg shadow justify-center items-center flex">
              <div className="text-white text-base font-normal  leading-normal">
                Submit
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

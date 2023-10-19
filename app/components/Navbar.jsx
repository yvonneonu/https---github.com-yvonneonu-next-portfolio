"use client";
import React from "react";
import { Button, Image } from "@nextui-org/react";
import { CloseCircle, HambergerMenu } from "iconsax-react";
import Link from "next/link";

export default function Navbar() {
  const [show, setShow] = React.useState(false);
  return (
    <section className="h-28 lg:px-20 px-[40px]  shadow z-30 fixed w-full flex flex-col justify-center items-center bg-white  ">
      <div className="flex flex-row items-center justify-between  w-full">
        <Link href="/">
          <Image
            isBlurred
            src="./Logo.svg"
            alt="NextUI Album Cover"
            isZoomed
            classNames="w-full h-full"
          />
        </Link>

        <div className="lg:flex flex-row gap-[42px] hidden ">
          <Link href="/#home">
            <div className="hover:text-indigo-600 cursor-pointer text-blue-950 text-base font-normal  leading-normal">
              Home
            </div>{" "}
          </Link>
          <Link href="/#portfolio">
            <div className="text-blue-950 hover:text-indigo-600 cursor-pointer text-base font-normal  leading-normal">
              Portfolio
            </div>
          </Link>

          <Link href="/#about">
            <div className="text-blue-950 hover:text-indigo-600 cursor-pointer text-base font-normal  leading-normal">
              About me
            </div>
          </Link>
          <Link href="/#testimonials">
            <div className="text-blue-950 hover:text-indigo-600 cursor-pointer text-base font-normal  leading-normal">
              Testimonials
            </div>
          </Link>
        </div>
        <Link href="/#contact">
          <Button className="w-44 h-16 px-11 py-5 rounded-md border bg-white border-indigo-600 justify-center items-center hidden lg:flex">
            <div className="text-indigo-600 text-base font-normal leading-normal">
              Contact Me
            </div>
          </Button>
        </Link>

        <div className="lg:hidden flex" onClick={() => setShow(!show)}>
          {show ? <CloseCircle size="30" /> : <HambergerMenu size="30" />}
        </div>
      </div>

      <div
        className={`nav-web ${
          !show ? "hidden" : "flex"
        } flex-col gap-y-12 text-white fixed w-screen h-[100vh] top-[110px] left-0  bg-cila-blue-500 lg:hidden`}
      >
        <div className="bg-[#1F487A] p-[20px] h-screen">
          <Link href="/#home">
            <div className="hover:text-indigo-600 cursor-pointer  text-base font-normal  leading-normal">
              Home
            </div>{" "}
          </Link>
          <Link href="/#portfolio">
            <div className=" hover:text-indigo-600 mt-[20px] cursor-pointer text-base font-normal  leading-normal">
              Portfolio
            </div>
          </Link>
          <Link href="/#about">
            <div className=" hover:text-indigo-600 mt-[20px] cursor-pointer text-base font-normal  leading-normal">
              About me
            </div>
          </Link>
          <Link href="/#testimonials">
            <div className=" hover:text-indigo-600 mt-[20px] cursor-pointer text-base font-normal  leading-normal">
              Testimonials
            </div>
          </Link>
          <Link href="/#contact">
            <Button className="w-44 h-16 mt-[30px] px-11 py-5 rounded-md border bg-white border-indigo-600 justify-center items-center  ">
              <div className=" text-base font-normal leading-normal">
                Contact Me
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

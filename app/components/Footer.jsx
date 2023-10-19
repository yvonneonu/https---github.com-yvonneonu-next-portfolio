"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="py-[85px] lg:px-[85px] px-[40px] bg-slate-50 flex flex-col justify-center">
      <div className="flex lg:flex-row flex-col justify-between items-center ">
        <Link href="/">
          <Image
            isBlurred
            src="./Logo.svg"
            alt="NextUI Album Cover"
            isZoomed
            classNames="w-full h-full"
          />
        </Link>

        <div className="flex lg:flex-row flex-col gap-[43px] mt-[30px] lg:mt-0">
          <Link href="/#home">
            <div className="text-black hover:text-indigo-600 cursor-pointer text-base font-normal  leading-normal">
              Home
            </div>
          </Link>
          <Link href="/#portfolio">
            <div className="text-black hover:text-indigo-600 cursor-pointer text-base font-normal  leading-normal">
              Portfolio
            </div>
          </Link>
          <Link href="/#about">
            <div className="text-black hover:text-indigo-600 cursor-pointer text-base font-normal leading-normal">
              About me{" "}
            </div>
          </Link>
          <Link href="/#contact">
            <div className="text-black hover:text-indigo-600 cursor-pointer text-base font-normal  leading-normal">
              Contact
            </div>
          </Link>
          <Link href="/#testimonials">
            <div className="text-black hover:text-indigo-600 cursor-pointer text-base font-normal  leading-normal">
              Testimonials
            </div>
          </Link>
        </div>

        <div className="flex flex-row gap-[16px] items-center mt-[30px] lg:mt-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              isBlurred
              src="./Facebook.svg"
              alt="Facebook"
              isZoomed
              classNames="w-full h-full"
            />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              isBlurred
              src="./Instagram.svg"
              alt="Instagram"
              isZoomed
              classNames="w-full h-full"
            />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              isBlurred
              src="./Twitter.svg"
              alt="Twitter"
              isZoomed
              classNames="w-full h-full"
            />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              isBlurred
              src="./LinkedIn.svg"
              alt="LinkedIn"
              isZoomed
              classNames="w-full h-full"
            />
          </a>
        </div>
      </div>

      <div className="mt-[100px] h-px bg-gray-800 bg-opacity-60" />
      <div className="mt-[42px] flex lg:flex-row flex-col justify-between items-center">
        <div>
          <span className="text-black text-lg font-normal  leading-7">
            Made with 💖 by{" "}
          </span>
          <span className="text-black text-lg font-normal  leading-7">
            Airdokan
          </span>
        </div>

        <div className="gap-[32px] flex flex-row mt-[30px] lg:mt-0">
          <div className="text-black text-sm font-normal  leading-tight">
            Privacy Policy
          </div>
          <div className="text-black text-sm font-normal  leading-tight">
            Terms of Service
          </div>
          <div className="text-black text-sm font-normal  leading-tight">
            Cookies Settings
          </div>
        </div>
      </div>
    </section>
  );
}

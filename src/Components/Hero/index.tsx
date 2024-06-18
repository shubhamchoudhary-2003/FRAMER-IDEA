"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal"; // Adjust the path if necessary
import Link from "next/link";

import { MarqueeDemo } from "../artistList";
import { cn } from "@/lib/utils";
import Marquee from "@/Components/magicui/marquee";

const flags = [
  { flag: "./f1.png" },
  { flag: "./f2.png" },
  { flag: "./f3.png" },
  { flag: "./f4.png" },
  { flag: "./f5.png" },
  { flag: "./f6.png" },
  { flag: "./f7.png" },
  { flag: "./f8.png" },
  { flag: "./f9.png" },
  { flag: "./f10.png" },
  { flag: "./f11.png" },
  { flag: "./f12.png" },
];

const firstRow = flags.slice(0, flags.length / 2);
const secondRow = flags.slice(flags.length / 2);

const FlagCard = ({ flag }: { flag: string }) => {
  return (
    <figure
      className={cn(
        "relative w-32 h-32 cursor-pointer overflow-hidden rounded-lg  p-2"
        // Adjust styles as per your design system for light and dark modes
        // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <img className="object-cover w-full h-full" src={flag} alt="Flag" />
    </figure>
  );
};
const Hero = () => {
  const controls = useAnimation();
  const flagControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const flagVariants = {
    hidden: { scale: 1 },
    visible: { scale: 2, transition: { duration: 2 } },
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      flagControls.start("visible");
    } else {
      flagControls.start("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-blue-700 relative h-[75vh] w-[95%] md:w-[90%] border-b border-ui-border-base mx-auto rounded-2xl overflow-hidden">
      <motion.div
        ref={ref}
        className="absolute inset-0 z-0 flex justify-center items-center"
        variants={flagVariants}
        initial="hidden"
        animate={flagControls}
      >
        <motion.img
          src="./1.svg"
          alt="Flag 1"
          className="absolute w-20 h-20 top-0 left-0"
        />
        <motion.img
          src="./2.svg"
          alt="Flag 1"
          className="absolute w-20 h-20 top-0 left-0"
        />
        <motion.img
          src="./3.svg"
          alt="Flag 1"
          className="absolute w-20 h-20 top-0 left-0"
        />
      </motion.div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-8 gap-6">
        <div className="text-5xl lg:text-8xl font-bold text-white">
          <Reveal>
            <h1>Build fast</h1>
          </Reveal>
          <Reveal>
            <h1>Earn More.</h1>
          </Reveal>
        </div>
        <motion.p
          className="text-xl text-gray-300"
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Use customer data to build great and solid product experiences that
          convert.
        </motion.p>
        <div className="">
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative rounded-full overflow-hidden bg-white shadow-xl w-auto">
              <input
                type="text"
                name="text"
                placeholder="Search here"
                className="input bg-transparent outline-none border-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
              />
              <div className="absolute right-2 top-[0.4em]">
                <button className="w-14 h-14 rounded-full bg-violet-500 group shadow-xl flex items-center justify-center relative overflow-hidden">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10"
                  >
                    <path
                      d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
                      fill="white"
                      fill-opacity="0.01"
                    ></path>
                    <path
                      d="M42.8496 18.7067L21.0628 44.6712"
                      stroke="white"
                      stroke-width="3.76603"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
                      stroke="white"
                      stroke-width="3.76603"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
                  <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"></div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.p
          className="text-xl text-gray-300"
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className=" flex  flex-col">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((flag, index) => (
                <FlagCard key={index} flag={flag.flag} />
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-background"></div>
          </div>{" "}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;

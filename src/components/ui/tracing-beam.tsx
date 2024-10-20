"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { Paragraph } from "../Paragraph";
import { Heading } from "../Heading";
import { Highlight } from "../Highlight";

export const TracingBeam = ({
  heading,
  children,
}: {
  heading: React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"],
  });
  const scrollYProgressVelocity = useVelocity(scrollYProgress);
  const [velo, setVelocity] = React.useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Create a state for the SVG height
  const [svgHeight, setSvgHeight] = useState(0);

  // Measure the content container's height when the component mounts
  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);
  useEffect(() => {
    return scrollYProgressVelocity.on("change", (latestVelocity) => {
      setVelocity(latestVelocity);
    });
  }, []); // eslint-disable-line

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - velo * 500]),
    {
      stiffness: 500,
      damping: 90,
      //   duration: 3,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - velo * 2000]),
    {
      stiffness: 500,
      damping: 90,
      //   duration: 3,
    }
  );

  return (
    <div
      ref={containerRef}
      className="h-[40rem] bg-white overflow-auto w-full pt-20"
    >
      {heading}
      <motion.div className="relative w-full max-w-4xl mx-auto h-full mt-10">
        <div className="absolute -left-2 top-3">
          <motion.div className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center">
            <motion.div
              transition={{
                duration: 0.2,
                delay: 0.5,
              }}
              animate={{
                backgroundColor:
                  scrollYProgress.get() > 0 ? "white" : "var(--emerald-500)",
                borderColor:
                  scrollYProgress.get() > 0 ? "white" : "var(--emerald-600)",
              }}
              className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
            />
          </motion.div>
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight} // Set the SVG height
            className=" ml-4 hidden lg:block"
            aria-hidden="true"
          >
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${
                svgHeight * 0.8
              } l -18 24V ${svgHeight}`}
              fill="none"
              stroke="#9091A0"
              strokeOpacity="0.16"
              transition={{
                duration: 10,
              }}
            ></motion.path>
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${
                svgHeight * 0.8
              } l -18 24V ${svgHeight}`}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="1.25"
              className="motion-reduce:hidden"
              transition={{
                duration: 10,
              }}
            ></motion.path>
            <defs>
              <motion.linearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1}
                y2={y2}
                transition={{
                  duration: 10,
                }}
              >
                <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                <stop stopColor="#18CCFC"></stop>
                <stop offset="0.325" stopColor="#6344F5"></stop>
                <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
        <div ref={contentRef}>{children}</div>
      </motion.div>
    </div>
  );
};

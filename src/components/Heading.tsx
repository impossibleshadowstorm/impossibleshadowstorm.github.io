import React from "react";

import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

// Font files can be co-located inside of `app`
const CalSans = localFont({
  src: [{ path: "../../fonts/CalSans-SemiBold.woff2" }],
  display: "swap",
});

export const Heading = ({
  className,
  children,
  as: Tag = "h1",
}: {
  className?: string;
  children: any;
  as?: keyof JSX.IntrinsicElements;
}) => {
  return (
    <Tag
      className={twMerge(
        CalSans.className,
        "text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-black",
        className
      )}
    >
      {children}
    </Tag>
  );
};

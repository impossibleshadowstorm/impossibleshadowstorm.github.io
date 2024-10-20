"use client";

import { Heading } from "@/components/Heading";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Cover } from "@/components/ui/cover";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const heading = (
  <>
    <div className="text-4xl flex">
      <div className="mr-5">📚</div>
      <Heading className="text-black">Knowledge Journey</Heading>
    </div>
    <div className="max-w-2xl mt-4 text-justify">
      My educational journey has been a transformative experience that{" "}
      <Cover>shaped my skills</Cover> and aspirations. With a Master of Computer
      Applications (MCA) from Chandigarh University, I delved deep into{" "}
      <Cover>software development</Cover> and <Cover>data management</Cover>.
      Prior to that, I earned my Bachelor of Computer Applications (BCA) from
      Dev Sanskriti Vishwavidyalaya, where I built a solid foundation in
      computer science. My early education in Physics, Chemistry, and
      Mathematics nurtured my analytical thinking and problem-solving abilities.
      Each step of my academic path has <Cover>fueled my passion</Cover> for
      technology, encouraging me to pursue innovative solutions that can make a
      meaningful impact. I am dedicated to <Cover>continuous learning</Cover>,
      always seeking to expand my knowledge and skills in this ever-evolving
      field.
    </div>
  </>
);

export default function Education() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="max-w-4xl w-full mx-auto px-4 md:px-10">
        <TracingBeam heading={heading}>
          <div className="max-w-2xl mx-auto antialiased pt-4 relative mb-40">
            {educationHistory.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center justify-start">
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt={item.course}
                      height="100"
                      width="100"
                      style={{
                        height: "100px",
                        width: "100px",
                      }}
                      className="rounded-lg mr-10 object-contain"
                    />
                  )}
                  <div>
                    <p className={twMerge("text-lg mb-1 font-medium")}>
                      {item?.course}
                    </p>
                    <p className={twMerge("text-md mb-1")}>{item?.college}</p>
                    <p className={twMerge("text-sm")}>{item.location}</p>
                  </div>
                </div>

                <div className="text-sm prose prose-sm dark:prose-invert mt-5 text-justify">
                  {item?.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

const educationHistory = [
  {
    college: "Chandigarh University (CU)",
    course: "Master of Computer Applications (MCA)",
    description:
      "Developed a strong foundation in software development, data structures, and algorithms. Engaged in hands-on projects to enhance programming skills and understanding of application development.",
    location: "Chandigarh",
    badge: "October 2022 - May 2024",
    image: "/images/logos/education/cu.png",
  },
  {
    college: "Dev Sanskriti Vishwavidyalaya (DSVV)",
    course: "Bachelor of Computer Applications (BCA)",
    description:
      "Gained comprehensive knowledge of computer science fundamentals, including programming languages and database management. Participated in various projects that honed my analytical and problem-solving skills.",
    location: "Haridwar",
    badge: "October 2019 - May 2022",
    image: "/images/logos/education/dsvv-full-light.png",
  },
  {
    college: "Angels' Academy Sr. Sec. School",
    course: "Senior Secondary Education",
    description:
      "Focused on Physics, Chemistry, and Mathematics, laying a solid foundation for analytical thinking and scientific reasoning. Developed a passion for technology and its applications in everyday life.",
    location: "Haridwar",
    badge: "May 2018 - June 2019",
    image: "/images/logos/education/aasss.png",
  },
];

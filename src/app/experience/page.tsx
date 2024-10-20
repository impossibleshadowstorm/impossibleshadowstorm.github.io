"use client";

import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const heading = (
  <>
    <div className="text-4xl flex">
      <div className="mr-5">💼</div>
      <Heading className="text-black">Work History</Heading>
    </div>
    <Paragraph className="max-w-xl mt-4">
      I&apos;m a full-stack developer that loves{" "}
      <Highlight>building products</Highlight> and web apps that can impact
      millions of lives..
    </Paragraph>
  </>
);

export default function Experience() {
  return (
    <div className="max-w-4xl w-full mx-auto px-4 md:px-10">
      <TracingBeam heading={heading}>
        <div className="max-w-2xl mx-auto antialiased pt-4 relative mb-40">
          {experienceHistory.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-start">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt={item.organization}
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
                  {/* <p
                  className={twMerge("text-xl mb-4")}
                >{`${item?.designation} - ${item?.organization}`}</p> */}
                  <p className={twMerge("text-lg mb-1 font-medium")}>
                    {item?.organization}
                  </p>
                  <p className={twMerge("text-md mb-1")}>{item?.designation}</p>
                  <p className={twMerge("text-sm")}>{item.location}</p>
                </div>
              </div>

              <div className="text-sm prose prose-sm dark:prose-invert mt-5">
                {/* {item?.image && (
                <Image
                  src={item.image}
                  alt={item.organization}
                  height="100"
                  width="100"
                  className="rounded-lg mb-10 object-cover"
                />
              )} */}
                {item.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const experienceHistory = [
  {
    designation: "System Engineer",
    organization: "Tata Consultancy Services Limited (TCS)",
    description: [
      "Completed a 45-day training program, gaining hands-on experience in Java and PL/SQL and knowledge in Spring Boot for backend development.",
    ],
    location: "Bangalore",
    badge: "27 June 2024 - Present",
    image: "/images/logos/employment/tcs.png",
  },
  {
    designation: "Full Stack Consultant",
    organization: "Cognify Digital Private Limited",
    description: [
      "Enhanced an Audit System using React.js, Redux, Django, and Docker adding RESTful web services for document management and budget tracking.",
      "Built a private NPM package with React for code reusability and easy integration across projects.",
      "Implemented an ETL system using Python and PostgreSQL for data extraction and transformation, visualizing results with Grafana.",
    ],
    location: "Remote",
    badge: "07 October 2022 - 27 March 2024",
    image: "/images/logos/employment/cognify-light.png",
  },
  {
    designation: "Full Stack Intern",
    organization: "AG Technologies",
    description: [
      "Automated financial reports using Automation Anywhere, improving data processing efficiency.",
      "Developed a web scraper with Python Playwright for organized data extraction.",
      "Built an HR Management System for resume parsing and dashboard visualization with React.js and Django.",
    ],
    location: "Rajasthan",
    badge: "07 June 2022 - 06 October 2022",
    image: "/images/logos/employment/agt.png",
  },
];

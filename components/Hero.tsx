import React, { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import Me from "../public/profil.jpg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ReactIcon } from "./icons/ReactIcon";
import Link from "next/link";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { NextjsIcon } from "./icons/NexjsIcon";
import { FlagCmrIcon } from "./icons/FlagCmrIcon";
import { Code } from "./Code";
import { ChevronRight } from "lucide-react";
import BlurFade from "./magicui/blur-fade";
import BlurIn from "./magicui/blur-in";
import SparklesText from "./magicui/sparkles-text";
const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl max-md:text-4xl ">
          Hey! I&apos;m <span className="text-primary">Daryl Ngako 👋,</span>
        </h2>
     
        <h3 className=" m-0 text-3xl max-md:text-2xl font-caption">
         
          {/* <ChevronRight className=" text-4xl" /> */}
          &gt; <span className="text-primary font-semibold">Software</span> engineer, web
          developer,and <SparklesText colors={{first: '#FFFF', second: '#1d4ed8'}} as={<span />}  text="Typescript" className="text-blue-700 text-3xl max-md:text-2xl font-semibold" /> 
          {" "}enthusiast.
        </h3>
        <p className="text-base">
          I love working with{" "}
          <Link href="https://fr.react.dev/">
            <Code className="inline-flex items-center gap-1">
              <ReactIcon size={16} className="inline" />
              React
            </Code>{" "}
            ,
          </Link>
          <Link href="#">
            <Code className="inline-flex items-center gap-1">
              <TypescriptIcon size={16} className="inline" />
              Typescript
            </Code>
          </Link>{" "}
          , and
          <Link href="https://nextjs.org/">
            <Code className="inline-flex items-center gap-1">
              <NextjsIcon size={16} className="inline" />
              Next js
            </Code>
          </Link>{" "}
          to create web applications. Living in{" "}
          <Code className="inline-flex items-center gap-1">
            <FlagCmrIcon size={16} className="inline" />
            Cameroon.
          </Code>
        </p>
      </div>
      <div className="flex-2  max-md:m-auto ml-auto  max-md:w-56 ">
        {/* <div className='flex-1 max-md:m-auto ml-auto  max-md:w-56 '> */}
        <BlurFade delay={0.25}>
          <Image
            src={Me}
            className="w-full max-w-xs max-md:w-56 rounded-full h-auto object-cover aspect-square"
            alt="daryl's picutre"
          />
        </BlurFade>

        {/* <Image
    
        src={Me}
        className='size-60  object-cover  rounded-full'
        alt="daryl's picutre"
        />
   
      */}
      </div>
    </Section>
  );
};

export default Hero;

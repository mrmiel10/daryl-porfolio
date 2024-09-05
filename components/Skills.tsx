import React from 'react'
import { Section } from './Section'
import { Badge } from './ui/badge'
import { ReactIcon } from './icons/ReactIcon'
import { TailwindLogo } from './icons/TailwindLogo'
import { NextjsIcon } from './icons/NexjsIcon'
import { Code } from './Code'
export const Skills = () => {
  return (
    <Section className='flex flex-col items-start gap-4'>
        <Badge variant={"outline"}>Skills</Badge>
        <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
   I love working on...
    </h2>
    <div className='flex max-md:flex-col gap-4'>
    <div className='flex flex-col gap-2 flex-1'>
    
         <ReactIcon size={42} 
         className='animate-spin' 
         style={{
          animationDuration:"10s"
         }}
         />
      
        <h3 className='text-primary mb-2 text-2xl font-semibold tracking-tight'>
          React
        </h3>
        <p className='text-sm text-muted-foreground'>
        <Code  className="text-white inline-flex items-center gap-1">
          {/* <ReactIcon fill='currentColor' size={16} /> */}
          React Js</Code>
         {" "}React js is a javaScript library for building user interfaces. I build scalable and high-performance web applications that enhance user experience.

        </p>

    </div>
    <div className='flex flex-col gap-2 flex-1'>
    
         <TailwindLogo size={42} className='' 
       
         />
      
        <h3 className='text-primary mb-2 text-2xl font-semibold tracking-tight'>
      Tailwindcss
        </h3>
        <p className='text-sm text-muted-foreground'>

         I use <Code  className="text-white inline-flex items-center gap-1">
          {/* <TailwindLogo fill='currentColor' size={16} /> */}
          TailwindCSS</Code> to create rapid and customizable user interfaces. This enabled me to accelerate my development process and build modern, responsive web applications.
        </p>

    </div>
    <div className='flex flex-col gap-2 flex-1'>
    
         <NextjsIcon size={42} className='' 
     
         />
      
        <h3 className='text-primary mb-2 text-2xl font-semibold tracking-tight'>
          Next js
        </h3>
        <p className='text-sm text-muted-foreground'>

       I create modern, high-performance web applications by leveraging the full-stack capabilities of <Code  className="text-white inline-flex items-center gap-1">Next.js</Code>. This framework allows me to work seamlessly across both the front-end and back-end.
        </p>

    </div>
    </div>
  
    </Section>
  )
}

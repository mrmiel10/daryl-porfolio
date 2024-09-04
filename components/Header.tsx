"use client"
import React from 'react'
import { Section } from './Section'
import { Button, buttonVariants } from './ui/button'
import { GithubIcon } from './icons/GithubIcon'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { MailIcon } from './icons/MailIcon'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])
  return (
    <header className={clsx('z-50 sticky top-0 py-4',
    {  'backdrop-blur-md bg-background/70' : scrolled}
    )}>
        <Section className='flex items-center'>
          <div className='flex items-center justify-center'>
          <img className='size-10 rounded-full' src='https://lh3.googleusercontent.com/a/ACg8ocKbE91fsaOckDBYV6_lYRgmNbwHEs011Zkp6kbs73ilAHS17PE=s258-c-no' />
          </div>
     
            {/* <h1 className='text-xl font-bold text-primary'>
                
                Daryl Boris
                </h1> */}
                <div className='flex-1' />
                <ul className='flex items-center gap-2'>
                    <Link href={"https://github.com/mrmiel10"} className={cn(buttonVariants({variant:"outline"}),'size-6 p-0')} >
                        <GithubIcon size={12} className='text-foreground' />
                       
                    </Link>
                    <Link href={"#"} className={cn(buttonVariants({variant:"outline"}),'size-6 p-0')} >
                    <MailIcon size={12} className='text-foreground' />
                       
                    </Link>
                </ul>
 
        </Section>


    </header>
  )
}

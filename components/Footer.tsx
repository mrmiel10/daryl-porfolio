import React from 'react'
import { Section } from './Section'
import { GithubIcon } from './icons/GithubIcon'
import { MailIcon } from './icons/MailIcon'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
export const Footer = () => {
  return (
    <footer className='bg-card-foreground'>
      <Section className='py-8'>
        <div className='flex items-center'>
        <p className=' text-sm text-primary font-semibold'>&copy;Copywrite 2024 Daryl Ngako</p>
        <ul className='flex items-center gap-2 ml-auto'>
                    <Link href={"https://github.com/mrmiel10"} className={cn(buttonVariants({variant:"outline"}),'size-6 p-0')} >
                        <GithubIcon size={12} className='text-foreground' />
                       
                    </Link>
                    <Link href={"#"} className={cn(buttonVariants({variant:"outline"}),'size-6 p-0')} >
                    <MailIcon size={12} className='text-primary' />
                       
                    </Link>
                </ul>
 
        </div>
     

      </Section>
    </footer>
  )
}

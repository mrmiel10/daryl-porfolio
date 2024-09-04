import React from "react";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { MailIcon } from "./icons/MailIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Button } from "./ui/button";
export const Footer = () => {
  return (
    <footer className="bg-card-foreground">
      <Section className="py-8">
        <div className="flex items-center">
          <p className=" text-sm text-primary font-semibold">
            &copy; 2024  <span className="font-bold">Daryl Ngako</span>.All rights reserved
          </p>
          <ul className="flex items-center gap-2 ml-auto">
            <Link className="" href={"https://github.com/mrmiel10"}>
              <GithubIcon size={20} className="text-primary" />
            </Link>
            <Link className="" href="mailto:mbakopngako@gmail.com">
              <MailIcon size={20} className="text-primary" />
            </Link>
          </ul>
        </div>
      </Section>
    </footer>
  );
};

import React from "react";
import { Section } from "./Section";
import { Card } from "./ui/card";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
import { Work, WorkProps } from "./Works";
import { SideProjectProps } from "./SideProject";
import { SideProject } from "./SideProject";
import { ContactCard } from "./ContactCard";
export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="flex-[3] w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((side, index) => (
              <SideProject key={index} {...side} />
            ))}
          </div>
        </Card>
      </div>

      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Works</p>
          <div className="flex flex-col gap-4">
            {Works.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            url="mailto:mbakopngako@gmail.com"
            description="Email me for any inquiries."
            name="mbakopngako@gmail.com"
            image="https://lh3.googleusercontent.com/a/ACg8ocKbE91fsaOckDBYV6_lYRgmNbwHEs011Zkp6kbs73ilAHS17PE=s258-c-no"
            mediumImage="data:image/png;base64,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"
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    logo: LayoutDashboard,
    title: "Dashboard",
    description: "a  platefrom for buy computer equipments and others",
    url: "https://mydashboard-daryl.vercel.app",
  },
];


const Works: WorkProps[] = [
  {
    image:
      "https://lzdzy7eapvafpa4c.public.blob.vercel-storage.com/v-store-ChvMHyMSGIGbUrKCywTEtAQQg847cd",
    title: "vantech-solutions",
    role: "software developer",
    date: "2023-2024",
    url: "https://v-storehardware.vercel.app/",
    freelance:true
  },
];

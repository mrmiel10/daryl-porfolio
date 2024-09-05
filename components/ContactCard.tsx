import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { ArrowUpRight } from "lucide-react";
export type ContactCard = {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url: string;
    className?:string
  }
  
 export const ContactCard = (props:ContactCard) => {
    return (
      <Link href={props.url} className={cn(
        "w-full",props.className
      )}>
        <Card className="p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 group transition-colors">
          <div className="relative size-10">
            <img
              src={props.image}
              alt={props.name}
              className="size-10 rounded-full object-contain "
            />
            <img
              src={props.mediumImage}
              alt={props.name}
              className="size-4 absolute -bottom-1 -right-1 rounded-full object-contain "
            />
          </div>
          <div className=" flex-1">
            <p className="text-sm font-semibold">{props.name}</p>
  
            <p className="text-xs text-muted-foreground">{props.description}</p>
          </div>
  
          <ArrowUpRight
            size={16}
            className="mr-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
          />
        </Card>
      </Link>
    );
  };
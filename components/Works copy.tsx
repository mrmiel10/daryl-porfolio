import Link from "next/link";
import { Badge } from "./ui/badge";
export type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    freelance?: boolean;
  };
 export const Work = (props: WorkProps) => {
    return (
      <Link
        href={props.url}
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors rounded p-1"
      >
        <img
          src={props.image}
          alt={props.title}
          className="size-10 object-contain rounded-md"
        />
  
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold text-primary">{props.title}</p>
            {props.freelance && <Badge variant={"outline"}>intern</Badge>}
          </div>
  
          <p className="text-sm text-muted-foreground">{props.role}</p>
        </div>
        <div className="ml-auto">
          <p className="text-xs text-end text-muted-foreground">{props.date}</p>
        </div>
      </Link>
    );
  };
  
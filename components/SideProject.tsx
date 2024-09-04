import { LucideIcon } from "lucide-react";
import Link from "next/link";
export type SideProjectProps = {
    logo: LucideIcon;
    title: string;
    description: string;
    url: string;
  };
export const SideProject = (props: SideProjectProps) => {
    return (
      <Link
        href={props.url}
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors rounded p-1"
      >
        <span className="bg-accent text-accent-foreground p-3 rounded-sm">
          <props.logo />
        </span>
        <div>
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      </Link>
    );
  };
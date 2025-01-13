import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export type SideProjectsProps = {
    logo: any;
    title: string;
    description: string;
    url?: string;
}
export const SideProjects = (props: SideProjectsProps) => {
    return props.url ? (
      <Link
        href={props.url}
        target="_blank"
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded"
      >
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <FontAwesomeIcon icon={props.logo} size="lg" />
            </span>

          <div>
              <p className="text-sm md:text-base font-semibold">{props.title}</p>
              <p className="text-sm md:text-base text-muted-foreground">{props.description}</p>
          </div>
      </Link>
    ) : (
      <div className="inline-flex items-center gap-4 bg-muted/20 p-2 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <FontAwesomeIcon icon={props.logo} size="lg" />
            </span>

          <div>
              <p className="text-sm md:text-base font-semibold">{props.title}</p>
              <p className="text-sm md:text-base text-muted-foreground">{props.description}</p>
          </div>
      </div>
    );
}

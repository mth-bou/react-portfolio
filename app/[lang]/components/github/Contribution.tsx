import React from 'react';
import Link from "next/link";
import { OpenSourceRepository } from "@/types/types";
import Image from "next/image";

const Contribution = (props: OpenSourceRepository) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded"
    >
      {/*<span className="bg-accent text-accent-foreground p-3 rounded-sm">*/}
      {/*    <Image src={props.image} alt={props.name}/>*/}
      {/*</span>*/}

      <div>
        <p className="text-sm md:text-base font-semibold">{props.name}</p>
        <p className="text-sm md:text-base text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

export default Contribution;

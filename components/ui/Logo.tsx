"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75  transition gap-x-2 hidden md:flex">
        <Image
          src={"/logo_only.png"}
          alt="Organiseo Logo"
          width={36}
          height={36}
        />
        <p className={cn("text-lg text-neutral-700 pb-1", poppins.className)}>
          Organiseo
        </p>
      </div>
    </Link>
  );
};

export default Logo;

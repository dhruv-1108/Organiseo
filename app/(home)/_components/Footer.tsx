import { Button } from "@/components/button";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bottom-0 fixed w-full p-4 border-t shadow-sm bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex w-full items-center justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button variant={"ghost"} size={"sm"}>
            <Link href="auth/login">Privacy Policy</Link>
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            <Link href="auth/register">Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

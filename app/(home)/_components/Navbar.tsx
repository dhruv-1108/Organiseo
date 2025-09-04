import { Button } from "@/components/button";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="top-0 fixed w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex w-full items-center justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button variant={"outline"} size={"sm"}>
            <Link href="auth/login">Login</Link>
          </Button>
          <Button size={"sm"}>
            <Link href="auth/register">Get Organiseo for free.</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

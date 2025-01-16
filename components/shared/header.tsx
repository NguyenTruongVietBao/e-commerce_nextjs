import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href={"/"} className="flex-start">
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={48}
              height={48}
              priority={true}
            />
          </Link>
          <span className="hidden lg:block font-bold text-2xl ml-3">
            {APP_NAME}
          </span>
        </div>
        <div className="space-x-2">
          <ModeToggle />
          <Button asChild variant={"ghost"}>
            <Link href={"/cart"}>
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href={"/sign-in"}>
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

import React from "react";
import Logo from "@/asserts/Appvilla.svg";
import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { dark, neobrutalism } from "@clerk/themes";

function NavBar(): JSX.Element {
  const { userId } = auth();
  return (
    <section className="bg-[#FF6B81]">
      <div className="flex justify-center items-center w-full ">
        <nav className="text-white flex items-center md:gap-x-48 2xl:gap-60 md:py-4 ">
          <Image src={Logo} alt="logo" className="w-[9.9rem] h-[2.2rem]" />
          <div className="flex gap-6 font-bold">
            <Link href={"/"}>Home</Link>
            <Link href={""}>Features</Link>
            <Link href={""}>Overview</Link>
            <Link href={"/profile"}>Profile</Link>
            <Link href={""}>Team</Link>
            <Link href={""}>Blog</Link>
            <Link href={""}>Contact</Link>
            {userId ? (
              <div className="text-white">
                <UserButton
                  afterSignOutUrl={"/"}
                  showName
                  appearance={{
                    elements: {
                      variables: { colorPrimary: "white" },
                      backgroundColor: "#5755eb",
                    },
                  }}
                />
              </div>
            ) : (
              <div className="flex space-x-3">
                <Link href={"/sign-in"}>Sign in </Link>
                <Link href={"/sign-up"}>Sign up </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </section>
  );
}

export default NavBar;

import React from "react";
import Logo from "@/asserts/Appvilla.svg";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

function NavBar(): JSX.Element {
  const { userId } = auth();
  return (
    <section className="bg-[#FF6B81]">
      <div className="flex justify-center items-center w-full ">
        <nav className="text-white flex items-center md:gap-x-48 2xl:gap-60 md:py-4 ">
          <Link href={"/"}>
            <Image src={Logo} alt="logo" className="w-[9.9rem] h-[2.2rem]" />
          </Link>
          <div className="flex gap-6 font-bold">
            <Link href={"/"}>Home</Link>
            <Link href={"/dashboard"}>Dashboard</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/basic"}>Basic</Link>
            <Link href={"/premium"}>Premium</Link>
            <Link href={"/standard"}>Standard</Link>
            <Link href={"/enterprise"}>EnterPrise</Link>
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

import React from "react";
import Logo from "@/asserts/Appvilla.svg";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  //
  return (
    <section className="bg-[#081828] w-full h-[36rem]">
      <div className="text white py-24">
        <div className="flex justify-center items-start text-white mx-12 gap-24">
          <div className="flex flex-col space-y-4 mt-2">
            <Image src={Logo} alt="logo" className="w-[11rem] h-[2rem]" />
            <h1 className="w-[22rem] text-gray-500">
              Making the world a better place through constructing elegant
              hierarchies.
            </h1>
            <p>Designed and Developed by UIdeck</p>
          </div>

          <div className="flex justify-center items-center ">
            <div className="grid grid-cols-4 gap-24">
              <div className="flex flex-col">
                <Link className="text-[1.2rem] mb-6" href="/">
                  Solutions
                </Link>
                <div className="flex flex-col space-y-1">
                  <Link className="text-gray-400" href="/">
                    Marketing
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Analytics
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Commerce
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Insights
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Promotion
                  </Link>
                </div>
              </div>

              <div className="flex flex-col">
                <Link className="text-[1.2rem] mb-6" href="/">
                  Support
                </Link>
                <div className="flex flex-col space-y-1">
                  <Link className="text-gray-400" href="/">
                    Marketing
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Analytics
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Commerce
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Insights
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Promotion
                  </Link>
                </div>
              </div>

              <div className="flex flex-col">
                <Link className="text-[1.2rem] mb-6" href="/">
                  Company
                </Link>
                <div className="flex flex-col space-y-1">
                  <Link className="text-gray-400" href="/">
                    Marketing
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Analytics
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Commerce
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Insights
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Promotion
                  </Link>
                </div>
              </div>

              <div className="flex flex-col">
                <Link className="text-[1.2rem] mb-6" href="/">
                  Legal
                </Link>
                <div className="flex flex-col space-y-1">
                  <Link className="text-gray-400" href="/">
                    Marketing
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Analytics
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Commerce
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Insights
                  </Link>
                  <Link className="text-gray-400" href="/">
                    Promotion
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 w-[68rem] h-[10rem] flex  px-12 items-center border-2 border-gray-500 mx-auto rounded-lg">
        <div className="flex  items-center">
          <div className="flex flex-col text-white">
            <h1 className="text-[1.3rem] mb-1">Subscribe to our Newsletter</h1>
            <p className="text-gray-400">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Footer;

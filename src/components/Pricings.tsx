"use client";
import React from "react";
import Tick from "@/asserts/icons/Tick.png";
import Image from "next/image";

interface PricingList {
  title: string;
  para: string;
  price: string;
  user: string;
}

const Pricings: React.FC<PricingList> = ({ title, para, price, user }) => {
  return (
    <section className="w-[20rem] h-[32rem] border-2">
      <div className="flex flex-col p-6 space-y-3">
        <h1 className="font-semibold">{title}</h1>
        <p className="text-gray-400">{para}</p>
        <h2 className="text-[2rem] font-bold">{price}</h2>
        <button className="text-white w-[15.5rem] h-[2.7rem] bg-black rounded-lg ">
          {user}
        </button>
        <hr className="" />
        <h1 className="pt-6">What's Included</h1>
        <div className="flex flex-row ">
          <div className="flex justify-center items-center space-x-4">
            <Image src={Tick} alt="pic" className="w-[0.8rem] h-[0.8rem]" />
            <h3 className="text-gray-500">Cras justo odio.</h3>
          </div>
        </div>

        <div className="flex flex-row ">
          <div className="flex justify-center items-center space-x-4">
            <Image src={Tick} alt="pic" className="w-[0.8rem] h-[0.8rem]" />
            <h3 className="text-gray-500">Dapibus ac facilisis in.</h3>
          </div>
        </div>

        <div className="flex flex-row ">
          <div className="flex justify-center items-center space-x-4">
            <Image src={Tick} alt="pic" className="w-[0.8rem] h-[0.8rem]" />
            <h3 className="text-gray-500">Morbi leo risus.</h3>
          </div>
        </div>

        <div className="flex flex-row ">
          <div className="flex justify-center items-center space-x-4">
            <Image src={Tick} alt="pic" className="w-[0.8rem] h-[0.8rem]" />
            <h3 className="text-gray-500">Potenti felis, in cras ligula.</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

function Pricing(): JSX.Element {
  return (
    <section className="my-12 bg-[#F9F9F9] ">
      <div className="flex justify-center items-center ">
        <div className="flex flex-col items-center text-center space-y-3">
          <h3 className="text-[1rem] text-[#FF6B81]">PRICING</h3>
          <h1 className="text-[1.8rem] font-bold">Pricing Plan</h1>
          <p className="w-[42rem] text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center my-12 ">
        <div className="grid grid-cols-4 gap-5">
          <Pricings
            title="Hobby"
            para="All the basics for starting a new
            business"
            price="$12/mo"
            user="Buy Basics"
          />
          <Pricings
            title="Freelancer"
            para="All the basics for starting a new
            business"
            price="$24/mo"
            user="Buy Standard"
          />
          <Pricings
            title="Startup"
            para="All the basics for starting a new
            business"
            price="$32/mo"
            user="Buy Premium"
          />
          <Pricings
            title="Enterprise"
            para="All the basics for starting a new
            business"
            price="$48/mo"
            user="Buy Enterprise"
          />
        </div>
      </div>
    </section>
  );
}

export default Pricing;

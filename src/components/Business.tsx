import React from "react";
import Image from "next/image";

function Business() {
  return (
    <div className="w-screen h-screen bg-[#000614]">
      
      <div className="flex items-center justify-center flex-col mt-[-8rem]">
        <p className="text-white text-3xl">let's talk money</p>
        <Image src="/Line.svg" alt="line" width={250} height={50} />
      </div>
      <div className=" flex items-center justify-center mt-[8rem]">
        <div className="bg-[#000] w-[70rem] h-[35rem] rounded-lg border border-[#0047FF] flex justify-around">
          <div className="mt-[1rem] relative">
            <Image src="/Rectangle.svg" alt="line" width={570} height={50} />
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl">
              <p className="ml-[-7rem] font-bold">Start woking with us</p>
              <p className="ml-[-7rem] mt-[2rem]">
                At Boost-Q our main goal is to help startups deliver their
                products to their end target users in simple yet beautiful
                manner.
              </p>
              <p className="flex justify-end relative top-[13rem] text-white text-5xl font-bold">
                $ 500
              </p>
            </div>
          </div>
          <div className="mt-[2rem]">
            <p className="text-white text-xl">Unique Product</p>
            <p className="text-white mt-[1.5rem] w-[25rem]">
              We develop a product in the shortest time you than would imagine
            </p>
            <p className="text-white mt-[1.5rem]">Elements of our products:</p>
            <ul className="mt-[1rem] flex flex-col gap-[1.5rem]">
              <ul className="text-white flex">
                <span className="mt-[5px]">
                  <Image
                    src="/SmallLine.svg"
                    alt="line"
                    width={20}
                    height={50}
                  />
                </span>
                Frontend Development
              </ul>
              <ul className="text-white flex">
                <span className="mt-[5px]">
                  <Image
                    src="/SmallLine.svg"
                    alt="line"
                    width={20}
                    height={50}
                  />
                </span>
                Backend Development
              </ul>
              <ul className="text-white flex">
                <span className="mt-[5px]">
                  <Image
                    src="/SmallLine.svg"
                    alt="line"
                    width={20}
                    height={50}
                  />
                </span>
                User research & Testing
              </ul>
              <ul className="text-white flex">
                <span className="mt-[5px]">
                  <Image
                    src="/SmallLine.svg"
                    alt="line"
                    width={20}
                    height={50}
                  />
                </span>
                UX/UI Design
              </ul>
            </ul>
            <button
              type="button"
              className="bg-[#0047FF] font-medium w-[25rem] rounded-lg text-sm px-4 py-2 text-center mt-[2rem] text-[#fff]"
            >
              Hire us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;

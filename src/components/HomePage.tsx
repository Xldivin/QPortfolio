import React from "react";
import Image from "next/image";

function HomePage() {
  return (
    <div className="w-screen h-[75rem] bg-[#000614]">
      <div className="flex items-center justify-center relative top-[9rem]">
        <p className="text-white text-7xl">Creative</p>
        <div className="relative">
          <Image
            src="/circle.svg"
            alt="Vercel Logo"
            width={160}
            height={74}
            priority
          />
          <Image
            src="/cat.svg"
            alt="Inner Image"
            className="absolute top-[1rem] left-[3rem]"
            width={70}
            height={60}
          />
        </div>
        <p className="text-white text-7xl">Digital</p>
      </div>
      <div className="flex items-center justify-center mt-[8rem] flex-col">
        <p className="text-white text-5xl">IT Consulting Agency</p>
        <p className="text-white text-1xl mt-[2rem]">
          Welcome to the <span className="text-[#0047FF]">Futuristic</span>{" "}
          World of <span className="text-[#0047FF]">Web3</span> Development!
        </p>
        <button
          type="button"
          className="text-white bg-[#0047FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mt-[2rem] md:mr-0"
        >
          Contact us
        </button>
      </div>
      <div className="flex justify-end">
        <Image src="/Dot.svg" alt="Dot" width={150} height={100} />
      </div>
      <div className="ml-[9rem] mt-[-5rem] flex">
        <div className="relative">
          <Image src="/Engineer.svg" alt="Engineer" width={450} height={200} />
          <button
            type="button"
            className="absolute bg-[#fff] font-medium w-[13rem] rounded-lg text-sm px-4 py-2 text-center top-[11rem] text-[#0047FF]"
          >
            Hire us
          </button>
        </div>
        <div>
          <p className="text-[#0047FF] text-3xl w-[23rem] ml-[2rem] font-bold">
            Unleash the Power of Blockchain and Beyond!
          </p>
          <div className="relative">
            <Image src="/Ellipse.svg" alt="Engineer" width={350} height={200} />
            <p className="absolute top-[2rem] text-white w-[30rem]">
              Are you ready to revolutionize your digital presence and stay
              ahead in the decentralized future? Look no further! Our Web3
              Development Services are here to turn your ideas into reality.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
      <Image src="/Shadow.svg" alt="Engineer" width={200} height={100} />
      <div className="absolute top-[12rem] flex gap-[8.5rem] ml-[6rem]">
        <Image src='/Fedex.svg' alt="FedEx" width={100} height={100} />
        <Image src='/W.svg' alt="FedEx" width={100} height={100} />
        <Image src='/2K.svg' alt="FedEx" width={100} height={100} />
        <Image src='/Wix.svg' alt="FedEx" width={100} height={100} />
        <Image src='/Airbnb.svg' alt="FedEx" width={100} height={100} />
        <Image src='/Mistubishi.svg' alt="FedEx" width={100} height={100} />
      </div>
      </div>
    </div>
  );
}

export default HomePage;

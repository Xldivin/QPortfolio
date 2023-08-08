import React from "react";
import Image from "next/image";
import { Members } from "@/utils/constantUtils";

function Footer() {
  return (
    <>
      <div className="w-screen h-[15rem] bg-[#000614]">
        <div className="flex gap-[5rem]">
          <div className="flex flex-col w-[35rem] ml-[1rem]">
            <p className="mb-[1rem] text-white font-bold text-4xl">
              Boost-<span className="text-[#0047FF]">Q</span>
            </p>
            <p className="mb-[1rem] text-white">
              Ready to embark on this exhilarating journey into the Web3
              universe? Get in touch with us today and let's build the future
              together.
            </p>
            <p className="mb-[1rem] text-[#ACACAC]">Join us now:</p>
            <div className="flex gap-[0.5rem]">
              <Image src="/Email.svg" alt="line" width={20} height={50} />
              <Image src="/Email.svg" alt="line" width={20} height={50} />
              <Image src="/Email.svg" alt="line" width={20} height={50} />
              <Image src="/Email.svg" alt="line" width={20} height={50} />
              <Image src="/Email.svg" alt="line" width={20} height={50} />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[#0047FF] mb-[1rem]">Menu</p>
            <p className="text-[#BABBBE]">Services</p>
            <p className="text-[#BABBBE]">projects</p>
            <p className="text-[#BABBBE]">products</p>
            <p className="text-[#BABBBE]">pricing</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#0047FF] mb-[1rem]">Information</p>
            <p className="text-[#BABBBE]">About us</p>
            <p className="text-[#BABBBE]">Terms & Conditions</p>
            <p className="text-[#BABBBE]">User's & Guide</p>
            <p className="text-[#BABBBE]">Support Center</p>
          </div>
          <div className="flex flex-col w-[25rem]">
            <p className="text-[#0047FF] mb-[1rem]">About Us</p>
            <p className="text-[#BABBBE]">
              Are you ready to revolutionize your digital presence and stay
              ahead in the decentralized future? Look no further! Our Web3
              Development Services are here to turn your ideas into reality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

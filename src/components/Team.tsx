import React from "react";
import Image from "next/image";
import { Members } from "@/utils/constantUtils";

function Team() {

  return (
    <>
      <div className="w-screen h-[70rem] bg-[#000614]">
        <div className="flex justify-end">
          <Image src="/RightShadow.svg" alt="Dot" width={230} height={100} />
        </div>
        <div className="flex items-center justify-center flex-col mt-[-12rem]">
          <p className="text-white text-3xl">The Boost-Q Team</p>
          <Image src="/Line.svg" alt="line" width={250} height={50} />
          <div className="mt-[3rem]">
            <p className="text-white text-center">
              Ready to embark on this exhilarating journey into the Web3
              universe? Get in touch with us today and let's build the future
              together.
            </p>
          </div>
        </div>
        <div className="flex justify-start mt-[8rem]">
          <Image src="/LeftAngle.svg" alt="Dot" width={180} height={100} />
        </div>
        <div className="flex items-center justify-center mt-[-13rem] flex-wrap gap-[5rem]">
          {Members?.map((data, index) => (
            <div className="w-[35rem] h-[13rem] bg-[#000] flex justify-around rounded-lg">
              <Image
                src="/Team.svg"
                alt="Dot"
                width={245}
                height={100}
                className="mt-[-10rem]"
              />
              <div className="w-[13rem] h-[8rem] bg-[#fff] mt-[2rem] rounded-lg">
                <p className="text-xs text-center rounded-lg">
                  {data.paragraph}
                </p>
                <Image
                  src="/Unfinished.svg"
                  alt="Dot"
                  width={280}
                  height={100}
                />
                <p className="text-center font-bold text-[#FFF]">{data.name}</p>
                <p className="text-center text-xs text-[#0047FF]">
                  {data.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;

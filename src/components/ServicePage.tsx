import React from "react";
import Image from "next/image";

function ServicePage() {
  return (
    <div className="w-screen h-[120rem] bg-[#000614]">
      <div className="flex items-center justify-center flex-col">
      <p className="text-white text-3xl">
        Our Services
      </p>
      <Image src="/Line.svg" alt="line" width={250} height={50} />
      </div>
      {/* section1 */}
      <div className="mt-[7rem] flex justify-around">
        <div className="flex flex-col gap-[2rem]">
          <p className="text-white text-6xl font-bold">
            Product Design and Strategy
          </p>
          <p className="text-white w-[25rem]">
            At Boost-Q our main goal is to help startups deliver their products
            to their end target users in simple yet beautiful manner.
          </p>
          <Image
            src="/Expert.svg"
            alt="Dot"
            width={450}
            height={100}
            className="ml-[2rem]"
          />
        </div>
        <div className="mt-[7rem] ml-[-25rem]">
          <p className="text-[#0047FF] text-2xl font-bold w-[23rem] text-center ">
            Features of our
            <br /> Product Design and Strategy
          </p>
          <ul className="mt-[1rem] ml-[4rem] flex flex-col gap-[1.5rem]">
            <ul className="text-white flex">
              <span className="mt-[5px]">
              <Image src="/SmallLine.svg" alt="line" width={20} height={50} />
              </span>
              UI/UX Design
            </ul>
            <ul className="text-white flex">
              <span className="mt-[5px]">
              <Image src="/SmallLine.svg" alt="line" width={20} height={50} />
              </span>
              Rapid Prototyping
            </ul>
            <ul className="text-white flex">
              <span className="mt-[5px]">
              <Image src="/SmallLine.svg" alt="line" width={20} height={50} />
              </span>
              User research & Testing
            </ul>
            <ul className="text-white flex">
              <span className="mt-[5px]">
              <Image src="/SmallLine.svg" alt="line" width={20} height={50} />
              </span>
              Post-launch optimization
            </ul>
          </ul>
        </div>
      </div>
      {/* section2 */}
      <div>
        <div className="relative">
          <div className="flex justify-end">
            <Image src="/Ball.svg" alt="Dot" width={350} height={100} />
          </div>
          <div className="flex justify-between absolute top-[5rem]">
            <div className="mt-[7rem]">
              <p className="text-[#0047FF] text-2xl font-bold w-[23rem] text-center ">
                Features of our
                <br />
                Mobile App Development
              </p>
              <ul className="mt-[1rem] ml-[4rem] flex flex-col gap-[1.5rem]">
            <ul className="text-white flex">
              <span className="mt-[5px]">
              <Image src="/SmallLine.svg" alt="line" width={20} height={50} />
              </span>
              Multiplatform Apps
            </ul>
            <ul className="text-white flex">
              <span className="mt-[5px]">
              <Image src="/SmallLine.svg" alt="line" width={20} height={50} />
              </span>
              Deploying-Testing
            </ul>
            <ul className="text-white flex">
              <span className="mt-[5px]">
              <Image src="/SmallLine.svg" alt="line" width={20} height={50} />
              </span>
              Market research
            </ul>
          </ul>
            </div>
            <div className="flex flex-col gap-[2rem] ml-[14rem]">
              <p className="text-white text-6xl font-bold">
                Mobile App Development
              </p>
              <p className="text-white w-[37rem]">
                In the fast-paced digital era, having a powerful mobile app is
                no longer an option - it's a necessity! Welcome to our Mobile
                App Development services, where we create stunning, feature-rich
                applications that captivate users and drive business growth.
              </p>
              <Image
                src="/Phone.svg"
                alt="Dot"
                width={450}
                height={100}
                className="ml-[2rem]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* section3 */}
      <div className="mt-[25rem] flex justify-around gap-[20rem]">
        <div className="flex flex-col gap-[2rem]">
          <p className="text-white text-6xl font-bold">
          Web3 Development
          </p>
          <p className="text-white w-[25rem]">
          At Boost-Q our main goal is to help startups deliver their products to their end target users in simple yet beautiful manner.
          </p>
          <Image
            src="/Plans.svg"
            alt="Dot"
            width={450}
            height={100}
            className="ml-[2rem]"
          />
        </div>
        <div className="mt-[7rem] ml-[-25rem]">
          <p className="text-[#0047FF] text-2xl font-bold w-[23rem] text-center ">
            Features of our
            <br /> Product Design and Strategy
          </p>
          <ul className="mt-[1rem] ml-[4rem] flex flex-col gap-[1.5rem]">
            <ul className="text-white flex">
              <span className="mt-[5px]">
              <Image src="/SmallLine.svg" alt="line" width={20} height={50} />
              </span>
              Frontend Development
            </ul>
            <ul className="text-white flex">
              <span className="mt-[5px]">
              <Image src="/SmallLine.svg" alt="line" width={20} height={50} />
              </span>
              Backend Development
            </ul>
            <ul className="text-white flex">
              <span className="mt-[5px]">
              <Image src="/SmallLine.svg" alt="line" width={20} height={50} />
              </span>
              User research & Testing
            </ul>
            <ul className="text-white flex">
              <span className="mt-[5px]">
              <Image src="/SmallLine.svg" alt="line" width={20} height={50} />
              </span>
              Post-launch optimization
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;

import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <>
      <div className="w-screen h-screen bg-[#000614]">
        <div className="flex justify-start relative">
          <Image src="/Rocket.svg" alt="Dot" width={230} height={100} />
        </div>
        <div className="mt-[-42rem]">
          <div className="flex items-center justify-center flex-col mt-[-5rem]">
            <p className="text-white text-3xl">Let’s get in touch</p>
            <Image src="/Line.svg" alt="line" width={250} height={50} />
          </div>
          <div className="mt-[3rem]">
            <p className="text-white text-center">
              Ready to embark on this exhilarating journey into the Web3
              universe? Get in touch with us today and let's build the future
              together.
            </p>
          </div>
          <div className="flex gap-[2rem] items-center justify-center mt-[4rem]">
            <div className="bg-[#000] w-[75rem] h-[35rem] rounded-lg z-20 flex justify-around">
              <div className="">
                <div className="flex flex-col w-[25rem] gap-[1rem] px-4 py-8">
                  <p className="text-white font-bold text-3xl">
                    Let us work togehter
                  </p>
                  <p className="text-white">
                    Do not hesitate to reach out to us. Our clients are our
                    number one priority and we treat them as much. We will reply
                    to your messages within 24 hours
                  </p>
                  <input
                    type="text"
                    className="px-4 py-2 text-black rounded-full"
                    placeholder="Full Name"
                  ></input>
                  <input
                    type="text"
                    className="px-4 py-2 text-black rounded-full"
                    placeholder="Email"
                  ></input>
                  <textarea
                    className="w-full h-32 px-4 py-2 border rounded-2xl"
                    placeholder="Message"
                  ></textarea>
                  <button
                    type="button"
                    className="bg-[#0047FF] font-medium w-[23rem] rounded-lg text-sm px-4 py-2 text-center text-[#fff]"
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className="w-[28rem] h-[35rem] bg-[#fff] rounded-lg">
                <Image
                  src="/Map.svg"
                  alt="Dot"
                  width={450}
                  height={150}
                  className="px-4 py-2"
                />
                <div className="flex flex-col px-4 mt-[2rem] gap-[2rem]">
                  <div className="flex gap-[9px]">
                    <Image
                      src="/PhoneIcon.svg"
                      alt="line"
                      width={20}
                      height={50}
                    />
                    <p>0787875454</p>
                  </div>
                  <div className="flex gap-[9px]">
                    <Image src="/Email.svg" alt="line" width={20} height={50} />
                    <p>boostq@gmail.com</p>
                  </div>
                  <div className="flex gap-[9px]">
                    <Image
                      src="/Location.svg"
                      alt="line"
                      width={20}
                      height={50}
                    />
                    <p>KK 192 ST</p>
                  </div>
                </div>
                <div className="flex flex-col px-4 mt-[2rem]">
                  <p>or you can with us on:</p>
                  <div className="flex gap-[20px]">
                    <Image
                      src="/Instagram.svg"
                      alt="line"
                      width={20}
                      height={50}
                    />
                    <Image
                      src="/Facebook.svg"
                      alt="line"
                      width={20}
                      height={50}
                    />
                    <Image
                      src="/linkedin.svg"
                      alt="line"
                      width={20}
                      height={50}
                    />
                    <Image
                      src="/Twitter.svg"
                      alt="line"
                      width={20}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

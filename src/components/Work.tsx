import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Work() {
  return (
    <div className="w-screen h-screen bg-[#000614]">
      <div className="flex justify-start relative top-[25rem]">
        <Image src="/Dots.svg" alt="Dot" width={100} height={100} />
      </div>
      <div className="flex items-center justify-center flex-col mt-[-8rem]">
        <p className="text-white text-3xl">Our Beautiful work</p>
        <Image src="/Line.svg" alt="line" width={250} height={50} />
      </div>
      <div className="mt-[3rem]">
        <p className="text-white text-center">
          Ready to embark on this exhilarating journey into the Web3 universe?
          Get in touch with us today and let's build the future together.
        </p>
      </div>

    <Swiper
      spaceBetween={5}
      slidesPerView={3}
    >
      <SwiperSlide>
      <div className="ml-[10rem] mt-[2rem]">
        <div className="w-[20rem] rounded-lg shadow bg-[#000]">
          <a
            href="#"
            className="flex items-center justify-center relative top-[1rem]"
          >
            <Image src="/Laptop.svg" alt="line" width={300} height={50} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-white">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a href="#">
              <div className="flex gap-[5px]">
                <p className="text-[#0047FF] font-normal">visit</p>
                <Image src="/Arrow.svg" alt="line" width={25} height={50} />
              </div>
            </a>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="ml-[10rem] mt-[2rem]">
        <div className="w-[20rem] rounded-lg shadow bg-[#000]">
          <a
            href="#"
            className="flex items-center justify-center relative top-[1rem]"
          >
            <Image src="/Laptop.svg" alt="line" width={300} height={50} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-white">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a href="#">
              <div className="flex gap-[5px]">
                <p className="text-[#0047FF] font-normal">visit</p>
                <Image src="/Arrow.svg" alt="line" width={25} height={50} />
              </div>
            </a>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="ml-[10rem] mt-[2rem]">
        <div className="w-[20rem] rounded-lg shadow bg-[#000]">
          <a
            href="#"
            className="flex items-center justify-center relative top-[1rem]"
          >
            <Image src="/Laptop.svg" alt="line" width={300} height={50} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-white">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a href="#">
              <div className="flex gap-[5px]">
                <p className="text-[#0047FF] font-normal">visit</p>
                <Image src="/Arrow.svg" alt="line" width={25} height={50} />
              </div>
            </a>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="ml-[10rem] mt-[2rem]">
        <div className="w-[20rem] rounded-lg shadow bg-[#000]">
          <a
            href="#"
            className="flex items-center justify-center relative top-[1rem]"
          >
            <Image src="/Laptop.svg" alt="line" width={300} height={50} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-white">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a href="#">
              <div className="flex gap-[5px]">
                <p className="text-[#0047FF] font-normal">visit</p>
                <Image src="/Arrow.svg" alt="line" width={25} height={50} />
              </div>
            </a>
          </div>
        </div>
      </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
}

export default Work;

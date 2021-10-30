import React from "react";
import Image from 'next/image'
export default function HeroHome() {
  return (
    <>
    <div className="bg-primary_bg">
      <div className="px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  lg:px-8 lg:pt-28 lg:pb-28">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 py-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">

     
            <h2 className="max-w-lg mb-6  font-sans text-3xl font-bold sm:leading-10 text-ghost sm:text-4xl ">
            A Better Way to
              <br className="hidden md:block" />
              Organize , Share & Discover
              <span className="inline-block text-indigo-500">
              Snippets
              </span>
            </h2>

            <p className="text-base text-text_prime md:text-lg">
            No more switching back and forth between IDEs to find the code
              snippets or open your code repository to find what you need.
              Organize your code snippets!! Save time and Increase productivity.
            </p>
          </div>
          <div className="flex xs:justify-center md:justify-start">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg">
                Get Started
              </button>
            </div>
        </div>
        <div className="relative xs:hidden lg:block md:-mt-44 lg:w-1/2">
          {/* <img
            className="object-cover object-center w-full h-56 rounded  sm:h-96"
            src="./programmer_dark.gif"
            alt="CODE"
          /> */}
           <div className="object-cover object-center w-full h-56 rounded  sm:h-96">
                <Image
                    src="/programmer_dark.gif"
                    alt="code"
                    height={400}
                    width={500}
                    layout="responsive"
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                </div>
          {/* <iframe src="https://embed.lottiefiles.com/animation/39610"></iframe> */}
        
        </div>
      </div>
    </div>
    </div>


    </>
  );
}

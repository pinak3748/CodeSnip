/*  ./Components/Navbar.jsx     */
import Link from "next/link";
import Head from "next/head";
import Hook from './hook'
import { useState } from "react";
import Image from 'next/image'

export default function Nav(props) {
  const [active, setActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  

  return (
    <div className="">
      <Head>
        <link crossOrigin rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link crossOrigin
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav className="flex z-40 items-center border-b border-divider flex-wrap bg-primary_bg relative text-ghost p-3">
        <Link href="/">
          <a className={`inline-flex items-center p-2 mr-4`}>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-white transform rotate-90 h-8 w-8 mr-2"
            >
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
            <span className={`text-xl text-white font-Ubuntu font-medium uppercase no-underline`}>
              CodeSnip
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-2 hover:bg-gray-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden "
          }   w-full lg:inline-flex lg:justify-center lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:justify-center  lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 no-underline rounded text-white font-Ubuntu  items-center justify-center hover:text-white ">
                Home
              </a>
            </Link>
            <Link href="/discover">
              <a className="lg:inline-flex lg:w-auto w-full no-underline px-3 py-2 rounded text-white font-Ubuntu items-center justify-center hover:text-white">
                Discover
              </a>
            </Link>
            <Link href="/About">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 no-underline rounded text-white font-Ubuntu items-center justify-center hover:text-white">
                About
              </a>
            </Link>
            <Link href="/Contact">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 no-underline rounded text-white font-Ubuntu items-center justify-center hover:text-white">
                Contact
              </a>
            </Link>
          </div>
        </div>
        {/* <div className={`pe-3 mt-1 ${darkMode ? "dark" : ""}`}>
          <div className="">
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                //  <img className="w-6 h-6 " src="./sun.svg" alt="sun" />
                 <div className="w-6 h-6 my-auto">
                 <Image
                     src="/sun.svg"
                     alt="sun"
                     height={30}
                     width={30}
                     blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                   />
                 </div>
              ) : (
                // <img className="w-6 h-6 " src="./moon.svg" alt="moon" />
                <div className="w-6 h-6 my-auto">
                <Image
                    src="/moon.svg"
                    alt="moon"
                    height={30}
                    width={30}
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                </div>
              )}
            </button>
          </div>
        </div> */}


      <Hook {...props}/>
      </nav>
    </div>
  );
}

import sty from "../styles/dashboard.module.css";
import Image from "next/image";
import pen from "../public/pen.svg";
import python from "../public/lang_icons/python.png";
import rhythm from "../public/rhythm.png";
import snippet from "../public/snippet.svg";
import followers from "../public/followers.svg";
import likes from "../public/likes.svg";
import follow from "../public/follow.svg";
import arrow from "../public/aright.svg";
import React, { useState } from "react";
import avatar from '../public/man.png'

const Mydashboard = (props) => {
  const { info, snip, token ,details,setDetails ,update ,edit, setEdit} = props;

  const handleedit = () => {
    setEdit({ readOnly: false });
    console.log(edit);
  };

  const handleInputs = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };


  return (
    <>
      <div
        className={`bg-secondary_bg md:ml-20 min-h-screen max-h-full lg:flex  ${sty.height} `}
      >
        <div className="lg:w-2/3 w-full shadow-lg xs:px-3 sm:px-10  py-3">
          <div className="xs:px-3 sm:px-10 py-3 h-18 rounded-t-lg rounded-r-lg bg-section_secondary overflow-hidden flex justify-between ">
            <p
              className={`text-ghost mt-3  text-center tracking-wider ${sty.text}`}
            >
              My Dashboard
            </p>
            <div className="w-7 h-6 mt-3 py-0 ">
              <Image
                src={pen}
                alt="edit"
                onClick={handleedit}
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
              />
            </div>
          </div>
          <div className=" bg-thr_bg ">
            <div className="block md:flex  xs:px-3 sm:px-10">
             
              <div className=" xs:w-full md:w-2/5 text-center py-4 rounded-full mx-auto  ">
              <Image
                src={avatar}
                alt="edit"
                height={180}
                width={180}
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
              />
            </div>
            <div className="xs:w-full md:w-3/5 py-4 xs:px-10 md:px-3 xs:flex xs:justify-between md:block">
            <div>
            <p className="font-Ubuntu text-ghost ">Languages</p>
            <div className="xs:gap-2 sm:gap-3 flex  items-center">
                  <Image
                    src={python}
                    alt="Picture of the author"
                    width={22}
                    height={22}
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                  <Image
                    src={python}
                    alt="Picture of the author"
                    width={22}
                    height={22}
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                  <Image
                    src={python}
                    alt="Picture of the author"
                    width={22}
                    height={22}
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                </div>
            </div>
            <div>
            <p className="font-Ubuntu text-ghost mb-2 xs:mt-0 md:mt-4 ">Links</p>
            <span className="inline-flex sm:ml-auto mt-0 justify-center sm:justify-start">
            <a className="text-gray-400">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
            </div>
            </div>
              
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full xs:px-5 sm:px-10  py-4 bg-thr_bg">
              <div className="xs:col-span-2 sm:col-span-1">
                <label className="block text-secondary_text">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                  className={`w-full px-4 py-2.5  rounded-lg  ${edit.readOnly ? "bg-section_bg text-primary_text" : "bg-text_prime text-section_secondary font-semibold"}   mt-2 focus:ring focus:ring-section_bg focus:outline-none`}
                  value={details.username} //username
                  onChange={handleInputs}
                  readOnly={edit.readOnly}
                  autoFocus
                />
              </div>
              <div className="xs:col-span-2 sm:col-span-1">
                <label className="block text-secondary_text">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="fullname"
                  id="fullname"
                  className={`w-full px-4 py-2.5  rounded-lg  ${edit.readOnly ? "bg-section_bg text-primary_text " : "bg-text_prime text-section_secondary font-semibold"}   mt-2 focus:ring focus:ring-section_bg focus:outline-none`}
                  value={details.fullname} //username
                  onChange={handleInputs}
                  readOnly={edit.readOnly}
                  autoFocus
                />
              </div>
              <div className="col-span-2 ">
                <label className="block text-secondary_text">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="Email"
                  id="Email"
                  className={`w-full px-4 py-2.5  rounded-lg  ${edit.readOnly ? "bg-section_bg text-primary_text " : "bg-text_prime text-section_secondary font-semibold"}   mt-2 focus:ring focus:ring-section_bg focus:outline-none`}
                  value={details.email} //username
                  onChange={handleInputs}
                  readOnly={edit.readOnly}
                  autoFocus
                />
              </div>
              <div className="xs:col-span-2 sm:col-span-1">
                <label className="block text-secondary_text">Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  id="location"
                  className={`w-full px-4 py-2.5  rounded-lg  ${edit.readOnly ? "bg-section_bg text-primary_text " : "bg-text_prime text-section_secondary font-semibold"}   mt-2 focus:ring focus:ring-section_bg focus:outline-none`}
                  value={details.location} //username
                  onChange={handleInputs}
                  readOnly={edit.readOnly}
                  autoFocus
                />
              </div>
              <div className="xs:col-span-2 sm:col-span-1">
                <label className="block text-secondary_text">
                  Occupacation
                </label>
                <input
                  type="text"
                  placeholder="Occupation"
                  name="occupation"
                  id="occupation"
                  className={`w-full px-4 py-2.5  rounded-lg  ${edit.readOnly ? "bg-section_bg text-primary_text " : "bg-text_prime text-section_secondary font-semibold"}   mt-2 focus:ring focus:ring-section_bg focus:outline-none`}
                  value={details.occupation} //username
                  onChange={handleInputs}
                  readOnly={edit.readOnly}
                  autoFocus
                />
              </div>
              <div className="col-span-2 ">
                <label className="block text-secondary_text">Bio</label>
                <textarea
                  placeholder="Bio"
                  name="bio"
                  id="bio"
                  className={`w-full px-4 py-2.5  rounded-lg  ${edit.readOnly ? "bg-section_bg text-primary_text " : "bg-text_prime text-section_secondary font-semibold"}   mt-2 focus:ring focus:ring-section_bg focus:outline-none`}
                  value={details.bio} //username
                  onChange={handleInputs}
                  readOnly={edit.readOnly}
                  autoFocus
                />
              </div>
              <div className={`col-span-2 justify-center ${edit.readOnly ? "hidden" : "flex"} `}>
                <button
                  type="submit"
                  className="bg-indigo-500  hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-2 mt-3"
                  id="login"
                  name="login"
                  onClick={update}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full bg-secondary_bg">
          <div className="grid xs:grid-cols-2  2xl:grid-cols-2 gap-3 py-4 xs:px-10 lg:px-4">
            <div
              className={` rounded-xl bg-thr_bg flex py-3 px-3 justify-between ${sty.shadow}`}
            >
              <div>
                <div className="w-16 h-12">
                  <Image
                    src={followers}
                    alt="edit"
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                </div>
                <label className="text-secondary_text">Followers</label>
              </div>
              <p className="text-3xl text-center self-center text-ghost">
                {" "}
                7.8K
              </p>
            </div>
            <div
              className={`bg-thr_bg rounded-xl flex py-3 px-3 justify-between ${sty.shadow}`}
            >
              <div>
                <div className="w-16 h-12">
                  <Image
                    src={follow}
                    alt="edit"
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                </div>
                <label className="text-secondary_text">Following</label>
              </div>
              <p className="text-3xl text-center self-center text-ghost">
                {" "}
                7.8K
              </p>
            </div>
            <div
              className={`bg-thr_bg rounded-xl flex py-3 px-3 justify-between ${sty.shadow}`}
            >
              <div>
                <div className="w-16 h-12">
                  <Image
                    src={snippet}
                    alt="edit"
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                </div>
                <label className="text-secondary_text">snippet</label>
              </div>
              <p className="text-3xl text-center self-center text-ghost">
                {" "}
                7.8K
              </p>
            </div>
            <div
              className={`bg-thr_bg rounded-xl flex py-3 px-3 justify-between ${sty.shadow}`}
            >
              <div>
                <div className="w-16 h-12">
                  <Image
                    src={likes}
                    alt="edit"
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                </div>
                <label className="text-secondary_text">Likes</label>
              </div>
              <p className="text-3xl text-center self-center text-ghost">
                {" "}
                7.8K
              </p>
            </div>
          </div>

          <div>
            <p className="block text-secondary_text mt-2 xs:px-10 lg:px-4">
              Recent Snippets
            </p>

            <div className={` overflow-scroll gap-3 py-1 px-4 ${sty.recent}`}>
              <div
                className={`bg-thr_bg rounded-lg py-2 mb-3 items-center ${sty.shadow}`}
              >
                <p className="font-Ubuntu text-base  px-3  text-ghost">
                  Boiler plate for Node project <br />
                  <span className="pl-2  text-sm float-right text-secondary_text">
                    - 22/10/2021
                  </span>
                </p>
                {/* <label className="text-secondary_text px-3  bg-gray-400">Title : </label> */}
              </div>
              <div
                className={`bg-thr_bg rounded-lg py-2 mb-3 items-center ${sty.shadow}`}
              >
                <p className="font-Ubuntu text-base  px-3  text-ghost">
                  Boiler plate for Node project <br />
                  <span className="pl-2  text-sm float-right text-secondary_text">
                    - 22/10/2021
                  </span>
                </p>
                {/* <label className="text-secondary_text px-3  bg-gray-400">Title : </label> */}
              </div>
              <div
                className={`bg-thr_bg rounded-lg py-2 mb-3 items-center ${sty.shadow}`}
              >
                <p className="font-Ubuntu text-base  px-3  text-ghost">
                  Boiler plate for Node project <br />
                  <span className="pl-2  text-sm float-right text-secondary_text">
                    - 22/10/2021
                  </span>
                </p>
                {/* <label className="text-secondary_text px-3  bg-gray-400">Title : </label> */}
              </div>
              <div
                className={`bg-thr_bg rounded-lg py-2 mb-3 items-center ${sty.shadow}`}
              >
                <p className="font-Ubuntu text-base  px-3  text-ghost">
                  Boiler plate for Node project <br />
                  <span className="pl-2  text-sm float-right text-secondary_text">
                    - 22/10/2021
                  </span>
                </p>
                {/* <label className="text-secondary_text px-3  bg-gray-400">Title : </label> */}
              </div>
              <div
                className={`bg-thr_bg rounded-lg py-2 mb-3 items-center ${sty.shadow}`}
              >
                <p className="font-Ubuntu text-base  px-3 mb-3  text-ghost">
                  Boiler plate for Node project <br />
                  <span className="pl-2  text-sm float-right text-secondary_text">
                    - 22/10/2021
                  </span>
                </p>
                {/* <label className="text-secondary_text px-3  bg-gray-400">Title : </label> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mydashboard;

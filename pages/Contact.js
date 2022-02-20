import Nav from "../Components/Nav";
import Head from "next/head";
import Footer from "../Components/Footer";
import { useState } from "react";
import axios from 'axios'
export default function Contact() {
  const [user, setUser] = useState({ name: "", email: "" })

  let name, value;

  const handleInputs = (e) => {
    
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const sendmail = async (e) => {

   
    e.preventDefault();

    const { name, email } = user;
    const res = await fetch("https://vast-oasis-67124.herokuapp.com/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // credentials: true,
      body: JSON.stringify({
        name, email
      })
    });

    const data = await res.json();
    if (data.status != 200) {
      console.log(data)
    }
    else {
      console.log("ok")
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      {/* <Nav /> */}


      <section className="text-gray-400 bg-primary_bg border-t border-section_bg body-font relative">
        <div className="xs:px-4  lg:px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
             We are always ready to help, tell us about the problem you are facing.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 xs:w-full sm:w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.username}
                    onChange={handleInputs}
                    className="w-full bg-secondary_bg rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 xs:w-full sm:w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={user.email}
                    onChange={handleInputs}
                    name="email"
                    className="w-full bg-secondary_bg bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-secondary_bg bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={sendmail} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

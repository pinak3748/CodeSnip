import Image from 'next/image'

export default function Features() {
  return (
    <>
      <section className="md:py-20 lg:pb-32 bg-primary_bg">
        <div className="container items-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div className="w-full lg:max-w-md">
                <h2 className="mb-4 text-3xl text-ghost font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                  Jam-packed with all the Snips you need to succeed!
                </h2>
                <p className="mb-4 font-medium tracking-tight text-gray-500 xl:mb-6">
                  It&aposs; never been easier to get startd with your project. 
                  Find all Boiler Plate and Function for you project.
                </p>
                <ul>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      ></path>
                    </svg>
                    <span className="font-medium text-text_prime">
                      Faster time and low memory management code
                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      ></path>
                    </svg>
                    <span className="font-medium text-text_prime">
                      Out of the Box Topics
                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    <span className="font-medium text-text_prime">
                      100% Authenticate Codes
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
              {/* <img
                className="mx-auto sm:max-w-sm lg:max-w-full"
                src="./code.svg"
                alt="feature image"
              /> */}
                <div className="mx-auto sm:max-w-sm lg:max-w-full">
                <Image
                    src="/code.svg"
                    alt="Picture of the author"
                    height={400}
                    width={600}
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white border-b border-divider bg-primary_bg">
        <div className="flex flex-col border-4 border-text_prime rounded-3xl items-stretch justify-between px-4 xs:py-10 md:py-12 xs:mb-14 md:mb-20 mx-auto max-w-7xl lg:flex-row sm:items-center">
          <div className="px-2">
            
            <h2 className="mb-1 text-xl font-semibold text-left sm:text-2xl sm:text-center lg:text-left">
            Contributing to open-source CodeSnip
            </h2>
            <p className="mb-6 text-md font-normal text-left text-gray-200 sm:text-xl lg:mb-0 sm:text-center lg:text-left">
            Fix a bug, or add a new feature. You can make a pull request and see your code <br />  in the next version of CodeSnip
            </p>
          </div>

          <div className="flex flex-col mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            {/* <a href="#" className="w-full btn btn-light btn-lg sm:w-auto">
              Start free trial
            // </a> */}
             <button className="w-full items-center justify-center flex rounded-lg border border-gray-300 px-3 py-2.5 bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold">
                 {/* <img className="w-6 h-6 mr-1.5" src="./github.svg" alt="google" /> */}
                <div className="w-6 h-6 my-auto mr-1.5">
                <Image
                    src="/github.svg"
                    alt="Picture of the author"
                    height={30}
                    width={30}
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                </div>
               Get Started
              </button>
          </div>
        </div>
      </section>
    </>
  );
}

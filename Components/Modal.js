import { ModalContext } from "../utils/contexts";
import { useContext, useEffect, useState, useRef } from "react";
import rhythm from "../public/rhythm.png";
import Image from "next/image";
import axios from "axios";
import dynamic from "next/dynamic";
import sty from "../styles/discover.module.css";
import SkeletonCard from './SkeletonCard';
const Cardlayout = dynamic(() => import("../Components/Card"), {
  loading: () => <SkeletonCard />,
  ssr: false,
});
export default function Modal(props) {
  const { user_id } = props;
  const [info, setInfo] = useState({});
  const [snip, setSnip] = useState();
  const [load, setLoad] = useState(false);
  const { setShowModal } = useContext(ModalContext);

  console.log(user_id, "modal");
  const flag = useRef(true);

  async function HandleModal(){
    try {
      const res = await axios.post("https://vast-oasis-67124.herokuapp.com/dashboard/modal", {
        user_id: user_id,
      });

      if (res) {
        if (flag.current) {
          setSnip(res.data.snip)
          setInfo(res.data.info);
          flag.current = false;
          setLoad(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    
   HandleModal()
  });

  console.log(info, "info", snip, 'snip');
  // console.log(info.user_id.username, 'info')
  return (

    <div className="bg-black z-50 bg-opacity-50 inset-0 flex justify-center items-center fixed ease-in-out transition-all duration-500">
      <div className="p-6 bg-primary_bg  w-5/6 ">
        <div className="flex justify-end -mt-10 -mr-8 ">
          <div className="cursor-pointer w-10 h-10 flex align-middle justify-center rounded-full bg-gray-300">
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* modal info */}
        <div className="md:flex">
          <div className="px-4 py-2 md:w-1/3">
            <div className="flex flex-col justify-center align-middle">
              <div className="flex justify-center">
                <Image
                  src={rhythm}
                  alt="edit"
                  height={180}
                  width={180}
                  blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                />
              </div>
              {load == true
                ? <div className="">
                  <p className=" text-center mt-3 py-0 mb-0  text-primary_text text-2xl font-semibold font-Ubuntu ">
                    {info.fullname}
                  </p>
                  <p className=" text-center mb-0 tracking-wider text-secondary_text text-lg font-sans">
                    {info.location}
                  </p>
                </div>
                : <div className="pt-2 space-y-2 flex flex-col items-center justify-center animate-pulse">
                  <div className="bg-section_bg rounded h-4 w-2/3"></div>
                  <div className="bg-section_bg rounded h-4 w-1/3"></div>
                </div>
              }
            </div>
          </div>
          <div className="md:w-2/3 lg:pr-20">
            <p className="text-primary_text text-4xl  font-extrabold font-Ubuntu">
              About Me,
            </p>
            {load == true
              ? <div className="">
                <p className="text-secondary_text text-lg mb-0 font-bold font-Ubuntu">
                  @{info.user_id.username}
                </p>
                <p className=" text-secondary_text mb-0 text-md font-bold font-Ubuntu">
                  {info.occupation}
                </p>
                <p className="text-secondary_text text-md font-bold font-Ubuntu">
                  {info.user_id.email}
                </p>

                <p className="text-secondary_text text-lg font-bold font-Ubuntu">
                  {info.bio}
                </p>
              </div>
              : <div className="animate-pulse space-y-4">
                <div className="bg-section_bg rounded h-4 w-1/3"></div>
                <div className="bg-section_bg rounded h-4 w-1/3"></div>
                <div className="bg-section_bg rounded h-4 w-1/3"></div>
                <div className="bg-section_bg rounded h-16 max-w-full"></div>
              </div>
            }
          </div>
        </div>

        <div className="max-h-96 overflow-auto bg-gray-200">
          <div className={`${sty.card}`}>
            {snip ? snip.map((card, index) => (
              <Cardlayout
                {...card}
                key={index}
              />
            )) : <><SkeletonCard /><SkeletonCard /></>}

          </div>
        </div>
      </div>
    </div>
  );
}

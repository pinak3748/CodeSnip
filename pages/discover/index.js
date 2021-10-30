import Head from "next/head";
import Skeleton from "react-loading-skeleton";
import dynamic from "next/dynamic";
import sty from "../../styles/discover.module.css";
import Image from "next/image";
import SkeletonCard from "../../Components/SkeletonCard";
const Cardlayout = dynamic(() => import("../../Components/Card"), {
  loading: () => <SkeletonCard />,
  ssr: false,
});
import Footer from "../../Components/Footer";
import { checkLogin } from "../../utils/authHOC";
import axios from "axios";
import CustomAlert from "../../Components/CustomAlert";
import Modal from "../../Components/Modal";
import { useContext, useState, useEffect } from "react";
import { ModalContext } from "../../utils/contexts";
import up from "../../public/up-arrow.svg";

export const getServerSideProps = checkLogin(async (ctx, loginRes) => {
  // console.log(ctx.req)
  if (loginRes == "true") {
    const token = ctx.req.cookies["token"];
    const res = await axios.get("https://vast-oasis-67124.herokuapp.com/login_discover", {
      headers: { Authorization: `${token}` },
    });
    const { data } = res;
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { cards: data, token },
    };
  } else {
    const res = await axios.get("https://vast-oasis-67124.herokuapp.com/discover");
    const { data } = res;
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { cards: data },
    };
  }
});

const Index = (props) => {
  const { cards, token } = props;
  const [isVisible, setIsVisible] = useState(false);
  const { showModal } = useContext(ModalContext);
  const [id, setId] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <Head>
        <title>Discover</title>
      </Head>
      <div className={`min-h-screen ${sty.card}`}>
        {cards.map((card) => (
          <Cardlayout
            {...card}
            key={card._id}
            id={id}
            setId={setId}
            profile_api="https://source.unsplash.com/500x500/?face"
            token={token}
          />
        ))}
      </div>
      {showModal && <Modal user_id={id} />}
      <div className="fixed bg-pink bottom-3 right-3  cursor-pointer">
        {isVisible && (
          <div
            onClick={scrollToTop}
            className="fixed p-2 rounded-lg bg-gray-200 bottom-3 right-3 lg:bottom-5 lg:right-5 cursor-pointer"
          >
            <Image 
            src={up}
            alt="edit"
            height={20}
            width={25}
            blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
            />
          </div>
        )}
      </div>
      <CustomAlert />
      <Footer />
    </>
  );
};

export default Index;

import "../styles/globals.css";
import "../styles/nprogress.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import Nav from "../Components/Nav";
import NProgress from "nprogress";
import { AuthContext, AlertContext, ModalContext } from "../utils/contexts";
import { useEffect, useState } from "react";
NProgress.configure({ showSpinner: false });

export default function MyApp({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
  });
  const [loginState, setLoginState] = useState("false");

{/*this useEffect check that user is already loogged in or not*/}
  useEffect(() => {
    const data = localStorage.getItem("loginState");
    if (data) {
      setLoginState(data);
    }
  }, []);

  {/*if the user opens the site for the first time it sets default value of login state to false in local storage*/}
  useEffect(() => {
    localStorage.setItem("loginState", loginState);
  }, [loginState]);

  {/*hides the scrollbar when modal is open*/}
  useEffect(() => {
    if (showModal) {
      document.body.style = "overflow: hidden;";
    } else {
      document.body.style = "overflow: auto;";
    }
  }, [showModal]);

  const router = useRouter();
  const showNav = router.pathname === "/Auth" ? false : true;

  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <title>CodeSnip</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthContext.Provider value={{ loginState, setLoginState }}>
        {showNav && <Nav />}
        <AlertContext.Provider value={{ alert, setAlert }}>
          <ModalContext.Provider value={{ showModal, setShowModal }}>
            <Component {...pageProps} />
          </ModalContext.Provider>
        </AlertContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

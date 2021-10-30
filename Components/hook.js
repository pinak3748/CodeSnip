import Link from "next/link";
import { useContext } from "react";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/client";
import axios from "axios";
import { AuthContext } from "../utils/contexts";
import router from "next/router";
import cookie from 'js-cookie'

export default function Hook(props) {

  const {loginState, setLoginState} = useContext(AuthContext);
  const logout = async () => {
    try {
      const res = await axios.get('https://vast-oasis-67124.herokuapp.com/logout', { withCredentials: true })
      if (res) {
        // console.log(res.data)
        cookie.remove("token");
        setLoginState('false')
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const [session, loading] = useSession();
  if (session || (loginState == 'true')) {
    return (
      <>
        <Link href="/dashboard" passHref>
        <button
          className="bg-ghost text-primary_bg font-Ubuntu  border border-ghost lg:mr-4 font-bold py-2 px-4 rounded-full"
        >
          Dashboard
        </button>
        </Link>
        <button
          // onClick={() => signOut()}
          onClick={logout}
          className="bg-ghost text-primary_bg font-Ubuntu  border border-ghost lg:mr-4 font-bold py-2 px-4 rounded-full"
        >
          Logout
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className=" border bg-ghost border-ghost lg:mr-4 font-bold py-2 px-4 rounded-full"
      >
        <Link href="/Auth" passHref>

          <a className=" text-primary_bg no-underline hover:text-primary_bg font-Ubuntu">Get Started </a>
        </Link>
      </button>
    </>
  );
}

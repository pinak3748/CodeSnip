import { useContext, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/client"
import router, { useRouter } from 'next/router';
import axios from "axios";
import Image from 'next/image'
import { AuthContext, AlertContext } from "../utils/contexts";
import CustomAlert from '../Components/CustomAlert'
import cookie from 'js-cookie'
import Head from "next/head"

export default function Auth() {
    //status==false===>register
  //status==true===>login
  
  const [status, setStatus] = useState(false);
  const { setAlert } = useContext(AlertContext)
  const { setLoginState } = useContext(AuthContext);

  // const History = useHistory();
  const [user, setUser] = useState({
    email: "", password: "", username: "", cpassword: ""
  })
  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }
  const postLoginData = async (e) => {
    e.preventDefault();

    const { username, password } = user;
    try {
      const res = await axios.post(
        "https://vast-oasis-67124.herokuapp.com/login",
        { username, password },
        {
          withCredentials: true
        })
      if (res) {
        // console.log(res.status)
        const {token} = res.data
        cookie.set("token", token, {expires: 7})
        setLoginState('true')
        setAlert({
          open: true,
          msg: 'Login Successful',
          type: 'success',
        })
        router.push("/");
        // history.goBack() for going back to previous page after logging in
      }
    } catch (error) {
      console.log(error)
      const { status, data } = error.response
      if (status) {
        setAlert({
          open: true,
          msg: data.msg,
          type: 'error',
        })
      } else {
        console.log(error)
      }
    }
  }
  const postRegisterData = async (e) => {
    e.preventDefault();

    const { username, email, password, cpassword } = user;
    try {
      const res = await axios.post(
        "https://vast-oasis-67124.herokuapp.com/register",
        { username, email, password, cpassword },
      )
      if (res) {
        setStatus(true)
        setAlert({
          open: true,
          msg: res.data.msg,
          type: 'success',
        })
        
        router.push("/Auth");
      }
    } catch (error) {
      console.log(error)

      const { status, data } = error.response
      if (status) {
        setAlert({
          open: true,
          msg: data.msg,
          type: 'error',
        })
        // console.log("Registration Failed");
      } else {
        console.log(error)
      }
    }
  }



  return (
    <>
    <Head>
        <title>Auth</title>      
      </Head>
      <section className="flex flex-col bg-secondary_bg md:flex-row h-screen items-center">
        {/* <div className="bg-secondary_bg hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
         
          <div className=" inset-0 w-full h-full object-cover">
          <Image
                    src="/login.jpg"
                    alt="Picture of the author"
                    layout="responsive"
                    height={200}
                    width={300}
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
          </div>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75 w-full md:w-1/2 xl:w-2/3"></div>

        
        </div> */}

        <div
          className={`${status ? "" : "hidden"
            } bg-secondary_bg w-full md:max-w-md  lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 pt-5 lg:px-16 xl:px-12
      flex items-center justify-center`}
        >
          <div className="w-full h-100 ">
            <h1 className="text-xl md:text-2xl text-ghost font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            <form className="mt-6" action="#">
              <div>
                <label className="block text-secondary_text">Username</label>
                <input
                  type="username"
                  name="username"
                  value={user.username}
                  onChange={handleInputs}
                  placeholder="Username"
                  className="w-full px-4 py-3 rounded-lg text-primary_text bg-section_bg mt-2 focus:ring focus:ring-section_bg focus:outline-none"
                  autoFocus
                  autoComplete
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-secondary_text">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={handleInputs}
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg text-primary_text bg-section_bg mt-2 focus:ring focus:ring-section_bg focus:outline-none"
                  required
                />
              </div>

              <div className="text-right  mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-secondary_text hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                id="login"
                name="login"
                onClick={postLoginData}
              >
                Log In
              </button>
            </form>

            {/* <hr className="my-6 border-gray-300 w-full" /> */}
            <div className="flex items-center my-6">
              <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-600 italic">Or</div>
              <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
            </div>

            {/* <div className="flex items-center justify-center space-x-2">
              <button
                className="w-1/3 items-center disabled:opacity-50 justify-center flex rounded-lg border border-gray-300 px-4 py-2.5 bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold"
                onClick={() => signIn('google')}  disabled>
                <div className="w-6 h-6 my-auto mr-1.5">
                <Image
                    src="/google.svg"
                    alt="Picture of the author"
                    height={30}
                    width={30}
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                </div>
                Googlesd
              </button>
              <button
                className="w-1/3 items-center disabled:opacity-50 justify-center flex rounded-lg border border-gray-300 px-4 py-2.5 bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold"
                onClick={() => signIn('github')}  disabled>
                <div className="w-6 h-6 my-auto mr-1.5">
                <Image
                    src="/github.svg"
                    alt="Picture of the author"
                    height={30}
                    width={30}
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                </div>
                GitHub
              </button>
            </div> */}

            <p className="mt-8 text-secondary_text text-center">
              Need an account?
              <a
                onClick={() => setStatus(false)}
                href="#"
                className="text-blue-500 ml-2 hover:text-blue-700 font-semibold"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>

        <div
          className={`${!status ? "" : "hidden"
            } bg-secondary_bg w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 pt-3 lg:px-16 xl:px-12
      flex items-center justify-center`}
        >
          <div className="w-full h-100 ">
            <h1 className="text-xl md:text-2xl font-bold text-ghost leading-tight mt-12">
              Create new Account
            </h1>

            <form className="mt-6" action="#">
              <div>
                <label className="block text-secondary_text">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  value={user.username}
                  onChange={handleInputs}
                  name="username"
                  id="username"
                  className="w-full px-4 py-2.5 rounded-lg text-primary_text bg-section_bg mt-2 focus:ring focus:ring-section_bg focus:outline-none"
                  autoFocus
                  autoComplete
                  required
                />
              </div>

              <div className="mt-2.5">
                <label className="block text-secondary_text">Email Address</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={handleInputs}
                  name="email"
                  id="email"
                  className="w-full px-4 py-2.5 rounded-lg text-primary_text bg-section_bg mt-2 focus:ring focus:ring-section_bg focus:outline-none"
                  autoFocus
                  autoComplete
                  required
                />
              </div>

              <div className="mt-2.5">
                <label className="block text-secondary_text">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleInputs}
                  name="password"
                  id="password"
                  minLength="6"
                  className="w-full px-4 py-2.5 rounded-lg text-primary_text bg-section_bg mt-2 focus:ring focus:ring-section_bg focus:outline-none"
                  required
                />
              </div>

              <div className="mt-2.5">
                <label className="block text-secondary_text">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={user.cpassword}
                  onChange={handleInputs}
                  name="cpassword"
                  id="cpassword"
                  minLength="6"
                  className="w-full px-4 py-2.5 rounded-lg text-primary_text bg-section_bg mt-2 focus:ring focus:ring-section_bg focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
                id="signup"
                name="signup"
                onClick={postRegisterData}
              >
                Register
              </button>
            </form>

            {/* <hr className="my-6 border-gray-300 w-full" /> */}
            <div className="flex items-center my-6">
              <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-600 italic">Or</div>
              <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
            </div>

            {/* <div className="flex items-center justify-center space-x-2">
              <button className="w-1/3 items-center justify-center flex rounded-lg border border-gray-300 px-4 py-2.5 bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold" disabled>
                <div className="w-6 h-6 my-auto mr-1.5">
                <Image
                    src="/google.svg"
                    alt="Picture of the author"
                    height={30}
                    width={30}
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                </div>
                Google
              </button>
              <button className="w-1/3 items-center  justify-center flex rounded-lg border border-gray-300 px-4 py-2.5 bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold" disabled>
                <div className="w-6 h-6 my-auto mr-1.5">
                <Image
                    src="/github.svg"
                    alt="Picture of the author"
                    height={30}
                    width={30}
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                  />
                </div>
                GitHub
              </button>

            </div> */}

            <p className="mt-8 text-secondary_text text-center">
              Already have an account?
              <a
                href="#"
                onClick={() => setStatus(true)}
                className="text-blue-500 ml-2 hover:text-blue-700 font-semibold"
              >
                Login in
              </a>
            </p>
          </div>
        </div>
      </section>
      <CustomAlert />
    </>
  );
}

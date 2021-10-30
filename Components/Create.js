import sty from "../styles/dashboard.module.css";
import Select from "react-select";
import option from "../utils/languages";
import dynamic from "next/dynamic";
import React, { useState , useRef } from "react";
import axios from "axios";
import { useContext } from "react";
import { AlertContext } from "../utils/contexts";
import "codemirror/lib/codemirror.css";
const CodeMirror = dynamic(
  () => {
    import("codemirror/mode/javascript/javascript");
    import("codemirror/theme/base16-dark.css");
    import("codemirror/addon/hint/show-hint");
    import("codemirror/addon/hint/javascript-hint");
    import("codemirror/addon/hint/show-hint.css");
    import("codemirror/addon/hint/anyword-hint");
    import("codemirror/addon/display/placeholder");
    import("codemirror/addon/edit/closebrackets");
    import("codemirror/addon/edit/closetag");
    import("codemirror/addon/fold/foldcode");
    import("codemirror/addon/fold/comment-fold");
    return import("react-codemirror");
  },
  { ssr: false }
);

const Create = ({ token }) => {
 console.log(token,"create")
  const [code, setCode] = useState(null);
  const { setAlert } = useContext(AlertContext);
  const [languages, setlanguages] = useState([]);
  const [title, setTitle] = useState(null);
  const [des, setDes] = useState(null);
  const selectInputRef = useRef();

  const options = {
    lineNumbers: false,
    mode: "javascript",
    lineWrapping: true,
    smartIndent: true,
    autoCloseTags: true,
    theme: "base16-dark",
    matchBrackets: true,
    autoCloseBrackets: true,
    extraKeys: {
      "Ctrl-Space": "autocomplete",
    },
  };

  const handleChange = (e) => {
    setlanguages(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  const create_post = async () => {
    const data = {
      title: title,
      des: des,
      languages: languages,
      code: code,
    };
    try {
      const res = await axios.post(
        "https://vast-oasis-67124.herokuapp.com/mysnippet/createsnippet",
        data,
        { headers: { Authorization: `${token}` } }
      );
      
      if (res) {
        setAlert({
          open: true,
          msg: res.data.msg,
          type: "success",
        });
       

        setCode(null)
        
        setlanguages([])
        console.log(languages)
        setTitle("")
        setDes("")

      }
    } catch (error) {
      
      setAlert({
        open: true,
        msg: error,
        type: "error",
      });
    }
  };

  // console.log(title,des,code)
  return (
    <div className={`bg-secondary_bg  md:ml-20  ${sty.create}`}>
      <div className="sm:px-16 xs:p-8  w-full ">
        <div className="xs:px-3 sm:px-10 py-3 h-18 rounded-t-lg rounded-r-lg bg-section_secondary overflow-hidden flex justify-center">
          <p
            className={`text-ghost mt-3  text-center tracking-wider text-2xl ${sty.create_heading}`}
          >
            Create New Snippet
          </p>
        </div>
        <div className="xs:px-10 lg:px-40 py-10 bg-thr_bg">
          <div className="">
            <label className="block text-secondary_text">Title</label>
            <input
              type="text"
              placeholder="Boiler Plate for Express/Node.js Project"
              name="username"
              id="username"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg text-ghost bg-section_bg mt-2 focus:ring focus:ring-section_bg focus:outline-none"
              autoFocus
            />
          </div>
          <div className="mt-3">
            <label className="block text-secondary_text ">Description</label>
            <textarea
              id="username"
              value={des}
              onChange={(e) => setDes(e.target.value)}
              placeholder="Write a short description of your Snippet!"
              className={`w-full px-4 py-2.5 min-h-38 max-h-40 rounded-lg text-ghost bg-section_bg mt-2 focus:ring focus:ring-section_bg focus:outline-none ${sty.scroll} `}
              autoFocus
            />
          </div>
          <div className="mt-2">
            <label className="block capitalize text-secondary_text ">Languages</label>
            <Select
              isMulti
              instanceId="imput"
              placeholder="Please select Languages..."
              isClearable
              ref={selectInputRef}
              isSearchable
              onChange={handleChange}
              name="color"
              maxMenuHeight={200}
              options={option}
              className={`py-2.5 text-ghost z-30 ${sty.input_option}`}
              classNamePrefix="input"
              theme={(theme) => ({
                ...theme,

                colors: {
                  ...theme.colors,
                  primary: "#404040",
                  primary75: "red",
                  neutral30: "#404040",
                  neutral0: "#404040",
                  neutral20: "#f8f8ff",
                  neutral80: "#f8f8ff",
                  neutral70: "yellow",
                  neutral10: "#282828",
                  primary25: "#282828",
                  neutral60: "#f8f8ff",
                  primary50: "#282828",
                },
              })}
            />
          </div>
          <div className="mt-3">
            <label className="block pb-2 text-secondary_text ">Code</label>
            {CodeMirror && (
              <CodeMirror
                onChange={(code) => setCode(code)}
                options={options}
                value={code}
                autoScroll={true}
                placeholder={"ok"}
                className={``}
              />
            )}
             <label className="pt-1 flex justify-end text-secondary_text ">* Please write your code here</label>
          </div>
          <div className="flex flo justify-center">
            <button
              type="submit"
              className="bg-indigo-500  hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-2 mt-6"
              id="login"
              name="login"
              onClick={create_post}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;


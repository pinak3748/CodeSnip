import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Grow from "@mui/material/Grow";
import MuiAlert from "@mui/material/Alert";
import { useState, useContext } from "react";
import { AlertContext } from "../utils/contexts";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition(props) {
  return <Grow {...props} />;
}

export default function TransitionsSnackbar() {
  const { alert, setAlert } = useContext(AlertContext);
var text_color = ""
var bg_color = "" 
  const handleClose = () => {
    setAlert({
      ...alert,
      open: false,
    });
  };

 

 

if(alert.type == "success"){
  text_color = "text-green-400"
  bg_color = "bg-green-500"
}
else if(alert.type == "error"){
  text_color = "text-red-400"
  bg_color = "bg-red-500"
  
}
else if(alert.type == "info"){
  text_color = "text-blue-400"
  bg_color = "bg-blue-500"

}
else if(alert.type == "warning"){
  text_color = "text-yellow-400"
  bg_color = "bg-yellow-500"

}

  return (
    <Snackbar
      open={alert.open}
      onClose={handleClose}
      TransitionComponent={Slide}
      autoHideDuration={2000}
      // message="I love snacks"
      key={Slide.name}
    >
      {/* <Alert severity={alert.type}>{alert.msg}</Alert> */}

      <div className="flex w-full max-w-sm mx-auto overflow-hidden  rounded-lg shadow-md bg-gray-800">
        <div className={`flex items-center justify-center w-12 ${bg_color}`}>
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
            </svg>
        </div>
        
        <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
                <span className={`font-semibold  ${text_color}`}>{alert.type}</span>
                <p className="text-sm  text-gray-200">{alert.msg}</p>
            </div>
        </div>
    </div>
     
     
    </Snackbar>
  );
  //   return (
  //     <div>

  //     </div>
  //   );
}

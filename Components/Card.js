import styles from "../styles/card.module.css";
import React, { useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Console from "./Console";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { AuthContext, AlertContext, ModalContext } from "../utils/contexts";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#E4E4E5",
    },
    liked: {
      main: "#d32f2f",
    },
    options: {
      main: "#E4E4E5",
    },
  },
});

export default function Card({ ...props }) {

  const { setShowModal } = useContext(ModalContext)
  const { setAlert } = useContext(AlertContext)
  const { loginState } = useContext(AuthContext)
  const snip_id = props._id
  const [color, setColor] = useState((props.liked == true) ? "liked" : "neutral")
  const [likes, setLikes] = useState(props.likes)
  const flag = useRef(true)

  const updateColor = () => {
    if (loginState == 'true') {
      color == "neutral" ? (props.liked) ? setLikes(props.likes) : (setLikes(props.likes + 1)) : (props.liked) ? (setLikes(props.likes - 1)) : (setLikes(props.likes))
      color == "neutral" ? setColor("liked") : setColor("neutral")
    } else {
      setAlert({
        open: true,
        msg: 'Login to like a snippet',
        type: 'info',
      })
    }
  }

  useEffect( () => {

    async function HandleLike(){
      if (flag.current) {
        flag.current = false;
        return;
      }
      if (color == "liked") {
        console.log(likes)
        const res = await axios.put("https://vast-oasis-67124.herokuapp.com/likeSnippet", { snip_id, likes }, { headers: { 'Authorization': `${props.token}` } })
        if (res) {
          setAlert({
            open: true,
            msg: 'Snippet Liked',
            type: 'success',
          })
        }
  
      } else {
        console.log(likes)
        const del = await axios.put("https://vast-oasis-67124.herokuapp.com/unlikeSnippet", { snip_id, likes }, { headers: { 'Authorization': `${props.token}` } })
        if (del) {
          setAlert({
            open: true,
            msg: 'Snippet Disliked',
            type: 'success',
          })
        }
      }
    }
   HandleLike();
  }, [likes,color,props.token,setAlert,snip_id])

  function openModal(){
    props.setId(props.user_id)
    setShowModal(true)
  }

  function copyCodeToClipboard() {
    document.getElementById("codeblock");
    document.execCommand("copy");
  }
  return (
    <>
      <div className={styles.card_hero}>
        <div className={`bg-primary_bg ${styles.card}`}>
          <div className={styles.title}>
            <div className="profile">
              <Stack direction="row" spacing={1} className="avatar">
                <Avatar
                  // src={props.profile_api}
                  src={'https://joeschmoe.io/api/v1/' + props.username}
                  // alt={proimg}
                  // src={profilePic..3}
                  className="pro_img"
                  onClick={openModal }
                />
                <div className="pro_info">
                  <p className={styles.title_head}  onClick={openModal}>{props.title}</p>
                  <p className={styles.title_author}>By {props.username}</p>
                </div>

              </Stack>
            </div>
          </div>

          <div className={styles.fav}>
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <ThemeProvider theme={theme}>
                <Button
                  className="like"
                  // variant="outlined"
                  color={color}
                  size="small"
                  onClick={updateColor}
                  startIcon={<FavoriteIcon />}
                >
                  {likes}
                </Button>
              </ThemeProvider>
            </Stack>
          </div>

          <div className={styles.lang}>
            <div className={styles.lan_img}>
              <Stack direction="row" spacing={2}>
                {props.languages.map(lang => (
                  <Image
                    src={require(`../public/lang_icons/${lang}.svg`)}
                    alt="Picture of the author"
                    // placeholder="blur"
                    width={25}
                    height={25}
                    key={lang}
                  />
                ))}
              </Stack>
            </div>
          </div>

          <div className={styles.options}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <ThemeProvider theme={theme}>
                <ShareIcon color="options" />
                <CopyToClipboard text={props.code}>
                  <button className={styles.button} onClick={()=>{setAlert({open: true, msg: '📋Copied', type: 'success'})}}>
                    <ContentCopyIcon color="options" />
                  </button>
                </CopyToClipboard>
              </ThemeProvider>
            </Stack>
          </div>

          <div className={styles.des}>{props.des}</div>
        </div>
        <div className={styles.codeblock}>
          <Console
            username={props.username}
            lan={props.languages[0]}
            code={props.code}
          />
        </div>
      </div>
    </>
  );
}

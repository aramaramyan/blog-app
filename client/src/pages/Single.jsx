import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import { getUsrNameFirstLetters } from "../helpers/getUsrNameFirstLetters";
import { makeStyles } from "@mui/styles";
import Menu from "../components/Menu";
import { Avatar, Grid, Typography } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import img from "./../img/img1.jpg.";

const useStyles = makeStyles({
  postImage: {
    margin: "30px 0",
    width: "100%",
    height: 300,
    overflow: "hidden",
    // backgroundImage: img,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    backgroundAttachment: "fixed",
    "& img": {
      objectFit: "contain",
    },
  },
  postOwnerWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    marginBottom: 30,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  },
  postDescription: {
    textAlign: "justify",
  },
  postDate: {
    fontSize: 12,
  },
  icon: {
    cursor: "pointer",
  },
});

const Single = () => {
  const classes = useStyles({});
  const [post, setPost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  console.log(`:::currentUser:::`, currentUser);
  console.log(`:::post:::`, post);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(`:::err:::`, err);
      }
    };

    fetchData();
  }, [postId]);

  return (
    <Grid container spacing={6} className={classes.singlePageWrapper}>
      <Grid item xs={8}>
        <div className={classes.postImage}>
          <img src={post.img} alt="background" />
        </div>
        <div className={classes.postOwnerWrapper}>
          {post.userImg ? (
            <Avatar alt={post.name} src={post.userImg} />
          ) : (
            <Avatar>{getUsrNameFirstLetters(post.name)}</Avatar>
          )}
          <div className={classes.nameWrapper}>
            <Typography variant="h6">Aram Aramyan</Typography>
            <Typography variant="caption" className={classes.postDate}>
              Posted {moment(post.date).fromNow()}
            </Typography>
          </div>
          {currentUser.email === post.userEmail && (
            <div className={classes.actions}>
              <EditRoundedIcon fontSize="small" className={classes.icon} />
              <DeleteIcon fontSize="small" className={classes.icon} />
            </div>
          )}
        </div>
        <div className={classes.postContent}>
          <Typography variant="h3" className={classes.postTitle}>
            {post.title}
          </Typography>
          <Typography paragraph className={classes.postDescription}>
            {post.desc}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={4}>
        <Menu />
      </Grid>
    </Grid>
  );
};

export default Single;

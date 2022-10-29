import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import { getUsrNameFirstLetters } from "../helpers/getUsrNameFirstLetters";
import getText from "../helpers/getText";
import { makeStyles } from "@mui/styles";
import Menu from "../components/Menu";
import { Avatar, Grid, Typography } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles({
  singlePageWrapper: {
    width: "100%",
    paddingTop: "80px",
  },
  postImage: {
    margin: "30px 0",
    width: "100%",
    height: 300,
    overflow: "hidden",
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
  link: {
    textDecoration: "none",
    color: "black",
  },
});

const Single = () => {
  const classes = useStyles({});
  const [post, setPost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

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

  const fullNameLetters = useMemo(() => getUsrNameFirstLetters(post.userName), [post]);

  const handleDeletePost = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(`:::err:::`, err);
    }
  };

  return (
    <Grid container spacing={6} className={classes.singlePageWrapper}>
      <Grid item xs={8}>
        {post.img && (
          <div className={classes.postImage}>
            <img src={`../uploads/${post.img}`} alt="background" />
          </div>
        )}
        <div className={classes.postOwnerWrapper}>
          {post.userImg ? (
            <Avatar alt={post.userName} src={post.userImg} />
          ) : (
            <Avatar>{fullNameLetters}</Avatar>
          )}
          <div className={classes.nameWrapper}>
            <Typography variant="h6">{post.userName}</Typography>
            <Typography variant="caption" className={classes.postDate}>
              Posted {moment(post.date).fromNow()}
            </Typography>
          </div>
          {currentUser.email === post.userEmail && (
            <div className={classes.actions}>
              <Link to={`/write?edit=${postId}`} state={post} className={classes.link}>
                <EditRoundedIcon fontSize="small" className={classes.icon} />
              </Link>
              <DeleteIcon fontSize="small" className={classes.icon} onClick={handleDeletePost} />
            </div>
          )}
        </div>
        <div className={classes.postContent}>
          <Typography variant="h3" className={classes.postTitle}>
            {post.title}
          </Typography>
          <Typography paragraph className={classes.postDescription}>
            {getText(post.desc)}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={4}>
        <Menu cat={post.category} />
      </Grid>
    </Grid>
  );
};

export default Single;

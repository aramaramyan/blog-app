import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import PostCard from "../components/PostCard";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  homeWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingTop: "40px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  postList: {
    width: "90%",
    height: "100%",
  },
});

const Home = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const category = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${category}`);
        setPosts(res.data);
      } catch (err) {
        console.log(`:::err:::`, err);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className={classes.homeWrapper}>
      <div className={classes.postList}>
        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.desc}
              img={post.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

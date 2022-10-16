import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import MenuPostCard from "./MenuPostCard";
import axios from "axios";

const useStyles = makeStyles({
  menuWrapper: {
    margin: "30px 0",
  },
});

const Menu = ({ cat }) => {
  const classes = useStyles({
    menuTitle: {
      marginBottom: 30,
    },
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(`:::err:::`, err);
      }
    };

    fetchData();
  }, [cat]);

  return (
    <div className={classes.menuWrapper}>
      <Typography variant="h5" className={classes.menuTitle} gutterBottom>
        Other posts you may like
      </Typography>
      <div className={classes.menuList}>
        {posts.map((post) => (
          <MenuPostCard key={post.id} id={post.id} title={post.title} img={post.img} />
        ))}
      </div>
    </div>
  );
};

export default Menu;

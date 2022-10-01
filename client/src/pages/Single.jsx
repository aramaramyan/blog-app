import React from "react";
import { makeStyles } from "@mui/styles";
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

  return (
    <Grid container spacing={2} className={classes.singlePageWrapper}>
      <Grid item xs={8}>
        <div className={classes.postImage}>
          <img src={img} alt="Post Image" />
        </div>
        <div className={classes.postOwnerWrapper}>
          <Avatar>AA</Avatar>
          <div className={classes.nameWrapper}>
            <Typography variant="h6">Aram Aramyan</Typography>
            <Typography variant="caption" className={classes.postDate}>
              Posted 2 days ago
            </Typography>
          </div>
          <div className={classes.actions}>
            <EditRoundedIcon fontSize="small" className={classes.icon} />
            <DeleteIcon fontSize="small" className={classes.icon} />
          </div>
        </div>
        <div className={classes.postContent}>
          <Typography variant="h3" className={classes.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas
          </Typography>
          <Typography paragraph className={classes.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas
            vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
            quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
            molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
            sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
            Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum.
          </Typography>
          <p className={classes.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas
            vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
            quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
            molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
            sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
            Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum.
          </p>
          <p className={classes.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas
            vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
            quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
            molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
            sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
            Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum.
          </p>
        </div>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default Single;

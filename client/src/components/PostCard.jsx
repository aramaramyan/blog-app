import React from "react";
import { Link } from "react-router-dom";
import getText from "../helpers/getText";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "row",
    gap: 100,
    width: "100%",
    marginBottom: 50,
    "&:nth-child(2n+1)": {
      flexDirection: "row-reverse",
    },
  },
  cardImage: {
    flex: 1,
    width: "300px",
    height: "300px",
  },
  cardContent: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

const PostCard = ({ id, title, description, img }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {img && (
        <CardMedia
          component="img"
          height="140"
          image={`../uploads/${img}`}
          alt="image"
          className={classes.cardImage}
        />
      )}
      <div className={classes.cardContent}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link to={`/post/${id}`}>{title}</Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {getText(description)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link to={`/post/${id}`}>Read More</Link>
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default PostCard;

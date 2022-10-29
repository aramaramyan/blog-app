import React from "react";
import { Link } from "react-router-dom";
import getText from "../helpers/getText";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { textCutter } from "../helpers/textCutter";

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
    overflow: "hidden",
    borderRadius: 4,
  },
  cardContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "300px",
    textAlign: "justify",
  },
});

const PostCard = ({ id, title, description, img }) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      sx={{ backgroundColor: "transparent", boxShadow: "none", overflow: "visible" }}
    >
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
            {textCutter(getText(description))}
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

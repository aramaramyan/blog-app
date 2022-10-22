import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    marginBottom: 30,
  },
});

const MenuPostCard = ({ id, title, img }) => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardMedia component="img" height="140" image={`../uploads/${img}`} alt="Card Image" />
      <CardContent className={classes.postTitle}>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/post/${id}`}>Read More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default MenuPostCard;

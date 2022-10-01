import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const MenuPostCard = ({ id, title, img }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={img} alt="Card Image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
};

export default MenuPostCard;

import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import PublishRoundedIcon from "@mui/icons-material/PublishRounded";
import SaveIcon from "@mui/icons-material/Save";
import HistoryIcon from "@mui/icons-material/History";

const useStyles = makeStyles({
  writeWrapper: {
    margin: "30px 0",
    height: "100%",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "flex-start",
    padding: "16px 10px",
    border: "1px solid #1976d2",
    borderRadius: 6,
  },
  editorContainer: {
    height: 500,
    borderRadius: 8,
    marginTop: 30,
    border: "1px solid #1976d2",
  },
  editor: {
    height: "100%",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "100%",
  },
});

const Write = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");

  const handleTitle = (evt) => {
    setTitle(evt.target.value);
  };

  const handleFile = (evt) => {
    setFile(evt.target.files[0]);
  };

  const handleCategory = (evt) => {
    setCat(evt.target.value);
  };

  const handleSubmit = async () => {};

  return (
    <Grid container spacing={6} className={classes.writeWrapper}>
      <Grid item xs={8} style={{ margin: "30px 0" }}>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          size="small"
          fullWidth
          onChange={handleTitle}
        />
        <div className={classes.editorContainer}>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className={classes.editor}
            style={{ border: "none" }}
          />
        </div>
      </Grid>
      <Grid
        item
        xs={4}
        className={classes.menu}
        style={{ display: "flex", flexDirection: "column", gap: "20px", margin: "30px 0" }}
      >
        <div className={classes.item}>
          <Typography variant="h4">Publish</Typography>
          <Typography variant="overline" display="block">
            STATUS: <Typography variant="overline">Daft</Typography>
          </Typography>
          <Typography variant="overline" display="block">
            VISIBILITY: <Typography variant="overline">Public</Typography>
          </Typography>
          <Button component="label" size="small">
            Upload Image
            <input hidden accept="image/*" multiple type="file" onChange={handleFile} />
          </Button>
          <div className={classes.buttons}>
            <Button size="small" fullWidth variant="outlined" startIcon={<HistoryIcon />}>
              Save as draft
            </Button>
            <Button
              size="small"
              fullWidth
              variant="contained"
              endIcon={<PublishRoundedIcon />}
              onClick={handleSubmit}
            >
              Publish
            </Button>
            <Button size="small" fullWidth variant="contained" endIcon={<SaveIcon />}>
              Update
            </Button>
          </div>
        </div>
        <div className={classes.item}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              <Typography variant="h4">Category</Typography>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="art"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="art"
                control={<Radio />}
                label="Art"
                onChange={handleCategory}
              />
              <FormControlLabel
                value="science"
                control={<Radio />}
                label="Science"
                onChange={handleCategory}
              />
              <FormControlLabel
                value="technology"
                control={<Radio />}
                label="Technology"
                onChange={handleCategory}
              />
              <FormControlLabel
                value="cinema"
                control={<Radio />}
                label="Cinema"
                onChange={handleCategory}
              />
              <FormControlLabel
                value="design"
                control={<Radio />}
                label="Design"
                onChange={handleCategory}
              />
              <FormControlLabel
                value="food"
                control={<Radio />}
                label="Food"
                onChange={handleCategory}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Grid>
    </Grid>
  );
};

export default Write;

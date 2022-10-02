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

  return (
    <Grid container spacing={6} className={classes.writeWrapper}>
      <Grid item xs={8} style={{ margin: "30px 0" }}>
        <TextField id="outlined-basic" label="Title" variant="outlined" size="small" fullWidth />
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
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <div className={classes.buttons}>
            <Button size="small" fullWidth variant="outlined" startIcon={<HistoryIcon />}>
              Save as draft
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
              <FormControlLabel value="art" control={<Radio />} label="Art" />
              <FormControlLabel value="science" control={<Radio />} label="Science" />
              <FormControlLabel value="technology" control={<Radio />} label="Technology" />
              <FormControlLabel value="cinema" control={<Radio />} label="Cinema" />
              <FormControlLabel value="design" control={<Radio />} label="Design" />
              <FormControlLabel value="food" control={<Radio />} label="Food" />
            </RadioGroup>
          </FormControl>
        </div>
      </Grid>
    </Grid>
  );
};

export default Write;

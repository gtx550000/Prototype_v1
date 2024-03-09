import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Texteditor from "../texteditor/texteditor";

/*8/3/24 */
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function FormPropsTextFields() {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "25ch",
            right: "-50px",
            bottom: "-1.5ch ",
            "@media (max-width: 550px)": {
              width: "100%",
              width: "100%",
              right: "auto",
            },
          },
        }}
        /*style={{ padding: "30px 30px 30px 5px" }}*/
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required Title Game"
            defaultValue=""
          />

          <TextField
            required
            id="outlined-required"
            label="Required Project URL"
            defaultValue=""
          />

          <TextField
            required
            id="outlined-required"
            label="Required Video URL"
            defaultValue=""
          />

          <TextField
            required
            id="outlined-required"
            label="Name Team"
            defaultValue=""
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>

          <FormControl
            sx={{
              m: 1,
              width: "25ch",
              right: "-50px",
              bottom: "-1.5ch ",
              "@media (max-width: 550px)": {
                width: "100%",
                width: "100%",
                right: "auto",
              },
            }}
            size="big"
          >
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Action</MenuItem>
              <MenuItem value={20}>Horror</MenuItem>
              <MenuItem value={30}>RPG</MenuItem>
              <MenuItem value={40}>RACING</MenuItem>
              <MenuItem value={50}>Cooking</MenuItem>
              <MenuItem value={60}>Story</MenuItem>
              <MenuItem value={70}>Adventure</MenuItem>
            </Select>
          </FormControl>

          <TextField
            required
            id="outlined-required"
            label="Required Rates THB"
            defaultValue="10"
          />

          <TextField
            required
            id="outlined-required"
            label="Required Donate for Server 😔"
            defaultValue="0"
          />
        </div>
      </Box>

      <div style={{ padding: "30px 2px 30px 5px" }}>
        <Texteditor />
      </div>
    </div>
  );
}

import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../first/first.css';
import Texteditor from '../texteditor/texteditor';

export default function FormPropsTextFields() {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '20ch' } }}
      style={{ padding: '30px 165px 30px 30px' }}
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

        <FormControl sx={{ m: 1, minWidth: 120 }} size="big">
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>FPS</MenuItem>
            <MenuItem value={20}>RPG</MenuItem>
            <MenuItem value={30}>18+</MenuItem>
          </Select>
        </FormControl>

        <TextField
          required
          id="outlined-required"
          label="Required Rates"
          defaultValue="10.THB"
        />

        <TextField
          required
          id="outlined-required"
          label="Required DataTime"
          defaultValue="2010"
        />

        <TextField
          required
          id="outlined-required"
          label="Required NameTeam"
          defaultValue=""
        />

        <TextField
          required
          id="outlined-required"
          label="Required Discount"
          defaultValue=""
        />

        <FormControl sx={{ m: 1, minWidth: 120 }} size="big">
          <InputLabel id="demo-simple-select-label">language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="language"
            onChange={handleChange}
          >
            <MenuItem value={10}>English</MenuItem>
            <MenuItem value={20}>Thai</MenuItem>
            <MenuItem value={30}>China</MenuItem>
          </Select>
        </FormControl>

        <TextField
          required
          id="outlined-required"
          label="Required Day"
          defaultValue=""
        />

        <TextField
          required
          id="outlined-required"
          label="Required Month"
          defaultValue=""
        />
      </div>

      <Texteditor />
    </Box>
  );
}

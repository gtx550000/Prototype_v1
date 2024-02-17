import * as React from 'react';
import { useState } from 'react';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Model from 'react-modal';

import '../report/report.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'System crash',
  'System cannot log in.',
  'System cannot purchase products.',

  'Paid and did not receive the product',
  'Qr code payment system not showing',

  'The content is too violent.',
  'Content about sexism',

  'Email not available',
  'Unable to change password',
  'พี่ T หล่อมากว่าพี่ arm',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function BasicTextFields() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  }; /** */

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [visible, setvisible] = useState(false);

  return (
    <div className="body_report">
      <div className="container-report">
        <div className="fix_font-report">
          <h2>Problem report form</h2>
        </div>

        <div className="form-control-report">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Problem type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>System error</MenuItem>
              <MenuItem value={20}>Payment error</MenuItem>
              <MenuItem value={30}>Inappropriate games</MenuItem>
              <MenuItem value={40}>Unable to access account</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="form-control-report">
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-chip-label">Details</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange1}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="form-control-report">
          <TextField
            fullWidth
            label="Other details"
            id="outlined-basic"
            variant="outlined"
          />
        </div>

        <div className="form-control-report ">
          <Stack direction="row" spacing={1}>
            <Button variant="contained" color="error">
              Cancel
            </Button>
            <div className="button-report">
              <Button
                onClick={() => setvisible(true)}
                variant="contained"
                color="success"
                type="submit"
              >
                Success
              </Button>
            </div>
          </Stack>
        </div>
      </div>

      <div>
        <Model isOpen={visible} className="fix_position-report">
          <div className="">
            <h1 className="">Thanks for reporting.</h1>
          </div>
          <div className="">
            <Button
              onClick={() => setvisible(false)}
              variant="contained"
              color="error"
            >
              Cancel
            </Button>
          </div>
        </Model>
      </div>
    </div>
  );
}

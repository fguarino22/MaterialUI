import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import React, {useState } from "react";


const label = { inputProps: { 'aria-label': 'Switch demo' } };






function Navbar(){
  const handleChange = (event) => {
    setID(event.target.value);
  };

  const [ID, setID] = useState([]);

    return(
      
      <Grid container spacing = {2}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', flexGrow: 1}} >
          <h2>
              FILTER
          </h2>
          <h4>
            COMPLETED
          </h4>
          <Switch {...label} defaultChecked />

          <h4>
            SELECT USER ID
          </h4>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">ID</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={ID}
              label="ID"
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>
          </FormControl>
        </Box >
        
       
      </Grid>
      
    );
}
export default Navbar;











 


    
  

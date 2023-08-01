import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";

export default function MainWrapper() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={4} sm={12}>
          <Navbar />
        </Grid>
        <Grid item md={8} sm={12}>
          <Main />
        </Grid>
      </Grid>
    </Box>
  );
}

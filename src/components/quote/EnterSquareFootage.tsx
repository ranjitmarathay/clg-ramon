'use client'

import { FormControl, TextField, Box, Grid } from "@mui/material";
import React from "react";

interface EnterSquareFootageProps {
  squareFootage: number;
  setSquareFootage: (value: number) => void;

}

export default function EnterSquareFootage(props: EnterSquareFootageProps) {
  return (
    <Box sx={{paddingTop: "15px"}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Square Footage"
              value={props.squareFootage}
              onChange={(e) => props.setSquareFootage(Number(e.target.value))}
              required
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}


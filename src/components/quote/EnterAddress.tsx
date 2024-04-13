'use client'

import { FormControl, TextField, Box, Grid } from "@mui/material";
import React from "react";

interface EnterAddressProps {
  address: string;
  setAddress: (value: string) => void;
  city: string;
  setCity: (value: string) => void;
  state: string;
  setState: (value: string) => void;
  zip: string;
  setZip: (value: string) => void;
}

export default function EnterAddress(props: EnterAddressProps){

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Street Address"
              value={props.address}
              onChange={(e) => props.setAddress(e.target.value)}
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              label="City"
              value={props.city}
              onChange={(e) => props.setCity(e.target.value)}
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3}>
          <FormControl fullWidth>
            <TextField
              label="State"
              value={props.state}
              onChange={(e) => props.setState(e.target.value)}
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3}>
          <FormControl fullWidth>
            <TextField
              label="ZIP Code"
              value={props.zip}
              onChange={(e) => props.setZip(e.target.value)}
              required
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  )
}

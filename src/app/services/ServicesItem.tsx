import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";

function ServicesItem(props: any) {
  return (
    <Grid container spacing={2} sx={{ alignItems: "center", mb: 2, mt: 2 }} direction={{ xs: "column", lg: "row" }}>
      <Grid item xs={12} lg={props.image ? 6 : 12}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%"  // Ensures the box takes full height of its container
        }}>
          <Typography variant="h5" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" } }}>
            {props.title}
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.2rem" } }} color="text.secondary">
            {props.text}
          </Typography>
        </Box>
      </Grid>
      {props.image && (
        <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
          <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              src={props.image}
              alt="default maintenance service image"
              layout="responsive"
              width={500}
              height={300}
              style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center' }}
            />
          </Box>
        </Grid>
      )}
    </Grid>
  )
}

export default ServicesItem;

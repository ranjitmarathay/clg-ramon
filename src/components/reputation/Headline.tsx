'use client'

import React, { useState } from 'react';
import { Container, Typography, Box, ImageList, ImageListItem } from '@mui/material'; 
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import defaultImage from '../../images/defaultImage.jpeg';
// import headerImage from '../../images/headerImage.jpeg'
// import headerImage2 from '../../images/headerImage2.jpeg'
import headerImage2 from '../../images/headerImage2.jpeg'
import Image from 'next/image';
import { StaticImageData } from 'next/image';

export default function Headline(){
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [images, setImages] = useState<StaticImageData[]>([
    headerImage2
  ]);

  return (
  <Container maxWidth="lg" sx={{ marginTop: 4, textAlign: "center" }}>
    <Box>
    <Typography fontSize={{ xs: 20, sm: 30, md: 40, lg: 50 }} component="div" sx={{ flexGrow: 1 }}>
      {/* Your perfect yard <u>without lifting a finger</u> */}
      Eye Popping Work at Jaw Dropping Prices
    </Typography>
    </Box>
    <Box>
      <Typography fontSize={{ xs: 15, sm: 20, md: 25, lg: 30 }} component="div" sx={{ flexGrow: 1 }}>
        Trusted by 100+ of your neighbords
      </Typography>
    </Box>
    <Box>
      <Typography fontSize={{ xs: 15, sm: 20, md: 25, lg: 30 }} component="div" sx={{ flexGrow: 1 }}>
        Call Us Today 512-902-3161
      </Typography>
    </Box>
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <ImageList cols={isMobile ? 1 : 1} rowHeight={isMobile ? 200 : 400}>
        {images.map((item, index) => (
          <ImageListItem key={index}>
            <Image src={item} alt="Plumbing, painting, tile remodeling services for your home and business." layout="static" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>

    
  </Container>
  );
}
'use client'

import React, { useState } from 'react';
import { Container, Typography, Box, ImageList, ImageListItem } from '@mui/material'; 
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import defaultImage from '../../images/defaultImage.jpeg';
// import headerImage from '../../images/headerImage.jpeg'
// import headerImage2 from '../../images/headerImage2.jpeg'
import headerImage2 from '../../images/headerImage2.jpeg'
import bathroomRenovation from '../../images/bathroom.jpeg'
import Image from 'next/image';
import { StaticImageData } from 'next/image';

export default function Headline(){
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [images, setImages] = useState<StaticImageData[]>([
    bathroomRenovation
  ]);

  return (
    <Container 
      maxWidth="lg"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // minHeight: '100vh', // Ensure container takes full height of the viewport
        padding: "0px"
      }}
    >
      <Typography fontSize={{ xs: 26, sm: 30, md: 40, lg: 50 }} sx={{paddingBottom: "15px"}}>
        Exceptional Results at a Price You Can Afford
      </Typography>
      <Typography fontSize={{ xs: 15, sm: 20, md: 25, lg: 30 }} sx={{paddingBottom: "15px"}}>
        Trusted by 100+ of your neighbords
      </Typography>
      <Typography fontSize={{ xs: 15, sm: 20, md: 25, lg: 30 }} sx={{paddingBottom: "15px"}}>
        Call Us Today 512-902-3161
      </Typography>
      <Image
        src={bathroomRenovation} 
        alt="Plumbing, painting, tile remodeling services for your home and business." 
        layout="responsive"
        width={1200}
        height={900}
        style={{objectFit: "contain", objectPosition: "center"}}      
      />
    </Container>
  );
}
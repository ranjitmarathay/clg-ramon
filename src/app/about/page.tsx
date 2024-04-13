'use client'

import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import GetQuoteButton from '../../components/GetQuoteButton';
import Image from 'next/image';
import defaultImage from '../../images/defaultImage.jpeg';
import awning from '../../images/awning.jpeg';
import carpentry from '../../images/carpentry.jpeg';

export default function Page() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
        At Loredo Professional Remodeling, our mission is to transform houses into homes by delivering exceptional remodeling services in the Austin, Texas area. We believe that every project, from minor painting and texture jobs to extensive exterior renovations, should be approached with precision, efficiency, and an unwavering commitment to quality.
        </Typography>
      </Box>

      <Grid container spacing={2} my={4} direction="row">
        <Grid item xs={12} sm={6}>
          <Image src={carpentry} alt="Custom carpentry work for home owner's accesory dwelling unit" layout="responsive" />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              Our Values
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
                Our philosophy revolves around the core values of efficiency, respect, and timeliness. We understand the significance of respecting our clients' time and property, and we always strive to complete every project on schedule while maintaining the highest standards of craftsmanship. Our team of builders and craftsmen, meticulously curated by our founder Ramon Loredo, upholds these values and works tirelessly to bring our clients' remodeling visions to life.
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              What You Can Expect From us
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
              With Loredo Professional Remodeling, expect reasonable pricing without compromising the superior quality of our work. We invest in hiring and retaining the best talent in the industry, ensuring that every project is executed with expertise and precision. Our dedication to excellence and customer satisfaction drives us to continuously improve and set new benchmarks in the remodeling industry.
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image src={awning} alt="Custom Awning for homeowner's pool patio" layout="responsive" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box my={4}>
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
              Choose Loredo Professional Remodeling for your next remodeling project and experience the difference that our philosophy of efficiency, respect, and timeliness can make in creating your dream space.
              
              Have questions or want to schedule a consultation? Call us at 512-555-5555.
            </Typography>
            <GetQuoteButton text="Get An Instant Quote" color="primary"/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

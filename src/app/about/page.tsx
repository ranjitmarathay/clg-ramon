'use client'

import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import GetQuoteButton from '../../components/GetQuoteButton';
import Image from 'next/image';
import defaultImage from '../../images/defaultImage.jpeg';

export default function Page() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          About **Company Name**
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
          **Company mission, belief, purpose**
        </Typography>
      </Box>

      <Grid container spacing={2} my={4}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <Image src={defaultImage} alt="Random landscape" layout="responsive" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box my={4}>
            <Typography variant="h4" gutterBottom>
              **Company Philosophy, values, ethics**
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
              {"**Explain the company's values and ethics**"}
            </Typography>
          </Box>
          <Box my={4}>
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
              Have questions or want to schedule a consultation? Call us at **Company phone number**.
            </Typography>
            <GetQuoteButton text="Get An Instant Quote" color="primary"/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

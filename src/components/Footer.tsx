'use client'

import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { useRouter } from 'next/navigation';
import GetQuoteButton from './GetQuoteButton';

const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <Box sx={{ backgroundColor: '#F5F5F5', color: '#fff', padding: '40px 0', paddingTop: '40px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography gutterBottom sx={{ color: '#000' }} fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.3rem' }}>
              Loredo Professional Remodeling
            </Typography>
            <Link href="#" onClick={() => router.push('/about')} color="#000" underline="hover">
              <Typography fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.2rem' }}>About</Typography>
            </Link>
            <Link href="#" onClick={() => router.push('/services')} color="#000" underline="hover" fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.5rem' }}>
              <Typography fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.2rem' }}>Services</Typography>
            </Link>
            <Link href="#" onClick={() => router.push('/contact')} color="#000" underline="hover" fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.5rem' }}>
              <Typography fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.2rem' }}>Contact</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography gutterBottom sx={{ color: '#000' }} fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.3rem' }}>
              Contact
            </Typography>
            {/* <Typography color="#000" fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.2rem' }}>Email: admin@company.com</Typography> */}
            <Typography color="#000" fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.2rem' }}>Phone: 512-902-3161</Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <GetQuoteButton footer={true} buttonColor="primary"/>
            <Typography variant="body2" sx={{ textAlign: 'right', marginTop: 'auto' }} fontSize='0.9rem' color="#000">
              Created by <Link href="https://www.rpmdigitalsolutions.com" color="#000" underline="hover">RPM Digital Solutions</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

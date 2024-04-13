'use client'

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const SideBanner: React.FC = () => {
    return (
        <Box sx={{
            position: 'fixed',
            top: '50%', // Adjust the position as needed
            right: 0,
            width: 250, // Adjust width as needed
            backgroundColor: 'primary.main',
            color: '#fff',
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3,
            zIndex: 1
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <PhoneIcon fontSize="large" sx={{paddingRight: "10px"}}/>
                <Typography variant="h4" component="div" sx={{ mt: 1 }}>
                    Call Us Now
                </Typography>
            </Box>
            <Typography variant="h6" component="div">
                512-902-3161
            </Typography>
        </Box>
    );
};

export default SideBanner;

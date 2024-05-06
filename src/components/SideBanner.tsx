'use client'

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const SideBanner: React.FC = () => {
    return (
        <Box sx={{
            position: { xs: 'fixed', sm: 'fixed' }, // Fixed on all sizes
            bottom: { xs: 0, sm: '50%' }, // Bottom for xs, vertically middle for sm and up
            right: { xs: 0, sm: 0 }, // Right edge for all sizes
            width: { xs: '100%', sm: 200 }, // Full width on xs, 200px on sm and up
            backgroundColor: 'primary.main',
            color: '#fff',
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3,
            zIndex: 1,
            transform: { sm: 'translateY(-50%)' } // Vertically center for sm and up
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" component="div" sx={{ 
                fontSize: { xs: '1rem', sm: '1.2rem' }, // Smaller font size on xs
                mt: 1,
                textAlign: 'center' // Ensures text is centered if it wraps
            }}>
                    Call Us Now
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {/* <PhoneIcon fontSize="large" sx={{ paddingRight: "10px" }}/> */}
                <PhoneIcon fontSize="small" sx={{ paddingRight: "5px" }}/> 
                <Typography variant="h6" sx={{fontSize: { xs: '1rem', sm: '1rem' }}}component="div">
                    512-902-3161
                </Typography>
            </Box>
        </Box>
    );
};

export default SideBanner;


        // <Box sx={{
        //     position: 'fixed',
        //     top: '50%', // Adjust the position as needed
        //     right: 0,
        //     width: 200, // Adjust width as needed
        //     backgroundColor: 'primary.main',
        //     color: '#fff',
        //     padding: 2,
        //     display: 'flex',
        //     flexDirection: 'column',
        //     alignItems: 'center',
        //     boxShadow: 3,
        //     zIndex: 1
        // }}>
        //     <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        //         <Typography variant="h5" component="div" sx={{ mt: 1 }}>
        //             Call Us Now
        //         </Typography>
        //     </Box>
        //     <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        //         <PhoneIcon fontSize="large" sx={{paddingRight: "10px"}}/>
        //         <Typography variant="h6" component="div">
        //             512-902-3161
        //         </Typography>
        //     </Box>
        // </Box>
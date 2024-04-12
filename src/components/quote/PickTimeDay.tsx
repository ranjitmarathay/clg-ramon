'use client';

import { Box, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio } from '@mui/material';
import React from 'react';

interface PickTimeDayProps {
  selectedTime: string;
  handleTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PickTimeDay: React.FC<PickTimeDayProps> = (props) => {
  return (
    <Box>
      <FormControl>
        <FormLabel>Time of Day</FormLabel>
        <RadioGroup row value={props.selectedTime} onChange={props.handleTimeChange}>
          <FormControlLabel value="morning" control={<Radio />} label="Morning" />
          <FormControlLabel value="afternoon" control={<Radio />} label="Afternoon" />
          <FormControlLabel value="evening" control={<Radio />} label="Evening" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default PickTimeDay;

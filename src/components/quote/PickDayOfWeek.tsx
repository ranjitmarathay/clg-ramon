// 'use client' directive indicates that this component should only be used on the client side
'use client';

import { Checkbox, FormGroup, Box, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import React from 'react';

// Define the Props interface to specify the expected props for the component
interface Props {
  selectedDays: Record<string, boolean>;
  handleDayChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}



// Use the Props interface in the component function signature to enable type checking
export default function PickDayOfWeek(props: Props) {
  return (
    <Box>
      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <FormLabel component="legend">Day of Week</FormLabel>
        <FormGroup row>
          {Object.entries(props.selectedDays).map(([day, isChecked]) => (
            <FormControlLabel
              key={day}
              control={<Checkbox checked={isChecked} onChange={props.handleDayChange} name={day} />}
              label={day.charAt(0).toUpperCase() + day.slice(1)}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}

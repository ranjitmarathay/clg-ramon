'use client'

import React, { useState } from 'react';
import { Box, TextField, Typography, FormLabel, Button, Rating, FormControlLabel } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface FormValues {
  date: string;
  description: string;
  rating: number | null;
  name: string;
  phone: string;
}

const initialValues: FormValues = {
  date: '',
  description: '',
  rating: null,
  name: '',
  phone: ''
};

const ReviewForm: React.FC = () => {
  const [formErrors, setFormErrors] = useState<FormValues>({
    date: '',
    description: '',
    rating: null,
    name: '',
    phone: ''
  });

  const validateForm = (values: FormValues) => {
    let errors: Partial<FormValues> = {};
    if (!values.date) errors.date = 'Required';
    if (!values.description) errors.description = 'Required';
    if (!values.rating) errors.rating = null;
    if (!values.name) errors.name = 'Required';
    if (!values.phone || !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(values.phone)) {
      errors.phone = 'Phone number is not valid';
    }
    return errors;
  };

  const handleSubmit = (values: FormValues) => {
    const errors = validateForm(values);
    if (Object.keys(errors).length === 0) {
      // Submit these values to your backend
      console.log(values);
    } else {
      setFormErrors(errors as FormValues);
    }
  };

  return (
    <Box sx={{ mt: 4, mb: 4, mx: 'auto', width: '100%', maxWidth: 500 }}>
      <Typography variant="h6" gutterBottom>
        Leave a Review
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, handleChange }) => (
          <Form>
              <FormLabel component="legend">Date of Service</FormLabel>
            <TextField
              name="date"
              type="date"
              fullWidth
              margin="normal"
              onChange={handleChange}
              helperText={formErrors.date}
              error={!!formErrors.date}
            />

            <TextField
              name="description"
              label="Description of Service"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              onChange={handleChange}
              helperText={formErrors.description}
              error={!!formErrors.description}
            />

            <Box>
              <Typography component="legend">Rating</Typography>
              <Rating
                name="rating"
                value={values.rating}
                onChange={(event, newValue) => {
                  setFieldValue('rating', newValue);
                }}
              />
              {formErrors.rating && <div>{formErrors.rating}</div>}
            </Box>

            <TextField
              name="name"
              label="Your Name"
              fullWidth
              margin="normal"
              onChange={handleChange}
              helperText={formErrors.name}
              error={!!formErrors.name}
            />

            <TextField
              name="phone"
              label="Phone Number (for verification)"
              fullWidth
              margin="normal"
              onChange={handleChange}
              helperText={formErrors.phone}
              error={!!formErrors.phone}
            />

            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Submit Review
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ReviewForm;

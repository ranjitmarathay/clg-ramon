'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Container } from '@mui/material';

// Define the interface for the component's props
interface GetQuoteButtonProps {
  text?: string;
  buttonColor?: string;
  footer?: boolean;
}

// Functional component with props typed according to the interface
const GetQuoteButton: React.FC<GetQuoteButtonProps> = ({ text = "Request A Quote", buttonColor = "success", footer = false }) => {
  const router = useRouter();

  // Handler function to redirect to the quote page
  const handleQuoteClick = () => router.push('/quote');

  if (footer) {
    return (
      <Button variant="contained" color={buttonColor as any} onClick={handleQuoteClick} sx={{ marginBottom: '20px', fontSize: '1.2rem' }}>
        Request a Quote
      </Button>
    );
  } else {
    return (
      <Container maxWidth="lg" sx={{ marginTop: 4, textAlign: "center" }}>
        <Button variant="contained" color={buttonColor as any} onClick={handleQuoteClick} sx={{ marginBottom: '20px', fontSize: '1.2rem' }}>
          {text}
        </Button>
      </Container>
    );
  }
};

export default GetQuoteButton;

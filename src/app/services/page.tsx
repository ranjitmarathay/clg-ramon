// 'use client'
import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";

import painting from '../../images/painting.jpeg';
import drywall from '../../images/drywall.jpeg';
import electric from '../../images/electrical.jpeg';
import plumbing from '../../images/plumbing.jpeg';
import dynamic from 'next/dynamic';
import type { Metadata } from "next";

const ServicesItem = dynamic(() => import('../../components/ServicesItem'), { 
  ssr: true, 
  loading: () => (
    <Grid container spacing={2} sx={{ alignItems: "center", mb: 2, mt: 2 }} direction={{ xs: "column", lg: "row" }}>
      Loading...
    </Grid>
  )
});

export const metadata: Metadata = {
  title: "Services",
};

export default function Page(props: any) {
 
  return (
    // <p> test </p>
    <Container>
      <Typography variant="h3" sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" } }} color="#000000">
        Services
      </Typography>
      <ServicesItem
        title="Painting"
        text="Elevate the look of your home or office with Loredo Professional Remodeling's expert painting services. Our skilled painters bring precision and attention to detail to every project, ensuring flawless finishes that last. From refreshing interiors with vibrant colors to protecting exteriors against the elements, we provide a full range of painting solutions tailored to meet your specific needs and style preferences. Trust us to deliver clean, consistent, and high-quality results that will rejuvenate your space."
        image={painting}
        serviceList={["test"]}
      />
      <ServicesItem
        title="Texture"
        text="Revolutionize your interiors with Loredo Professional Remodeling's texture coating services. Whether you're aiming for a subtle elegance with smooth textures or seeking dramatic flair with bold textural contrasts, our specialists are equipped to bring your vision to life. We use the latest techniques and high-quality materials to create stunning, durable finishes that enhance the atmosphere of any room. Let us help you create a unique ambiance that reflects your personal taste and elevates your home's aesthetic appeal."
        image={drywall}
        serviceList={[""]}
      />
      <ServicesItem
        title="Electrical"
        text="Ensure the safety and efficiency of your electrical systems with Loredo Professional Remodeling. Our certified electricians are adept at handling all types of electrical tasks from basic repairs to complete system installations. We prioritize safety, efficiency, and functionality to deliver top-notch electrical solutions that meet all codes and regulations. Whether you're upgrading your lighting, installing new electrical panels, or need emergency repairs, you can count on us for reliable, prompt, and professional service."
        image={electric}
        serviceList={[""]}
      />
      <ServicesItem
        title="Plumbing"
        text="Loredo Professional Remodeling offers comprehensive plumbing services for both residential and commercial properties. Our team of certified plumbers is equipped to handle everything from minor repairs to major installations, ensuring your plumbing system functions flawlessly."
        image={plumbing}
        serviceList={["Leak Detection & Repair", "Water Heater Installation & Repair"]}
      />
      <ServicesItem
        title="Rental Make Ready"
        text="If you just had a tenant move out of your apartment, we can help you make it ready for the new tenant. Often times this requires a lot of very specific things like cabinet paint touch up, tile replacement, painting, texturing, etc. We are a one stop shop for all your remodeling needs and a fantastic price."
        serviceList={[""]}
      />
    </Container>
  );
}
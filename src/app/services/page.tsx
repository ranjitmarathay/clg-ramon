import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import Image from "next/image";
// import defaultImage from '../../images/defaultImage.jpeg';

import painting from '../../images/painting.jpeg';
import drywall from '../../images/drywall.jpeg';
import electric from '../../images/electrical.jpeg';
import plumbing from '../../images/plumbing.jpeg';
import defaultImage from '../../images/defaultImage.jpeg';


function ServicesItem(props: any) {
  return (
    <Grid container spacing={2} sx={{ alignItems: "center", mb: 2, mt: 2 }} direction={{ xs: "column", lg: "row" }}>
      <Grid item xs={12} lg={props.image ? 6 : 12}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%"  // Ensures the box takes full height of its container
        }}>
          <Typography variant="h5" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" } }}>
            {props.title}
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
            {props.text}
          </Typography>
        </Box>
      </Grid>
      {props.image ? (
        <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        {/* Ensure image container has flex properties to center the image */}
        <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src={props.image}
            alt="default maintenance service image"
            layout="responsive"  // Use responsive layout to maintain aspect ratio
            width={500}          // Specify width
            height={300}         // Specify height
            style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center' }}
          />
        </Box>
      </Grid>
      ) : null}
    </Grid>
  )
}

export default function Page(props: any) {

  if (props.landingPage){
    return null
  } else {
    return (
      <Container>
        <Typography variant="h3" sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" } }} color="#000000">
          Services
        </Typography>
        <ServicesItem
          title="Painting"
          text="Elevate the look of your home or office with Loredo Professional Remodeling's expert painting services. Our skilled painters bring precision and attention to detail to every project, ensuring flawless finishes that last. From refreshing interiors with vibrant colors to protecting exteriors against the elements, we provide a full range of painting solutions tailored to meet your specific needs and style preferences. Trust us to deliver clean, consistent, and high-quality results that will rejuvenate your space."
          image={painting}
        />
        <ServicesItem
          title="Texture"
          text="Revolutionize your interiors with Loredo Professional Remodeling's texture coating services. Whether you're aiming for a subtle elegance with smooth textures or seeking dramatic flair with bold textural contrasts, our specialists are equipped to bring your vision to life. We use the latest techniques and high-quality materials to create stunning, durable finishes that enhance the atmosphere of any room. Let us help you create a unique ambiance that reflects your personal taste and elevates your home's aesthetic appeal."
          image={drywall}
        />
        <ServicesItem
          title="Electrical"
          text="Ensure the safety and efficiency of your electrical systems with Loredo Professional Remodeling. Our certified electricians are adept at handling all types of electrical tasks from basic repairs to complete system installations. We prioritize safety, efficiency, and functionality to deliver top-notch electrical solutions that meet all codes and regulations. Whether you're upgrading your lighting, installing new electrical panels, or need emergency repairs, you can count on us for reliable, prompt, and professional service."
          image={electric}
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
          // image={defaultImage}
        />
      </Container>
    );
  }
}
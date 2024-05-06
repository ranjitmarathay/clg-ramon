import React from "react"
import { Container, Grid, Typography, Box, Button } from "@mui/material";



export default function ServicesSummary(props: any) {


  const services = [
    {
      title: "Painting",
      icon: "",
      description: "Transform your space with our expert painting and texturing, achieving vibrant finishes and unique designs.",
      link: "/services/painting"
    },
    {
      title: "Electrical",
      icon: "",
      description: "Ensure your property's safety and efficiency with our comprehensive electrical services, from installations to repairs.",
      link: "/services/electrical"
    },
    {
      title: "Plumbing",
      icon: "",
      description: "Our professional plumbing services offer reliable solutions for all installations, repairs, and maintenance needs.",
      link: "/services/plumbing"
    },
    {
      title: "Carpentry",
      icon: "",
      description: "Discover the art of custom carpentry with our services, tailored to create and restore functional, stylish woodwork for your space.",
      link: "/services/carpentry"
    }
  ]



  return (
    <Container>
      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={12} md={12/services.length} lg={12/services.length} key={index}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: { xs: 'start', sm: 'space-between' },
              backgroundColor: "#C0C2C9", 
              borderRadius: "10px", 
              minHeight: { xs: '100px', sm: '375px' }
            }}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: 2 }}>
                <Typography variant="h5" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2rem" } }} color="#000000">
                  {service.title}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: 2 }}>
                <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="#000000">
                  {service.description}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: 2 }}>
                <Button variant="text" color="primary" sx={{ fontWeight: "bold",fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1rem" } }} href={service.link || "#"}>
                  Explore This Service
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
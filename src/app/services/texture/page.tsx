import {Container, Grid, Box, Button, Typography, Breadcrumbs} from "@mui/material";
import Link from "next/link";

export default function Page(props: any) {
  return (
    <Container>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link href="/services">
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          Services
        </Typography>
        </Link>
        <Link href="/services/painting">
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          Texture
        </Typography>
        </Link>
      </Breadcrumbs>
      <Grid container spacing={4} sx={{ alignItems: "left", mb: 2, mt: 2 }} direction={{ xs: "column", lg: "column" }}>
        <Grid item xs={12} lg={6}>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", spacing: 4, padding: 2}}>
            <Typography variant="h1" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" } }}>
            Comprehensive Texturing Services by Loredo Professional Remodeling
            </Typography> 
          </Box>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
            At Loredo Professional Remodeling, located in Austin, Texas, we specialize not only in painting but also in providing comprehensive texturing services designed to enhance the aesthetic and value of your home. Our expertise extends to a variety of texturing techniques, including the popular removal of popcorn ceilings, tailored to meet the unique needs of each client.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Expert Popcorn Ceiling Removal
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          Popcorn ceilings, once a trend, are now often considered outdated and are notorious for collecting dust and allergens. Loredo Professional Remodeling offers expert popcorn ceiling removal services, transforming your ceilings into smooth, modern surfaces. Our skilled team ensures a clean, updated look that not only increases the appeal of your home but also its market value.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Unique Texturing Techniques
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          Whether you're looking for a subtle texture to add depth to a room or a bold artistic effect, our professionals are equipped with the tools and techniques to achieve the desired outcome. Our services include but are not limited to:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
                Knockdown Texture: Ideal for adding a contemporary look while hiding imperfections. 
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
                Orange Peel Texture: Provides a light, splattered texture that's perfect for walls and ceilings.
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
                Skip Trowel Texture: A hand-applied technique that gives a Mediterranean appeal.
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Transformative Texturing Process
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
            Our texturing process begins with a detailed consultation to understand your vision and requirements. We then prepare your space thoroughly, covering furniture and floors to protect against any spills or splatters. Our professionals meticulously apply the chosen texture, ensuring consistency and quality across every touchpoint.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Quality and Durability Guaranteed
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
            At Loredo Professional Remodeling, we use only the highest quality materials, ensuring that the textures we apply not only look fantastic but also stand the test of time, even in the demanding Austin climate. Our commitment to quality materials and craftsmanship guarantees a finish that you can be proud of.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Affordable Texturing Services
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
            Understanding the budgetary constraints of renovations, we offer competitive pricing on all our texturing services. Loredo Professional Remodeling provides upfront quotes and flexible pricing options, ensuring our services are accessible without compromising on quality.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Why Choose Loredo for Your Texturing Needs
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
            Choosing Loredo means opting for a team that is deeply committed to enhancing your living space. Our track record of exceeding customer expectations and our meticulous attention to detail make us a preferred choice in the Austin area.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Preparing Your Home for Texturing
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
            Before we begin any texturing project, our team takes comprehensive steps to ensure your home is ready for a transformation. This includes moving and covering furniture, taping off areas not being textured, and setting up our equipment with the utmost care to ensure a seamless and clean process.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", spacing: 4}}>
            <Button variant="contained" sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1rem" } }}>
              Get A Quote
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
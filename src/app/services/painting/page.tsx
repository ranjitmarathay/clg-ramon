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
          Painting
        </Typography>
        </Link>
      </Breadcrumbs>
      <Grid container spacing={4} sx={{ alignItems: "left", mb: 2, mt: 2 }} direction={{ xs: "column", lg: "column" }}>
        <Grid item xs={12} lg={6}>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", spacing: 4, padding: 2}}>
            <Typography variant="h1" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" } }}>
              Painting Services
            </Typography> 
          </Box>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
              At Loredo Professional Remodeling, we pride ourselves on transforming spaces and lives through our expert painting services. Based in Austin, Texas, Loredo is synonymous with quality, precision, and affordability in both exterior and interior painting projects. Whether you are refreshing your home or updating your business space, our team is equipped to deliver exceptional results.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Expert Exterior Painting 
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
            The exterior of your property says a lot about you. That's why at Loredo Professional Remodeling, we provide comprehensive exterior painting services designed to withstand Austin&apos;s unique climate challenges. From initial consultation to the final brush stroke, our process is thorough and designed to ensure lasting beauty and protection for your property.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Transformative Interior Painting Services
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
            Inside your home or office, the colors and quality of paint can define the space. Loredo&apos;s interior painting services are tailored to reflect your style and needs. Our consultants help you choose the perfect palette to create the atmosphere you desire, and our skilled painters meticulously apply each coat, transforming ordinary spaces into stunning environments.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Commitment to Quality and Craftsmanship
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
            Our reputation at Loredo Professional Remodeling is built on a foundation of high-quality craftsmanship. Our painters are not only skilled but passionate about making every detail count. This dedication to excellence ensures flawless finishes and satisfied clients.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Affordable Excellence in Painting
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
            Quality does not have to come at a premium. Loredo Professional Remodeling offers competitive pricing on all our painting services, ensuring that you can achieve the look you want without breaking the bank. We provide detailed quotes and flexible pricing options to fit your budget and project scope.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            The Loredo Difference in Painting Services
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
            What sets Loredo apart is our commitment to customer satisfaction and the quality of our work. Our success stories and client testimonials speak volumes about our ability to exceed expectations and deliver stunning results.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Preparing Your Space for Painting
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          Before any paint is applied, our team at Loredo Professional Remodeling ensures your space is ready for a transformation. We take steps to protect your furnishings and minimize disruption, making the painting process smooth and stress-free.
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
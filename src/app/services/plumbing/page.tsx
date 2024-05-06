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
        <Link href="/services/plumbing">
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          Plumbing
        </Typography>
        </Link>
      </Breadcrumbs>
      <Grid container spacing={4} sx={{ alignItems: "left", mb: 2, mt: 2 }} direction={{ xs: "column", lg: "column" }}>
      <Grid item xs={12} lg={6}>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", spacing: 4, padding: 2}}>
          <Typography variant="h1" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" } }}>
            Plumbing Services
          </Typography>
        </Box>
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          At Loredo Professional Remodeling, we excel in providing exceptional plumbing solutions that improve the functionality and aesthetics of your home. Located in Austin, Texas, Loredo is renowned for its meticulous attention to detail, unparalleled efficiency, and unwavering reliability in handling diverse plumbing challenges. From routine maintenance to complex renovations, our team is equipped to deliver superior plumbing services that ensure your home systems operate smoothly and efficiently.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
          Why Choose Loredo Professional Remodeling for Your Plumbing Needs?
        </Typography>
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          At Loredo Professional Remodeling, our reputation is built on a foundation of trust and exemplary craftsmanship. Each plumber in our team embodies our ethos of precision and attention to detail, which is crucial in the plumbing industry. We understand that even the smallest leak or installation flaw can lead to significant problems, which is why we emphasize thorough inspections, continuous training, and adherence to industry best practices. This rigorous approach ensures our plumbing services are not only reliable but also exceed expectations in durability and performance.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
          Full-Spectrum Plumbing Services
        </Typography>
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          Toilet Replacements and Repairs, Bathroom Renovations, Leak Detection and Repair, Pipe Replacement and Installation, Water Heater Services. We handle both partial and whole-house pipe overhauls, using the best materials to ensure longevity and compliance with all local building codes.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
          Customized Solutions & Customer Satisfaction Guaranteed
        </Typography>
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          At Loredo Professional Remodeling, customer satisfaction is our priority. We understand that every home and every project is unique. Our team works closely with you to tailor our services to meet your specific needs and preferences.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
          Ready to Get Started?
        </Typography>
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          If you’re looking for reliable, high-quality plumbing services, look no further. Contact Loredo Professional Remodeling today to discuss your needs and how we can help. Let us bring our craftsmanship and expertise to your plumbing projects, ensuring everything is done right the first time.
        </Typography>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", spacing: 4, marginTop: 2}}>
          <Button variant="contained" sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1rem" } }}>
            Get A Quote
          </Button>
        </Box>
      </Grid>
    </Grid>
    </Container>
  )
}
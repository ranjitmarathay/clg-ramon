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
        <Link href="/services/electrical">
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          Electrical
        </Typography>
        </Link>
      </Breadcrumbs>
      <Grid container spacing={4} sx={{ alignItems: "left", mb: 2, mt: 2 }} direction={{ xs: "column", lg: "column" }}>
        <Grid item xs={12} lg={6}>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", spacing: 4, padding: 2}}>
            <Typography variant="h1" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" } }}>
              Electrical
            </Typography> 
          </Box>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          Welcome to Loredo Professional Remodeling, your premier choice for electrical services in Austin, Texas. With over 12 years of experience in the industry, Loredo has established a reputation for reliability, expertise, and customer satisfaction. Whether you&apos;re upgrading your home, addressing emergency repairs, or setting up a new commercial building, our team of certified electricians is here to ensure your projects are completed safely and efficiently.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Understanding Electrical Services
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          Electrical work is a critical component of any residential or commercial property. It involves the installation, repair, and maintenance of electrical systems including wiring, fixtures, and appliances. At Loredo Professional Remodeling, we offer a comprehensive range of services to meet the diverse needs of our clients in Austin.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Why Choose Us for Your Electrical Needs?
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          Our electricians are not only licensed and insured but also continuously trained in the latest safety standards and technological advancements. Loredo&apos;s commitment to quality and safety makes us a trusted partner for all electrical projects.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
        Residential Electrical Services
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          Our residential services cater to homeowners looking to enhance their living spaces with modern electrical solutions:
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          <p><b>Electrical Safety Inspections</b>: Essential for ensuring your home complies with safety standards and regulations.</p>
          <p><b>Installation of Fixtures and Lighting</b>: From elegant chandeliers to energy-efficient LEDs, we illuminate your home according to your aesthetics and functionality needs.</p>
          <p><b>Home Automation and Security Systems</b>: Upgrade to smart home solutions for enhanced comfort and security.</p>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
          Commercial Electrical Services
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          <p><b>Wiring and Electrical System Upgrades</b>: Essential for older buildings needing compliance with current electrical codes.</p>
          <p><b>Emergency Lighting and Power Solutions</b>: Critical for safety during unexpected power outages.</p>
          <p><b>Routine Maintenance and Safety Checks</b>: Preventative services to avoid costly downtime and repairs.</p>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
          Safety and Compliance
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          Safety is our top priority. Loredo&apos;s team adheres strictly to local building codes and industry standards, ensuring that all installations and repairs are performed correctly and safely.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
            Customer Experiences and Testimonials
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          Over the years, Loredo has earned numerous accolades from satisfied customers who appreciate our attention to detail and commitment to excellence. Our clients often commend the professionalism and expertise of our electricians, emphasizing the peace of mind they experience when engaging our services.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.5rem", lg: "1.75rem" } }}>
          Getting Started with Loredo Professional Remodeling
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.25rem" } }} color="text.primary">
          To schedule an appointment or to discuss your electrical needs, simply contact us through our website or give us a call. Our friendly staff will guide you through the process and ensure that you receive the personalized service you deserve.
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
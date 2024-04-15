'use client'

import { Container, Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import EnterAddress from "../../components/quote/EnterAddress";
import PickTimeDay from "../../components/quote/PickTimeDay";
import SelectServices from "../../components/quote/SelectServices";
import ContactInfo from "../../components/quote/ContactInfo";
import PickDayOfWeek from "../../components/quote/PickDayOfWeek";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Loader } from '@googlemaps/js-api-loader';
import EnterSquareFootage from "../../components/quote/EnterSquareFootage";
/* global google */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get A Quote",
};

interface SelectedDays {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}

export default function Page() {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [quoteValue, setQuoteValue] = useState(0);
  const [timeSaved, setTimeSaved] = useState(0);
  
  const [selectedServices, setSelectedServices] = useState([
    // {service: 'Rental Make Ready', selected: false},
    {service: 'Painting & Texture', selected: false},
    {service: 'Cabinet Refinishing', selected: false},
    {service: 'Tiling', selected: false},
    {service: 'Plumbing', selected: false},
    {service: 'Electrical', selected: false}
  ]);

  const [selectedDays, setSelectedDays] = useState<Record<string, boolean>>({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  });

  const zipCodes = [
    "78701", "78702", "78703", "78704", "78705", "78712", "78721", "78722", "78723", "78724", 
    "78725", "78726", "78727", "78728", "78729", "78730", "78731", "78732", "78733", "78734", 
    "78735", "78736", "78737", "78738", "78739", "78741", "78742", "78744", "78745", "78746", 
    "78747", "78748", "78749", "78750", "78751", "78752", "78753", "78754", "78756", "78757", 
    "78758", "78759"
  ];

  const [timeOfDay, setTimeOfDay] = useState("");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");

  const [address, setAddress] = useState("");

  const [city, setCity] = useState("");

  const [state, setState] = useState("");

  const [zip, setZip] = useState("");

  const [squareFootage, setSquareFootage] = useState(0);

  const handleServicesChange = (event: any) => {
    const selectedValues = event.target.value;
    let newSelectedServices = selectedServices.map((service) => {
      if (selectedValues.includes(service.service)) {
        return { ...service, selected: true };
      } else {
        return { ...service, selected: false };
      }
    });
    setSelectedServices(newSelectedServices);
  };


  const handleTimeChange = (event: any) => {
    console.log("Time of Day", event.target.value);
    setTimeOfDay(event.target.value);
  };

  const handleDayChange = (event: any) => {
    setSelectedDays({
      ...selectedDays,
      [event.target.name]: event.target.checked
    });
  };

  const checkZipCode = (zipCode: string) => {
    return zipCodes.includes(zipCode);
  }

  const displayNiceTime = (hours: number) => {
    if (hours % 2 === 0) {
      return hours
    } else {
      return hours + 0.5
    }
  }
  
  const generateQuote = async () => {
    let numSelectedServices = selectedServices.filter(service => service.selected).length;
    let numSelectedDays = Object.values(selectedDays).filter(day => day).length;
    console.log("Generating Quote", numSelectedServices, numSelectedDays, address, timeOfDay, name, email, phone, message);
  
    if(zip != "" && city !== "" && state !== "" && address !== "" &&  name !== "" && email !== "" && phone !== "" && message !== "" && squareFootage !== 0) {
      console.log("Generating Quote", selectedServices, selectedDays, address, name, email, phone, message);
      // let days = Object.keys(selectedDays).filter(day => selectedDays[day]).join(", ");
      // let days = Object.keys(selectedDays).filter((day): day is keyof SelectedDays => selectedDays[day as keyof SelectedDays]).join(", ");
      let services = selectedServices.map(service => service.service).join(", ");
  
      var quoteValue = 0;
      var timeSaved = 0;
  
      try {

        const zipCodeCheck = checkZipCode(zip);

        console.log("Zip Code Check", zipCodeCheck);

        if (!zipCodeCheck) {
          alert("We are sorry, but we can only provide quotes within Austin, TX.");
          return;
        }  
  
        if (timeOfDay === "Morning") {
          quoteValue += 50;
          timeSaved += 1.5;
        } else if (timeOfDay === "Afternoon") {
          quoteValue += 75;
          timeSaved += 1.5;
        } else if (timeOfDay === "Evening") {
          quoteValue += 100;
          timeSaved += 1.5;
        }
  
        if (selectedDays.saturday || selectedDays.sunday) {
          quoteValue += 60;
          timeSaved += 2;
        }
  
        if (services.includes("Rental Make Ready")) {
          quoteValue += 300;
          timeSaved += 4;
        } else if (services.includes("Painting & Texture")) {
          quoteValue += 800;
          timeSaved += 5.5;
        } else if (services.includes("Cabinet Refinishing")) {
          quoteValue += 300;
          timeSaved += 3.5;
        } else if (services.includes("Tiling")) {
          quoteValue += 400;
          timeSaved += 6;
        } else if (services.includes("Plumbing")){
          quoteValue += 400;
          timeSaved += 4;
        } else if (services.includes("Electrical")) {
          quoteValue += 400;
          timeSaved += 4;
        }

  
        // alert(`Your quote is $${quoteValue} for ${days} and ${services}`);
        setQuoteValue(quoteValue)
        setTimeSaved(timeSaved)
      } catch (error) {
        console.error('Error calculating distance:', error);
      }
    } else {
      alert("Please fill out all required fields");
    }
  };
  

  return (
   <Container>
     <Typography variant="h5" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" } }} marginTop={2} color="#000000">
        Just 4 Easy Steps To Get A Quote
     </Typography>
     <Box>
      <Typography
        variant="body1"
        sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.3rem" } }}
        marginTop={2}
        color="#000000"
      >
        1. Select Services
      </Typography>
        <SelectServices handleServicesChange={handleServicesChange} selectedServices={selectedServices} setSelectedServices={setSelectedServices}/>
     </Box>
     <Box>
     <Typography
        variant="body1"
        sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.3rem" } }}
        marginTop={2}
        color="#000000"
      >
        2. Enter Address
      </Typography>
        <EnterAddress address={address} setAddress={setAddress} city={city} setCity={setCity} state={state} setState={setState} zip={zip} setZip={setZip}/>
     </Box>
     <Box>
      <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.3rem" } }}
          marginTop={2}
          color="#000000"
        >
          3. Enter Square Footage of Home
        </Typography>
        <EnterSquareFootage squareFootage={squareFootage} setSquareFootage={setSquareFootage}/>
     </Box>
     <Box>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.3rem" } }}
          marginTop={2}
          color="#000000"
        >
          4. Enter Contact Info
        </Typography>
        <ContactInfo name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} message={message} setMessage={setMessage}/>
     </Box>
     <Box sx={{paddingTop: "25px", paddingBottom: "25px"}}>
        <Button 
          variant="contained"
          onClick={() => generateQuote()}  
          sx={{
            fontSize: "1.2rem",
            padding: "12px 24px",
            borderRadius: "8px",
          }}
        >
          Generate Instant Quote
        </Button>
     </Box>
    <Box sx={{ paddingTop: "25px", paddingBottom: "25px" }}>
        {quoteValue !== 0 && (
          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#000000",
              }}
            >
              Your Quote: ${quoteValue} - ${quoteValue*2.5}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.1rem" }, marginTop: "10px" }}
            >
              You could save ${quoteValue*2*.25} and {displayNiceTime(timeSaved)} hours!
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.1rem" }, marginTop: "10px" }}
            >
              To capture these savings, give us a call now.
              {/* <a href={`mailto:youremail@example.com?subject=Quote&body=Your quote is $${quoteValue}`}>email me a copy of this quote</a> */}
            </Typography>
            <Typography 
              variant="body1"
              sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.5rem", lg: "1.5rem" }, marginTop: "10px" }}
            >
              (512) 456-7890
            </Typography>
          </Box>
        )}
    </Box>


   </Container>
  );
}
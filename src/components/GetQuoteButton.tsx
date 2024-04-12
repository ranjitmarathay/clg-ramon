'use client'

import { Button, Container } from "@mui/material";
import { useRouter } from 'next/navigation';


export default function GetQuoteButton(props: any){
  const router = useRouter();

  if (props.footer){
    return ( 
      <Button variant="contained" color={props.color ? props.color : "success"} onClick={() => router.push('/quote')} sx={{ marginBottom: '20px', fontSize : '1.2rem' }}>
        Request a Quote
      </Button>
    )
  } else{
    return (
      <Container maxWidth="lg" sx={{ marginTop: 4, textAlign: "center" }}>
        <Button variant="contained" color={props.color ? props.color : "success"} onClick={() => router.push('/quote')} sx={{ marginBottom: '20px', fontSize : '1.2rem' }}>
          {props.text ? props.text : "Request A Quote"}
        </Button>
      </Container>
    )
  }
}

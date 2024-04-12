import Image from "next/image";
import Headline from "../components/reputation/Headline";
import GetQuoteButton from "../components/GetQuoteButton";
import Reputation from "../components/reputation/Reputation";
import Testimonials from "../components/reputation/Testimonials";

export default function Page() {
  return (
    <div>
      <Headline/>
      <GetQuoteButton text="Get An Instant Quote" color="primary"/>
      <Reputation/>
      <Testimonials/>
    </div>
  );
}
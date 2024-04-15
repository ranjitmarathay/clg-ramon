import Headline from "../components/reputation/Headline";
import GetQuoteButton from "../components/GetQuoteButton";
import Reputation from "../components/reputation/Reputation";
import Testimonials from "../components/reputation/Testimonials";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
};

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

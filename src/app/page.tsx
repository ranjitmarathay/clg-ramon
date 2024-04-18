import Headline from "../components/reputation/Headline";
// import GetQuoteButton from "../components/GetQuoteButton";
import Reputation from "../components/reputation/Reputation";
import Testimonials from "../components/reputation/Testimonials";
import dynamic from 'next/dynamic';

import type { Metadata } from 'next'

const GetQuoteButton = dynamic(() => import('../components/GetQuoteButton'), { ssr: false });
export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <div>
      <Headline/>
      <GetQuoteButton text="Get An Instant Quote" buttonColor="primary"/>
      <Reputation/>
      <Testimonials/>
    </div>
  );
}

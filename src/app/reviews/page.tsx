"use client"; 
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from 'react';
import Footer from "@/components/footer"

function page() {
  return (
     <>
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    <Footer />
    </>
  );
}
 
const testimonials = [
  {
    quote:
      "I was looking for a beginner flute for my niece, and the website provided detailed descriptions to help me choose the right one. It arrived quickly, and she loves it! I'll be coming back to buy more gear for myself soon",
    name: "Ali",
    title: "From pakistan",
  },
  {
    quote:
      "I bought a saxophone during their sale, and I'm so glad I did! Not only was the instrument well-priced, but the payment process was smooth and secure. They even offered multiple payment options, which was convenient. Absolutely fantastic service!",
    name: "William ",
    title: "From America",
  },
  {
    quote: " I got a violin, and it looks and sounds even better in person. The checkout process was quick, and they even gave me a discount code for my next purchase! Very happy with my experience.",
    name: "Hassan",
    title: "From pakistan",
  },
  {
    quote:
      "I ordered a set of drums, and they arrived well before the estimated delivery date. The packaging was top-notch, ensuring everything was intact. Assembling was easy, and the sound is incredible. A seamless experience from start to finish!",
    name: "Jane",
    title: "From America",
  },
  {
    quote:
      "I had a question about a guitar I was interested in, and the support team responded within minutes! They were incredibly helpful and knowledgeable. The guitar arrived earlier than expected and was in perfect condition. Definitely shopping here again!",
    name: "Sania",
    title: "From Paistan",
  },
];



export default page
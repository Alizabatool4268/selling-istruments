"use client"; 
import React from "react";
import { Button } from "@/components/ui/moving-border";
import Footer from "@/components/footer";
import { Vortex } from "@/components/ui/vortex";

function Contact() {
  return (
    <>
    <div className="w-[100%] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
     <div>
       <h1 className="text-center font-sans font-bold text-6xl text-white ">Contact</h1>
       <form className="flex flex-wrap justify-center al flex-col m-3 items-center rounded-xl bg-white bg-opacity-10 backdrop-blur-sm
        h-90 w-96">
            <input type="text" placeholder="Your Name" className="placeholder-gray-500 text-white m-3 h-10 w-60 rounded-xl bg-transparent border-2"  />
            <input type="email" placeholder="Your Email"  className="placeholder-gray-500 text-white m-3 h-10 w-60 rounded-xl bg-transparent border-2"  />
            <textarea placeholder="Your Message"  className=" placeholder-gray-500 text-white m-3 h-10 w-25 w-60 rounded-xl bg-transparent border-2" ></textarea>
            <Button className="h-14">Submit</Button>
          </form>
   
      </div>
    </Vortex>
    </div>
    <Footer />
   </>
  );
}

export default Contact;
import Link from "next/link";
import React from "react";
import Boxes from "@/components/ui/background-boxes";
import { Button } from "@/components/ui/moving-border";
function Herosection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex  flex-col items-center justify-center
     relative overflow-hidden mx-auto py-10 md:py-0">
      <Boxes />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt0 text-4xl md:text-7xl font-sans font-bold bg-clip-text text-transparent
         bg-gradient-to-b from-sky-100 to-blue-600">Your One-Stop Music Shop</h1>

        <p className="mt-4 font-sans text-base md:text-lg text-blue-100 max-x-lg mx-auto">
           Unleash your inner musician now! Discover a world of sound with our vast collection 
            of instruments, from classic guitars to cutting-edge synthesizers. Whether younpm run buildre a seasoned pro 
            or just starting your musical journey, we have the perfect instrument to inspire your creativity.
            Explore our curated selection, shop with confidence, and let your passion for music soar!</p>
        <div className="mt-4">
             <Link href={"/reviews"}>
             <Button>Explore Reviews</Button>
             </Link>
        </div>
      </div>
     </div>
  )
};

export default Herosection;
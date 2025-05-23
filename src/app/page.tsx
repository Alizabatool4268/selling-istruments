import Image from "next/image";
import React from 'react';
import Herosection from "@/components/Herosection";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Data from "@/data/instruments-data.json";
import Footer from "@/components/footer";

function Home() {
  return (
    <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02] " >
      <Herosection />
      <div className="flex flex-wrap justify-center ">
      {Data.instruments.map((instruments)=>(
        <CardContainer className="inter-var" key={Data.instruments.length}>
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl
         dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]
          border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 m-3 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {instruments.tittle}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
          {instruments.description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={instruments.image}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={instruments.tittle}
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Add to cart
            </CardItem>
            <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
           {instruments.Price}
          </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      ))}
      </div>
      <Footer/>
    </main>
  )
}

export default Home ;






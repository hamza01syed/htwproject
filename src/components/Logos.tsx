import React from 'react'
import Image from 'next/image';
import agk from "@/../public/images/agklogo.png"
import caie from "@/../public/images/caielogo.png"
import fbise from "@/../public/images/fbiselogo.png"
import hec from "@/../public/images/heclogo.png"
import sindh from "@/../public/images/sindhlogo.png"
import ib from "@/../public/images/IB-curriculm-logo.png"
import punjab from "@/../public/images/punjblogo.png"
import lhr from "@/../public/images/LHRlogo.png"

const Logos = () => {
  return (
    <main className="container mx-auto py-8 px-4">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">Educational Boards We Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            <div className="board-logo" data-aos="fade-up">
              <Image 
                src={agk} // replace with your actual image path
                alt="Board 1"
                width={200}
                height={200}
                className="rounded-lg shadow-lg h-auto w-auto"
              />
            </div>
            <div className="board-logo" data-aos="fade-up" data-aos-delay="100">
              <Image 
                src={caie} // replace with your actual image path
                alt="Board 2"
                width={200}
                height={200}
                className="rounded-lg shadow-lg h-auto w-auto"
              />
            </div>
            <div className="board-logo" data-aos="fade-up" data-aos-delay="200">
              <Image 
                src={fbise} // replace with your actual image path
                alt="Board 3"
                width={200}
                height={200}
                className="rounded-lg shadow-lg h-auto w-auto"
              />
            </div>
            <div className="board-logo" data-aos="fade-up" data-aos-delay="300">
              <Image 
                src={hec} // replace with your actual image path
                alt="Board 4"
                width={200}
                height={200}
                className="rounded-lg shadow-lg h-auto w-auto"
              />
            </div>
            <div className="board-logo" data-aos="fade-up" data-aos-delay="400">
              <Image 
                src={sindh} // replace with your actual image path
                alt="Board 5"
                width={200}
                height={200}
                className="rounded-lg shadow-lg h-auto w-auto"
              />
            </div>
            <div className="board-logo" data-aos="fade-up" data-aos-delay="500">
              <Image 
                src={ib} // replace with your actual image path
                alt="Board 6"
                width={200}
                height={200}
                className="rounded-lg shadow-lg h-auto w-auto"
              />
            </div>
            <div className="board-logo" data-aos="fade-up" data-aos-delay="600">
              <Image 
                src={punjab} // replace with your actual image path
                alt="Board 7"
                width={200}
                height={200}
                className="rounded-lg shadow-lg h-auto w-auto"
              />
            </div>
            <div className="board-logo" data-aos="fade-up" data-aos-delay="700">
              <Image 
                src={lhr} // replace with your actual image path
                alt="Board 8"
                width={200}
                height={200}
                className="rounded-lg shadow-lg h-auto w-auto"
              />
            </div>
          </div>
        </section>
        </main>
    
  )
}

export default Logos
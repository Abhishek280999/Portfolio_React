import React from 'react'
import Image from "../assets/img/education1.jpg";
const Education = () => {
  return (
    <section className="section bg-black" id="education" >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24 mb-3">
          <img
            className="object-cover h-54 w-[606px] md:mx-auto lg:mx-0 rounded-2xl "
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col mt-6">
             <h2 className="text-3xl  lg:text-4xl font-medium lg:font-extrabold mb-12 relative ">
             Qualification
              </h2>
              <h3 className="text-2xl lg:text-2xl font-medium lg:font-extrabold mb-3  relative">
              Electrical & Power Engineering
              </h3>
              <p className="mb-4 text-accent"> Priyadarshini College of Engineering, Nagpur - 2019-2022</p>
              <h3 className="text-3xl lg:text-2xl font-medium lg:font-extrabold mb-3  relative ">
              Diploma in Electrical Engineerings
              </h3>
              <p className="mb-4 text-accent"> Datta Meghe Institute of Engineering Technology and Research , Wardha - 2016-2019</p>
              <h3 className="text-3xl lg:text-2xl font-medium lg:font-extrabold mb-3  relative">
              SSC
              </h3>
              <p className="mb-4 text-accent"> Lok vidhlaya Wardha  - 2015-2016</p>
              <hr className="mb-8 opacity-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

'use client'
{/*Client for now, will refactor this to be server */}


import { Gothic_A1, Sanchez } from "next/font/google";
import Image from "next/image";
import { Lato } from "next/font/google";
import Cards from "./components/cards/Cards";
import { ArrowRight, Dumbbell, LineChart, Users, CheckCircle, Calendar, Activity } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Socials from "./components/social_media/socials";





export default function Home() {

  useIntersectionObserver('.hidden_transition_left');
  useIntersectionObserver('.hidden_transition_right');
  return (
    <>

      {/* Original Code Wrote - 
      <div className="mx-auto flex">
          <div className="w-full h-screen bg-sky-950" style={{display:"flex",justifyContent:"center",alignItems:"end"}}>
            <img src="JonHeadshot.svg" style= {{ width:'90%', height:'90%',objectFit:'contain'}}></img>
          </div>
      </div>
      */}

    {/* Using three divs here to be able to separate text and images, non-flex, relative positioning*/}
    <section className="bg-sky-950 w-full  max-w-[1600px] mx-auto">
      <div className="w-full h-[80vh] bg-sky-950 ml-1 relative">
        <img
          src="JonHeadshot.svg"
          alt="Headshot"
          className="w-full h-full object-contain"
          style={{width:'100%', height: '100%'}}
        />

        {/* Left Text */}
        <div className="absolute top-1/3 w-2/5        /* desktop: 40% width */
            sm:w-3/5     /* tablet: 60% */
            xs:w-full    /* phones: 100% */
            transform -translate-y-3/4 text-white text-6xl space-y-3 hidden_transition_left">
          <p className="ml-[10vh] font-black md:text-8xl sm:text-5xl xs:text-4xl">Howdy {'\u{1F920}'}</p>
          <p className="ml-[10vh] font-lato md:text-6xl sm:text-3xl xs:text-2xl hidden_transition_left">I'm Jon Barker</p>
        </div>

        {/* Right Text */}
        <div className="absolute right-1 top-1/2 w-2/5         /* desktop: 40% width */
          sm:w-3/5      /* tablet: 60% */
          xs:w-full     /* phones: 100% */
          transform -translate-y-1/2 text-white hidden_transition_right max-w-[700px]">
          <p className="md:text-5xl sm:text-3xl xs:text-2xl"> Multi-Disciplinary Engineer</p>
          <ul>
            <li className="md:text-l sm:text-base xs:text-sm">20-Time Patented Inventor with seven years of automotive experience in hardware and software</li>
            <li className="md:text-l sm:text-base xs:text-sm">Professional and personal projects showcasing:
              <ul className="list-disc list-inside marker:text-white pl-4 ">
                <li>Machine learning</li>
                <li>Data pipelines</li>
                <li>Hardware design</li>
                <li>Software development</li>
                </ul>
              </li>
          </ul> 
                
          {/*<p>7+ Years of Automotive Engineering Experience spanning hardware and software</p>
          <div>
          <p>Explore my professional and personal projects, spanning machine learning, data pipelines, hardware design, and software development</p>
          </div>*/}
          <div>
            <Socials/>
          </div>
        </div>
      </div>
      </section>

      
      {/* Accomplishments and Publications 
      TODO - Update this section to be in a component, then render here
      Lag of home page too big right now
      */}
      <section id="how-it-works" className="py-20 bg-[#b0d6dd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold font-heading text-gray-900 mb-4">
              Patents, Publications, and Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto">
              Over my 7 year career, I've been given the chance to work on incredible feats of technology
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline connecting dots */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-600 transform -translate-x-1/2"></div>
            {/* Hyperloop link https://universityresearchpark.org/badgerloops-run-for-hyperloop-glory-captures-the-attention-of-elon-musk/ */}
            <div className="space-y-12">
              <div className="relative md:flex items-center">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-sky-950  rounded-full z-10"></div>
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold font-heading mb-2 text-sky-950">2018 - F150 Lightning</h3>
                  <p className="text-gray-600">
                    My first assignment was to design the electrical architecture of the F150 Lighting prototype. Needless to say, it pulled its own weight.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden_transition_right">
                  <div className="bg-gray-100 rounded-lg p-4 md:hidden mb-3">
                    <div className="font-bold text-primary">Step 1</div>
                  </div>
                  <div className="rounded-lg overflow-hidden bg-white shadow-md transform-trans">
                    <div className="bg-gray-50 p-4 border-b flex items-center">
                      <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white mr-3">1</div>
                      <div className="font-bold text-gray-900">The First Electric F-150</div>
                    </div>
                    <div className="p-1 overflow-hidden h-[200px] flex justify-center items-center">
                      <iframe className= "justify-center mx-auto object-cover w-full h-full" 
                      src="https://www.youtube.com/embed/jAlIfWcCJdI?si=foyc0mBxf9ckh0z-" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                      
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative md:flex items-center">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-sky-950 rounded-full z-10"></div>
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right hidden_transition_left">
                  <div className="rounded-lg overflow-hidden bg-white shadow-md">
                    <div className="bg-gray-50 p-4 border-b flex items-center md:justify-center">
                      <div className="font-bold text-gray-900 md:order-1 text-right ">Mustang Mach-E</div>
                    </div>
                    {/* Mach E Image within Container */}
                    <div className="p-1 overflow-hidden h-[200px] flex justify-center items-center">
                      <img 
                        className="object-cover w-full h-full rounded-2xl" 
                        src="mache.png" 
                        alt="Description" 
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  {/* Learn how to effectively use these for mobile devices
                  <div className="bg-gray-100 rounded-lg p-4 md:hidden mb-3">
                    <div className="font-bold text-primary">Step 2</div>
                  </div> */}
                  <h3 className="text-xl font-bold font-heading mb-2 text-sky-950">2020 - Mustang Mach-E</h3>
                  <p className="text-gray-600">
                  Soon after, I served as a Battery and Integration Engineer on a dream project, the Mustang Mach-E. I diagnosed and drove to closure over 50 quality issues onboard the vehicle.
                  </p>
                </div>
              </div>
              
              <div className="relative md:flex items-center">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-sky-950 rounded-full z-10"></div>
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold font-heading mb-2 text-sky-950">2021 - Transition to Software</h3>
                  <p className="text-gray-600 text-center">
                    In 2021 I started to recognize the value of software and started to pivot my career.
                  </p>
                  <p className="text-gray-600 text-center"> Notable Technical Accomplishments:</p>
                  <ul className="text-gray-600 list-disc list-inside marker:text-white pl-6 mt-1 space-y-1 text-left">
                    <li>Developed GCP pipeline via PubSub to Bigquery to stream vehicle logger data from fleet vehicles allowing
                    realtime analysis of customer data</li>
                    <li> Implemented a vision-based regression algorithm analyze vehicle suspension dynamics to detect early-stage component faults</li>
                    <li> Advanced the development of an autoencoder algorithm accuracy by 30% utilizing sound data in autonomous
                    vehicles to detect early-stage wheel bearing faults.</li>
                  </ul>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-gray-100 rounded-lg p-4 md:hidden mb-3">
                    <div className="font-bold text-primary">Step 3</div>
                  </div>
                  <div className="rounded-lg overflow-hidden bg-white shadow-md hidden_transition_right">
                    <div className="bg-gray-50 p-4 border-b flex items-center">
                      <div className=" text-gray-900 font-bold items-center">Beginning of Coding and Youtube</div>
                    </div>
                    <div className="p-1 h-[300px]">
                      <img
                      src="coding.png" title="Coding"
                      className="object-cover w-full h-full rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative md:flex items-center">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-sky-950 rounded-full z-10"></div>
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <div className="rounded-lg overflow-hidden bg-white shadow-md">
                    <div className="bg-gray-50 p-4 border-b flex items-center md:justify-end">
                      <div className=" text-gray-900 font-bold md:order-1 align-middle">V0 of my first product</div>
                    </div>
                    <div className="p-4">
                      <div className="h-80 bg-gray-50 rounded-md flex items-center justify-center">
                       
                      <video
                        src="/smartweight_animation.mp4"
                        autoPlay
                        muted
                        className="h-full w-full object-cover"
                      />
                       
                      </div>
                      <div className="mt-2 text-sm text-gray-600 text-center md:text-right">
                        All components designed and modeled in Fusion360
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-gray-100 rounded-lg p-4 md:hidden mb-3">
                    <div className="font-bold text-primary">Step 4</div>
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-2 text-sky-950">2024+ - Startups and Beyond</h3>
                  <p className="text-gray-600">
                    I dream of building my own company, and have taken strides in making that dream reality. Shown here is a weight collar that I've designed
                    the CAD, electrical hardware, software, and algorithms to make fuction. Bringing to market in late 2024.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>More to come</div>
    </>
  );
}
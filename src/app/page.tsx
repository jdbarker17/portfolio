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
        <div className="absolute top-1/3 transform -translate-y-3/4 text-white text-6xl space-y-3 hidden_transition_left">
          <p className="ml-[10vh] font-black text-8xl">Howdy {'\u{1F920}'}</p>
          <p className="ml-[10vh] font-lato text-6xl hidden_transition_left">I'm Jon Barker</p>
        </div>

        {/* Right Text */}
        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white hidden_transition_right">
          <p className="text-5xl"> Multi-Disciplinary Engineer</p>
          <p>Bringing 7 years of professional experience to the table</p>
          <div>
          <p>Projects below span work from hardware to software including ML and Data Engineering</p>
          </div>
          <div>
            <Socials/>
          </div>
        </div>
      </div>
      </section>

        
      {/* Accomplishments and Publications */}
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
                      <div className="font-medium text-gray-900">Placeholder if I want it</div>
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
              
              <div className="relative md:flex items-center ">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-sky-950 rounded-full z-10"></div>
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right hidden_transition_left">
                  <div className="rounded-lg overflow-hidden bg-white shadow-md">
                    <div className="bg-gray-50 p-4 border-b flex items-center md:justify-center">
                      <div className="font-bold text-gray-900 md:order-1 items-center">Mustang Mach-E</div>
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
                  <h3 className="text-xl font-bold font-heading mb-2">3. Track and Log Progress</h3>
                  <p className="text-gray-600">
                    Log your completed exercises, including weights, sets, and reps. Take notes about your performance and feelings.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-gray-100 rounded-lg p-4 md:hidden mb-3">
                    <div className="font-bold text-primary">Step 3</div>
                  </div>
                  <div className="rounded-lg overflow-hidden bg-white shadow-md">
                    <div className="bg-gray-50 p-4 border-b flex items-center">
                      <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white mr-3">3</div>
                      <div className="font-medium text-gray-900">Exercise Logging</div>
                    </div>
                    <div className="p-4">
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-2 rounded-md">
                          <div className="font-medium">Bench Press</div>
                          <div className="text-sm text-gray-500">4 sets • 10-12 reps • 135 lbs</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-md">
                          <div className="font-medium">Lat Pulldown</div>
                          <div className="text-sm text-gray-500">3 sets • 12 reps • 120 lbs</div>
                        </div>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative md:flex items-center">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-sky-950 rounded-full z-10"></div>
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <div className="rounded-lg overflow-hidden bg-white shadow-md">
                    <div className="bg-gray-50 p-4 border-b flex items-center md:justify-end">
                      <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white mr-3 md:order-2 md:ml-3 md:mr-0">4</div>
                      <div className="font-medium text-gray-900 md:order-1">Performance Analytics</div>
                    </div>
                    <div className="p-4">
                      <div className="h-32 bg-gray-50 rounded-md flex items-center justify-center">
                        <LineChart className="h-16 w-16 text-primary opacity-50" />
                      </div>
                      <div className="mt-2 text-sm text-gray-600 text-center md:text-right">
                        Visualize progress over time with detailed charts
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-gray-100 rounded-lg p-4 md:hidden mb-3">
                    <div className="font-bold text-primary">Step 4</div>
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-2">4. Review Analytics & Adjust</h3>
                  <p className="text-gray-600">
                    Analyze your performance data to identify trends and areas for improvement. Trainers can provide feedback based on real data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Below to hold all of the Project I've build */}  
      <section className="w-full mx-auto bg-yellow-50" >
        <div className="text-5xl font-extrabold flex justify-center bg-yellow-50"> Projects</div>
        <div className= "project_card_holder flex justify-center space-x-10 mt-6 mb-6">
          
          {/* Project #1 */}
          <div> 
            <Cards image="hamms.jpeg" text="test1"/>
          </div>
          

           {/* Project #2 */}
          <div>
            <Cards image="hamms.jpeg" text="test1"/>
          </div>

           {/* Project #3 */}
          <div>
            <Cards image="hamms.jpeg" text="test1"/>
          </div>
        </div>
      </section>


    </>
  );
}
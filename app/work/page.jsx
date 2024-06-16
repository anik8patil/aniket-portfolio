"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project-4",
    description: "Netflix home page with react using TMDb and movie trailer API. Its a full-fledged react application that includes react features like hooks, asynchronous functional, reusable components, HTML & CSS the developed application is a look-alike of Netflix.",
    stack: [{name: "Html"}, {name: "Css"}, {name: "Javascript"}, {name: "firebase"}, {name: "react.js"}],
    image: "/assets/work/rp.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Project-3",
    description: "This is a Amazon Shopping Site's clone version created using ReactJs. Here we can able to add your items to the cart and also able to purchase the products using your card via stripe payment method.",
    stack: [{name: "Html"}, {name: "Css"}, {name: "Javascript"}, {name: "firebase"}, {name: "react.js"}],
    image: "/assets/work/amazon.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "ML",
    title: "Project-4",
    description: "This Project is to solve the problem with fake news. In this we have used two datasets named Fake and True from Kaggle. You can download the file from here {https://www.kaggle.com/clmentbisaillon/fake-and-real-news-dataset I have used five classifiers in this project the are Naive Bayes, Random Forest, Decision Tree, SVM, Logistic Regression.",
    stack: [{name: "Machine Learning"}, {name: "Tfid‐fVectorizer"}],
    image: "/assets/work/fake.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "MTech",
    title: "Project-1",
    description: "Design and evaluation of a real‐time UWOC system. The performance is analyzed by measuring the SER, considering different transmit powers and distances, to understand the communication efficiency",
    stack: [{name: "UWOC"}, {name: "IoUT"}, {name: "Arduino Mega2560"}],
    image: "/assets/work/exp.jpeg",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "BTech",
    title: "Project-2",
    description: "The purpose of this project is to sense the water level in river beds and check if they are in normal condition. If they reach beyond the limit, then it alerts people through LED signals and buzzer sound. Also it alerts people through Sms and Emails alerts when the water level reaches beyond the limit.",
    stack: [{name: "Arduino Mega2560"}, {name: "IoT"}],
    image: "/assets/work/flood.jpg",
    live: "",
    github: "",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*ouline num*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*project category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/*project des*/}
              <p className="text-white/60">{project.description}</p>
              {/*stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/*border*/}
              <div className="border border-white/20"></div>
              {/*button*/}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*github*/}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>github repos</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div >
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image 
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              })}
              {/*slider button*/}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
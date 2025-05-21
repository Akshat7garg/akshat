import React from 'react'
import { about, socialLinks } from '@/constants/Data'
import { motion } from 'motion/react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function About() {
  const animationDelay = 0.8;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='about'
      className='relative scroll-mt-16 w-full px-8 md:px-[8%] py-8 overflow-x-clip'
    >
      <div
        class="absolute -z-20 top-10 left-10 w-72 h-72 bg-teal-600 rounded-full opacity-30 blur-3xl pointer-events-none"
      ></div>
      <div
        class="absolute -z-20 bottom-20 right-20 w-72 h-72 bg-teal-600 rounded-full opacity-30 blur-3xl pointer-events-none"
      ></div>

      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-center sm:text-lg'
      >
        {about.subheading}
      </motion.h4>

      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className='text-center text-4xl sm:text-5xl font-semibold bg-gradient-to-b from-teal-50 via-teal-200 to-teal-400 bg-clip-text text-transparent py-2'
      >
        {about.heading}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className='flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-16 my-12 lg:my-16'
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className='w-64 sm:w-80 rounded-3xl max-w-none shadow-[0px_6px_16px_#000]'
        >
          <img
            src={about.avatarURL}
            alt={about.avatarAlt}
            className='w-full rounded-xl'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className='flex-1'
        >
          <p className='mb-8 w-full text-center lg:text-start text-teal-100' >{about.description}</p>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className='p-[2px] relative max-w-2xl mx-auto rounded-xl overflow-hidden flex items-center justify-center mb-8'
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatType: "loop" }}
              className='absolute h-[50%] w-[200%] bg-teal-600'
            ></motion.div>

            <div
              className='w-full px-6 py-4 rounded-xl relative z-10 bg-black flex items-center justify-center flex-col gap-4 cursor-default'
            >
              <div className='flex items-center justify-center gap-2 text-xl font-bold relative z-20' >
                <about.education.icon className='h-11 w-11 text-teal-200' />
                <h2 className='bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent' >
                  {about.education.title}
                </h2>
              </div>

              <div className='w-full flex flex-col items-start justify-center gap-2 relative z-20' >
                <div className='w-full flex sm:items-center justify-between flex-col sm:flex-row gap-1' >
                  <h3 className='font-semibold' >{about.education.college}</h3>
                  <p className='sm:w-fit text-xs text-end text-teal-500 font-medium' >{about.education.duration}</p>
                </div>

                <h4 className='text-sm md:text-[16px] bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent' >
                  {about.education.degree}
                </h4>
              </div>

              <p className='text-center relative z-20 text-sm md:text-[16px] font-medium bg-gradient-to-r from-teal-100 to-teal-200 bg-clip-text text-transparent' >
                {about.education.grade}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className='flex items-center justify-start gap-4 sm:gap-6'
          >
            <h2 className='text-lg md:text-xl font-bold'>Socials:</h2>

            <div className='flex items-center justify-start gap-2 sm:gap-4'>
              {socialLinks.map((item, idx) => {
                const currDelay = animationDelay + idx * 0.12;

                return (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: currDelay }}
                    viewport={{ once: true }}
                    key={idx}
                  >
                    <TooltipProvider>
                      <Tooltip delayDuration={200} >
                        <TooltipTrigger
                          asChild
                          className='flex items-center justify-center w-12 aspect-square border-2 border-teal-700 bg-[rgba(0,0,0,0.9)] bg-radial from-teal-950 to-transparent rounded-lg p-2 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-[0px_6px_16px_#000]'
                        >
                          <a
                            href={item.url}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <item.icon />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent
                          className='bg-black blur-bg backdrop-blur-xl font-semibold text-sm text-teal-100 shadow-[0px_0px_6px_#00d5be]'
                        >
                          {item.title}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
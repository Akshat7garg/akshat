import React from 'react'
import { skills } from '@/constants/Data'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from 'motion/react'

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='skills'
      className='relative scroll-mt-16 w-full px-4 sm:px-8 md:px-[8%] py-8 overflow-x-clip'
    >
      <div
        className='absolute -z-1 top-1/3 left-1/2 w-80 h-80 bg-teal-600 opacity-30 rounded-full blur-3xl transform -translate-x-1/2 pointer-events-none'
      ></div>

      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-center sm:text-lg'
      >
        {skills.subheading}
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className='text-center text-4xl sm:text-5xl font-semibold bg-gradient-to-b from-teal-50 via-teal-200 to-teal-400 bg-clip-text text-transparent py-2'
      >
        {skills.heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className='text-center max-w-2xl mx-auto text-teal-100 mt-3'
      >
        {skills.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className='max-w-4xl mx-auto flex items-center justify-center flex-wrap gap-4 md:gap-8 my-12 lg:my-16'
      >
        {skills.stack.map(({ name, icon }, idx) => {
          return (
            <TooltipProvider key={idx} >
              <Tooltip delayDuration={200} >
                <TooltipTrigger
                  asChild
                  className='flex items-center justify-center w-12 sm:w-16 aspect-square border-2 border-teal-700 bg-[rgba(0,0,0,0.9)] bg-radial from-teal-950 to-transparent rounded-xl p-2 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[0px_6px_16px_#000]'
                >
                  <img
                    src={`/icons/${icon}`}
                    alt={name}
                  />
                </TooltipTrigger>
                <TooltipContent
                  className='bg-black blur-bg backdrop-blur-xl font-semibold text-sm text-teal-100 shadow-[0px_0px_6px_#00d5be]'
                >
                  {name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Skills
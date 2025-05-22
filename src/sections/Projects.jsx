import React from 'react'
import { projects } from '@/constants/Data'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import { motion } from 'motion/react'

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='projects'
      className='relative scroll-mt-16 w-full px-4 sm:px-8 md:px-[8%] py-8 overflow-x-clip'
    >
      <div
        class="absolute -z-100 top-10 left-10 w-72 h-72 bg-teal-600 rounded-full opacity-30 blur-3xl pointer-events-none"
      ></div>
      <div
        className='absolute -z-1 top-1/3 left-1/2 w-80 h-80 bg-teal-600 opacity-30 rounded-full blur-3xl transform -translate-x-1/2 pointer-events-none'
      ></div>
      <div
        class="absolute -z-100 bottom-20 right-20 w-72 h-72 bg-teal-600 rounded-full opacity-30 blur-3xl pointer-events-none"
      ></div>

      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-center sm:text-lg'
      >
        {projects.subheading}
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className='text-center text-4xl sm:text-5xl font-semibold bg-gradient-to-b from-teal-50 via-teal-200 to-teal-400 bg-clip-text text-transparent py-2'
      >
        {projects.heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className='text-center max-w-2xl mx-auto text-teal-100 mt-3'
      >
        {projects.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 my-12 lg:my-16'
      >
        {projects.myWork.map(({ title, description, stack, link }, index) => {
          return (
            <CardSpotlight
              key={index}
              href={link}
              className='flex items-start justify-between flex-col gap-8 hover:shadow-[0px_6px_16px_#000] transition-all duration-300 ease-in-out'
            >
              <h2 className='w-full text-2xl font-bold text-center bg-gradient-to-r from-teal-200 via-teal-400 to-teal-600 bg-clip-text text-transparent relative z-20' >
                {title}
              </h2>
              <p className='text-sm text-teal-100 relative z-20' >{description}</p>

              <div className='flex gap-2 flex-wrap relative z-20' >
                {stack.map((item, idx) => {
                  return (
                    <span
                      key={idx}
                      className='text-xs py-1 px-2 rounded-md bg-teal-950'
                    >
                      {item}
                    </span>
                  )
                })}
              </div>
            </CardSpotlight>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Projects
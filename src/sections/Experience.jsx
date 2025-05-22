import React from 'react'
import { experiences } from '@/constants/Data'
import { motion } from 'motion/react'

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='experiences'
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
        {experiences.subheading}
      </motion.h4>

      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className='text-center text-4xl sm:text-5xl font-semibold bg-gradient-to-b from-teal-50 via-teal-200 to-teal-400 bg-clip-text text-transparent py-2'
      >
        {experiences.heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className='text-center max-w-2xl mx-auto text-teal-100 mt-3'
      >
        {experiences.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className='flex w-full flex-col lg:flex-row items-center justify-center lg:gap-12 my-4'
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className='w-64 sm:w-80 max-w-none'
        >
          <img
            src={experiences.error.image}
            alt={experiences.error.alt}
            loading='lazy'
            className='w-full drop-shadow-[0px_0px_6px_#000]'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className='flex-1 flex items-center justify-center flex-col gap-4 max-w-2xl'
        >
          <div className='w-full flex items-center justify-center gap-2 text-xl font-bold' >
            <experiences.error.icon className='h-11 w-11 text-teal-200' />
            <h2 className='bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent' >
              {experiences.error.heading}
            </h2>
          </div>

          <p className='w-full text-teal-100' >{experiences.error.content}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Experience
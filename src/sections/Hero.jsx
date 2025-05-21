import React from 'react'
import { introduction } from '@/constants/Data'
import { Download, ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight-new'

function Hero() {
  return (
    <div
      id='home'
      className='w-11/12 max-w-3xl h-screen mx-auto pt-18 text-center flex items-center justify-center flex-col gap-2 sm:gap-4 px-4 lg:px-0'
    >
      <Spotlight />

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
      >
        <img
          src={introduction.avatarURL}
          alt={introduction.avatarAlt}
          className='h-28 sm:h-32 rounded-full'
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className='text-lg sm:text-xl mt-2 md:mt-4'
      >
        {introduction.subheading}
      </motion.h3>

      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
        className='font-semibold text-3xl sm:text-4xl md:text-5xl py-1 md:py-2 bg-gradient-to-b from-teal-50 via-teal-200 to-teal-500 bg-clip-text text-transparent'
      >
        <h1>{introduction.heading1}</h1>
        <h1>{introduction.heading2}</h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        viewport={{ once: true }}
        className='max-w-2xl mx-auto text-teal-100'
      >
        {introduction.tagline}
      </motion.p>

      <div
        className='mt-2 md:mt-4 flex items-center justify-center flex-col sm:flex-row gap-4'
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.6, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className='py-2 px-8 flex items-center justify-center gap-1 text-teal-100 hover:text-teal-50 border-2 border-teal-700 rounded-full transition-all duration-400 ease-in-out bg-gradient-to-r from-black/45 via-black/45 to-teal-800 bg-[length:200%_200%] bg-left hover:bg-right'
          >
            <span>Contact Me</span>
            <ArrowRight />
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          <a
            href={introduction.resume.link}
            target='_blank'
            rel='noopener noreferrer'
            className='py-2 px-8 flex items-center justify-center gap-1 text-teal-50 border-2 border-teal-700 rounded-full transition-all duration-400 ease-in-out bg-gradient-to-r from-teal-800 via-black/45 to-teal-800 bg-[length:200%_200%] bg-left hover:bg-right'
          >
            <span>{introduction.resume.text}</span>
            <Download />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
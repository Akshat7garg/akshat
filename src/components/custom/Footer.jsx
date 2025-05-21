import React from 'react'
import { details, socialLinks } from '@/constants/Data'
import { Mail } from 'lucide-react'

function Footer() {
  return (
    <div className='mt-8'>
      <div className='text-center flex items-center justify-center flex-col'>
        <a
          href='#home'
          className='text-3xl font-bold'
        >
          {details.name}
          <span className='text-4xl text-teal-600' >.</span>
        </a>
        <p className='w-max flex items-center gap-2 mx-auto text-teal-100 text-sm'>
          <Mail className='w-5' />
          <span>{details.email}</span>
        </p>
      </div>

      <div className='text-center lg:flex items-center text-teal-100 justify-between border-t-2 border-teal-700 mx-8 sm:mx-[8%] mt-12 py-6'>
        <p>© 2025 {details.fullName}. All rights reserved</p>

        <div className='flex items-center justify-center gap-4 sm:gap-8 mt-4 lg:mt-0'>
          {socialLinks.map(({ title, url }, index) => {
            return (
              <a
                key={index}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-teal-100 transition-all duration-300 ease-in-out hover:text-teal-50'
              >
                {title}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer
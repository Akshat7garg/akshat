import React from 'react'
import { contact } from '@/constants/Data'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import { toast } from "sonner"
import { motion } from 'motion/react'

function Contact() {

  const [sending, setSending] = React.useState(false);
  const [message, setMessage] = React.useState("Hello, I want to work on a project with you.");

  const onSubmit = async (event) => {
    event.preventDefault();
    setSending(true);

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();
        toast.success("Your mail has been sent successfully.");
      } else {
        console.error("Submission error:", data);
        toast.error("Failed to send mail. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const resetMessage = () => {
    setTimeout(() => {
      setMessage("Hello, I want to work on a project with you.");
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='contact'
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
        {contact.subheading}
      </motion.h4>

      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className='text-center text-4xl sm:text-5xl font-semibold bg-gradient-to-b from-teal-50 via-teal-200 to-teal-400 bg-clip-text text-transparent py-2'
      >
        {contact.heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className='text-center max-w-2xl mx-auto text-teal-100 mt-3'
      >
        {contact.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className='relative w-full grid grid-cols-1 lg:grid-cols-2 items-start gap-12 lg:gap-16 xl:gap-24 my-12 lg:my-16'
      >
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className='flex items-center justify-center flex-col gap-4 xl:gap-6'
        >
          <div className='flex items-center justify-center gap-2 text-2xl font-bold' >
            <contact.mail.icon className='min-h-11 min-w-11 text-teal-200' />
            <h2 className='bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent' >
              {contact.mail.title}
            </h2>
          </div>

          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6 mt-4 xl:mt-2' >
            <input
              type="text"
              placeholder='Enter your name'
              className='text-teal-50 p-3 outline-none border-1 border-teal-700 rounded-md bg-[rgba(0,0,0,0.9)]'
              name="name"
              required
            />
            <input
              type="email"
              placeholder='Enter your email'
              className='text-teal-50 p-3 outline-none border-1 border-teal-700 rounded-md bg-[rgba(0,0,0,0.9)]'
              name="email"
              required
            />
          </div>

          <textarea
            rows='6'
            placeholder='Enter your message'
            className='w-full text-teal-50 p-4 outline-none border-1 border-teal-700 rounded-md bg-[rgba(0,0,0,0.9)] mb-4 xl:mb-2'
            name="message"
            required
          ></textarea>

          <button
            type='submit'
            disabled={sending}
            className={`py-2 px-8 flex items-center justify-center gap-1 text-teal-100 hover:text-teal-50 border-2 border-teal-700 rounded-full transition-all duration-400 ease-in-out bg-gradient-to-r from-teal-800 via-[rgba(0,0,0,0.9)] to-teal-800 bg-[length:200%_200%] bg-left 
            ${sending ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-right'}`}
          >
            {
              sending ? (
                <>
                  <Loader2 className='animate-spin' />
                  Sending...
                </>
              ) : (
                <>
                  Send Mail
                  <ArrowUpRight />
                </>
              )
            }
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className='hidden lg:block absolute left-[50%] transform -translate-x-1/2 h-full w-[2px] bg-teal-700'
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className='flex items-center justify-center flex-col gap-4 xl:gap-6'
        >
          <div className='flex items-center justify-center gap-2 text-2xl font-bold relative z-20' >
            <contact.whatsapp.icon className='min-h-11 min-w-11 text-teal-200' />
            <h2 className='bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent' >
              {contact.whatsapp.title}
            </h2>
          </div>

          <div className='flex items-center justify-center flex-col gap-3.5 mt-4 xl:mt-2' >
            <h2 className='text-xl font-semibold' >
              {contact.whatsapp.head}
            </h2>
            <p className='text-teal-100' >
              {contact.whatsapp.text}
            </p>
          </div>

          <textarea
            rows='4'
            placeholder='Enter your message'
            className='w-full text-teal-50 p-4 outline-none border-1 border-teal-700 rounded-md bg-[rgba(0,0,0,0.9)] my-4 xl:my-2'
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <a
            href={`https://wa.me/${import.meta.env.VITE_DETAILS_CONTACT}?text=${message}`}
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => resetMessage()}
            className='py-2 px-8 flex items-center justify-center gap-1 text-teal-100 hover:text-teal-50 border-2 border-teal-700 rounded-full transition-all duration-400 ease-in-out bg-gradient-to-r from-teal-800 via-[rgba(0,0,0,0.9)] to-teal-800 bg-[length:200%_200%] bg-right hover:bg-left'
          >
            Message Me
            <ArrowUpRight />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact
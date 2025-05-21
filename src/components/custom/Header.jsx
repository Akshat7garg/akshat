import React from 'react'
import { details } from '@/constants/Data'
import { ArrowUpRight } from 'lucide-react'

function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScroll, setIsScroll] = React.useState(false);
    const sideMenuRef = React.useRef();

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 20) {
                setIsScroll(true);
            }
            else {
                setIsScroll(false);
            }
        })
    }, []);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16.5rem)';
        setIsOpen(true);
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16.5rem)';
        setIsOpen(false);
    }

    return (
        <div
            className={`w-full px-8 md:px-[8%] flex items-center justify-between fixed z-50 border-b-2 transition-all duration-300 ease-in-out 
            ${isScroll ? 'blur-bg backdrop-blur-xl bg-[rgb(0,0,0,0.9)] border-teal-700 py-4' : 'border-transparent pt-8'}`}
        >
            <a
                href='#home'
                className='text-3xl font-bold'
            >
                {details.name}
                <span className='text-4xl text-teal-600' >.</span>
            </a>

            <div
                className={`hidden md:flex items-center justify-center gap-5 xl:gap-8 text-teal-100 py-2 px-8 xl:px-12 border-2 rounded-xl lg:rounded-full transition-all duration-300 ease-in-out 
                ${!isScroll ? 'border-teal-700' : 'border-transparent'}`}
            >
                <a
                    className="hidden xl:block transition-all duration-300 ease-in-out hover:text-teal-50"
                    href='#home'
                >Home</a>
                <a
                    className="transition-all duration-300 ease-in-out hover:text-teal-50"
                    href='#about'
                >About</a>
                <a
                    className="transition-all duration-300 ease-in-out hover:text-teal-50"
                    href='#skills'
                >Skills</a>
                <a
                    className="transition-all duration-300 ease-in-out hover:text-teal-50"
                    href='#experiences'
                >Experiences</a>
                <a
                    className="transition-all duration-300 ease-in-out hover:text-teal-50"
                    href='#projects'
                >Projects</a>
                <a
                    className="lg:hidden transition-all duration-300 ease-in-out hover:text-teal-50"
                    href='#contact'
                >Contact</a>
            </div>

            <a
                href="#contact"
                className='hidden lg:flex items-center justify-center gap-1 text-teal-100 py-2 px-8 border-2 border-teal-700 rounded-full transition-all duration-400 ease-in-out bg-gradient-to-r from-teal-800 via-transparent to-transparent bg-[length:200%_200%] bg-right hover:bg-left hover:text-teal-50'
            >
                <span>Contact</span>
                <ArrowUpRight />
            </a>

            <button
                className='h-12 w-12 relative flex items-end justify-center flex-col gap-1 cursor-pointer md:hidden'
                onClick={openMenu}
            >
                <span className='bg-gradient-to-r from-teal-50 to-teal-700 h-1 w-[70%] rounded-md' ></span>
                <span className='bg-gradient-to-r from-teal-50 to-teal-700 h-1 w-[40%] rounded-md' ></span>
                <span className='bg-gradient-to-r from-teal-50 to-teal-700 h-1 w-[70%] rounded-md' ></span>
            </button>

            <div
                className={`h-screen w-screen fixed md:hidden inset-0 z-5 bg-black/80 transition-all 
            ${isOpen ? 'block' : 'hidden'}`}
                onClick={closeMenu}
            ></div>

            <div
                ref={sideMenuRef}
                className='h-screen w-66 flex md:hidden items-start justify-start flex-col gap-4 py-4 pl-10 pr-8 fixed -right-66 top-0 bottom-0 bg-gradient-to-l from-teal-700 to-teal-950 transition-all duration-600 ease-in-out z-10 border-l-2 border-teal-600'
            >
                <div className='flex items-center justify-end w-full mb-4' >
                    <button
                        className='h-12 w-12 relative flex items-center justify-center flex-col gap-1 cursor-pointer'
                        onClick={closeMenu}
                    >
                        <span className='absolute bg-gradient-to-r from-teal-100 to-teal-500 h-1 w-[70%] rounded-md rotate-45' ></span>
                        <span className='absolute bg-gradient-to-r from-teal-100 to-teal-500 h-1 w-[70%] rounded-md -rotate-45' ></span>
                    </button>
                </div>

                <a href='#' onClick={closeMenu} >Home</a>
                <a href='#about' onClick={closeMenu} >About</a>
                <a href='#skills' onClick={closeMenu} >Skills</a>
                <a href='#experiences' onClick={closeMenu} >Experiences</a>
                <a href='#projects' onClick={closeMenu} >Projects</a>
                <a href='#contact' onClick={closeMenu} >Contact me</a>
            </div>
        </div>
    )
}

export default Header
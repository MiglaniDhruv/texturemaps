import Link from 'next/link';
import Image from 'next/image';
import arrow_gradient from "../../../public/images/arrow_gradient.png"
import React from 'react'

// Get latest year dynamically
const currentYear = new Date().getFullYear();

// Navigation Links Data
const navigationLinks = [
    {
        name: "Quick Links",
        inputs: [
            { link: "Home", href: "/" },
            { link: "About", href: "/about-us" },
            { link: "Contact", href: "/contact" },
        ]
    },
    {
        name: "Connect",
        inputs: [
            { link: "LinkedIn", href: "https://www.linkedin.com/in/sachin-sureka-811845152/" },
            { link: "Instagram", href: "https://www.instagram.com/sachin_sureka/" },
        ]
    },
    {
        name: "Learn & Support",
        inputs: [
            { link: "FAQ", href: "/faq" },
            { link: "Privacy Policy", href: "/privacy-policy" },
            { link: "Terms & Conditions", href: "/terms-and-conditions" },
        ]
    },
]

const Footer = () => {
    return (
        <section className='w-full bg-linear-to-tr from-[#0772DC] via-[#031221] to-[#0772DC]/30 rounded-2xl md:rounded-3xl lg:rounded-4xl blur-in-3xl'>
            <footer className='relative w-full border border-[#D9D9D9] pt-[60] md:pt-20 lg:pt-[100px] px-8 md:px-12 lg:px-[70px] pb-3 md:pb-4 lg:pb-5 rounded-3xl backdrop-blur-3xl'>
                <div className='flex flex-col md:flex-row justify-between gap-20'>
                    <div className='w-[800px] max-w-full grid grid-cols-2 sm:grid-cols-3 gap-y-6'>
                        {
                            navigationLinks.map((data, index) => (
                                <div className='flex flex-col gap-2 md:gap-3.5' key={index}>
                                    <p className='text-white font-bold text-base md:text-[16.5px] lg:text-[17px]'> {data.name} </p>
                                    <div className='flex flex-col leading-snug'>
                                        {data.inputs.map((item, idx) => (
                                            <Link href={`${item.href}`} key={idx}>
                                                <span className='font-medium text-white hover:text-white/90 hover:underline transition-all duration-200 ease-in-out text-sm md:text-[15px] lg:text-base'> {item.link} </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className='flex flex-col justify-start items-start'>
                        <h1 className='font-extrabold text-white text-5xl md:text-6xl'> Let&apos;s Talk ! </h1>
                        <Link href={"contact"} className='mt-2'>
                            <Image src={arrow_gradient} alt='arrow' height={1000} width={1000} className='h-[55px] sm:h-[60px] md:h-[65px] lg:h-[70px] w-auto' />
                        </Link>
                    </div>
                </div>

                {/*  Banner tagline @Copyright */}
                <div className='w-full justify-center items-center text-center mt-[50px] sm:mt-[60px] md:mt-[70px] lg:mt-20'>
                    <p className='font-medium text-xs sm:text-sm md:text-base text-white'>{currentYear} @ Texture Maps. All Rights reserved</p>
                </div>
            </footer>
        </section>
    )
}

export default Footer
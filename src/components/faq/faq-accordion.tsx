"use client"

import React, { useState } from 'react'
import Container from '@/style/Container'
import { Plus, Minus } from 'lucide-react'
import { FAQdata } from '../../../jsons/faq-data'
import { WateryReveal } from '@/style/SmoothReveal'

interface FAQItem {
    question: string
    answer: string
}

const FaqAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleToggle = (index: number): void => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
    }

    return (
        <Container>
            <section className='w-full bg-radial from-[#0772DC] via-[#0920371A] to-[#02100E66] mt-8 sm:mt-10 md:mt-14 lg:mt-16 rounded-2xl md:rounded-3xl lg:rounded-4xl blur-in-3xl shadow-[1px_1px_20px_#0772DC]'>
                <div className='flex flex-col justify-center items-center text-center bg-[#09203733] backdrop-blur-2xl p-4 sm:p-6 rounded-2xl md:rounded-3xl lg:rounded-4xl gap-y-6 sm:gap-y-7 md:gap-y-8 lg:gap-y-9'>
                    {FAQdata.map((faqData: FAQItem, index: number) => {
                        const isOpen = openIndex === index;
                        return (
                            <div className='flex flex-col gap-0 max-w-[1100px] w-full' key={index}>
                                {/* Question */}
                                <div
                                    className={`flex flex-row gap-x-2 justify-between items-center text-start px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 ${isOpen
                                            ? 'rounded-t-md sm:rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl'
                                            : 'rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl transition-all duration-300 delay-200'} 
                                            cursor-pointer bg-white/5 backdrop-blur-md border border-white/10`}
                                    onClick={() => handleToggle(index)}
                                >
                                    <WateryReveal>
                                        <span className='text-neutral-200 font-semibold text-sm sm:text-base md:text-[17px] lg:text-[19px]'>
                                        {faqData.question}
                                    </span>
                                    </WateryReveal>
                                    <span className='text-white bg-black/15 p-2 rounded-full hover:bg-black/30 transition-all ease-in-out duration-200'>
                                        {isOpen ? <Minus className='h-3.5 sm:h-4.5 md:h-5 lg:h-5.5 w-auto' /> : <Plus className='h-3.5 sm:h-4.5 md:h-5 lg:h-5.5 w-auto' />}
                                    </span>
                                </div>

                                {/* Answer */}
                                <div className={`
                                    w-full text-start text-[#D9D9D9] px-4 sm:px-6 lg:px-10 
                                    bg-black/25 backdrop-blur-md border border-white/10 
                                    text-xs sm:text-sm md:text-base lg:text-[17px]
                                    overflow-hidden transition-all duration-500 ease-in-out
                                    ${isOpen
                                        ? 'max-h-[500px] opacity-100 py-3.5 sm:py-4 md:py-5 lg:py-5.5 rounded-b-md sm:rounded-b-lg md:rounded-b-xl lg:rounded-b-2xl'
                                        : 'max-h-0 opacity-0 py-0 border-0'}
                                `}>
                                    {faqData.answer}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </Container>
    )
}

export default FaqAccordion
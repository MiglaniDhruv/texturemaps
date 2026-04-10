import React from 'react'
import Image from 'next/image'
import modelsCombined from "../../../public/images/models-combined.png"
import Container from '@/style/Container'
import { WateryReveal } from '@/style/SmoothReveal'

const ModelsGroupBanner = () => {
    return (
       <section className='w-full flex flex-col justify-center items-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 overflow-hidden'>
            <WateryReveal>
                <div className="w-full flex justify-center items-center overflow-hidden px-2 sm:px-0">
                    <div className="relative flex justify-center items-center mx-auto translate-x-[2%] sm:translate-x-[2%] md:translate-x-[4%] -translate-y-[16%] sm:-translate-y-[8%] md:-translate-y-[3%]">
                        <Image
                            src={modelsCombined}
                            alt='models group banner'
                            height={1500}
                            width={2500}
                            className='h-auto object-contain w-[95vw] sm:w-[100vw] md:w-[110vw]'
                            style={{ maxWidth: '2400px' }}
                            priority
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1600px"
                        />
                    </div>
                </div>
            </WateryReveal>

            {/* Glowing Shadown Boxes */}
            <Container>
                <div className='grid grid-cols-3 gap-2 xs:gap-3 sm:gap-6 md:gap-10 lg:gap-[60px] mt-[-27%]'>
                    <div className='bg-linear-to-b from-[#0772DC80] to-[#73737300] h-[120px] xs:h-[150px] sm:h-[200px] md:h-[350px] lg:h-[600px] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl backdrop-blur-sm shadow-[0_-5px_10px_#0772DC,0_0_5px_#0772DC] sm:shadow-[0_-10px_20px_#0772DC,0_0_10px_#0772DC] blur-[20%] translate-y-[50%]'></div>
                    <div className='bg-linear-to-b from-[#0772DC80] to-[#73737300] h-[120px] xs:h-[150px] sm:h-[200px] md:h-[350px] lg:h-[600px] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl backdrop-blur-sm shadow-[0_-5px_10px_#0772DC,0_0_5px_#0772DC] sm:shadow-[0_-10px_20px_#0772DC,0_0_10px_#0772DC] blur-[20%] translate-y-[35%]'></div>
                    <div className='bg-linear-to-b from-[#0772DC80] to-[#73737300] h-[120px] xs:h-[150px] sm:h-[200px] md:h-[350px] lg:h-[600px] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl backdrop-blur-sm shadow-[0_-5px_10px_#0772DC,0_0_5px_#0772DC] sm:shadow-[0_-10px_20px_#0772DC,0_0_10px_#0772DC] blur-[20%] translate-y-[50%]'></div>
                </div>
            </Container>
        </section>
    )
}

export default ModelsGroupBanner
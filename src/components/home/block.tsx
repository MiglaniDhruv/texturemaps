import Container from '@/style/Container'
import { WateryReveal } from '@/style/SmoothReveal'
import React from 'react'

type BlockContainerProps = {
  title: string
  content: string
  classname: string
  bulletsHeading?: string
  bullets?: string[]
  fontClass?: string
}

const BlockContainer = ({ title, content, classname, bulletsHeading, bullets, fontClass }: BlockContainerProps) => {
  return (
    <Container>
      <WateryReveal>
        <div className={classname}>
          <h1
            className={`${fontClass} font-semibold text-[#1A6FD4] text-2xl md:text-3xl lg:text-4xl `}
            // style={{
            //   backgroundImage: "linear-gradient(to bottom, #4A90D9 0%, #1E4F8F 100%, #0A1628 0%)",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            // }}
          >
            {title}
          </h1>

          <p className="font-normal text-white leading-snug text-sm sm:text-base md:text-[18px] lg:text-[20px] mt-5 sm:mt-6 md:mt-7">
            {content}
          </p>

          {bulletsHeading && (
            <p className={`${fontClass} font-normal text-white text-sm sm:text-base md:text-[18px] lg:text-[20px] mt-4`}>
              {bulletsHeading}
            </p>
          )}

          {bullets && bullets.length > 0 && (
            <ul className="mt-2 list-disc pl-5 text-white font-normal text-sm sm:text-base md:text-[18px] lg:text-[20px] space-y-2">
              {bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </WateryReveal>
    </Container>
  )
}

export default BlockContainer
import React from 'react'
import Image from 'next/image'
import modelsCombined from "../../../public/images/ww.png"
import Container from '@/style/Container'
import { WateryReveal } from '@/style/SmoothReveal'

// ============================================================
// 🎛️  CONTROLS — change these values only
// ============================================================
const config = {
  // Image width per breakpoint
  mobile_size:  '110.90vw', // 📱 mobile  (<640px)
  tablet_size:  '95vw',     // 📟 tablet  (640px–1023px)
  desktop_size: '110vw',    // 🖥️  desktop (1024px+)
  max_size:     '1800px',   // absolute max cap

  // Image vertical position (negative = up, positive = down)
  mobile_y:  '10%',   // 📱 mobile  up/down
  tablet_y:  '20%',    // 📟 tablet  up/down
  desktop_y: '12%',   // 🖥️  desktop up/down

  // Glow box — MOBILE (<640px)
  mobile_glow_top:    '22%',
  mobile_glow_bottom: '7%',
  mobile_glow_left:   '40%',
  mobile_glow_right:  '40.20%',

  // Glow box — TABLET (640px–1023px)
  tablet_glow_top:    '32%',
  tablet_glow_bottom: '-3%',
  tablet_glow_left:   '40%',
  tablet_glow_right:  '40.20%',

  // Glow box — DESKTOP/LAPTOP (1024px+)
  desktop_glow_top:    '25%',
  desktop_glow_bottom: '6%',
  desktop_glow_left:   '40.20%',
  desktop_glow_right:  '40.30%',

  // Glow boxes bottom strip vertical position
  mobile_strip_mt:  '-8%',
  tablet_strip_mt:  '-15%',
  desktop_strip_mt: '-32%',
}
// ============================================================

const ModelsGroupBanner = () => {
    return (
       <section className='w-full flex flex-col justify-center items-center mt-6 sm:mt-8 md:mt-10 lg:mt-12'>
            <WateryReveal>
                <div className="w-full flex justify-center items-center px-2 sm:px-0">
                    <div className="relative flex justify-center items-center mx-auto">
                        <style>{`
                            .models-img { width: ${config.mobile_size}; transform: translateY(${config.mobile_y}); }
                            @media (min-width: 640px)  { .models-img { width: ${config.tablet_size};  transform: translateY(${config.tablet_y}); } }
                            @media (min-width: 1024px) { .models-img { width: ${config.desktop_size}; transform: translateY(${config.desktop_y}); } }
                        `}</style>
                        <Image
                            src={modelsCombined}
                            alt='models group banner'
                            height={1500}
                            width={2500}
                            className='models-img h-auto object-contain'
                            style={{ maxWidth: config.max_size, mixBlendMode: 'lighten' }}
                            priority
                            sizes={`(max-width: 640px) ${config.mobile_size}, (max-width: 1024px) ${config.tablet_size}, ${config.max_size}`}
                        />

                        {/* MOBILE glow (<640px) */}
                        <div
                            className="block sm:hidden"
                            style={{
                                position: 'absolute',
                                top:    config.mobile_glow_top,
                                bottom: config.mobile_glow_bottom,
                                left:   config.mobile_glow_left,
                                right:  config.mobile_glow_right,
                                borderRadius: '10px',
                                border: '1.5px solid rgba(7, 114, 220, 0.55)',
                                boxShadow: `0 -6px 20px 4px rgba(7,114,220,0.20), 0 20px 50px 14px rgba(7,114,220,0.50), -6px 0 20px 4px rgba(7,114,220,0.20), 20px 0 50px 14px rgba(7,114,220,0.50), 0 0 60px 16px rgba(7,114,220,0.08), inset 0 0 12px rgba(7,114,220,0.08)`,
                                pointerEvents: 'none',
                            }}
                        />

                        {/* TABLET glow (640px–1023px) */}
                        <div
                            className="hidden sm:block lg:hidden"
                            style={{
                                position: 'absolute',
                                top:    config.tablet_glow_top,
                                bottom: config.tablet_glow_bottom,
                                left:   config.tablet_glow_left,
                                right:  config.tablet_glow_right,
                                borderRadius: '12px',
                                border: '1.5px solid rgba(7, 114, 220, 0.55)',
                                boxShadow: `0 -6px 20px 4px rgba(7,114,220,0.20), 0 20px 50px 14px rgba(7,114,220,0.50), -6px 0 20px 4px rgba(7,114,220,0.20), 20px 0 50px 14px rgba(7,114,220,0.50), 0 0 60px 16px rgba(7,114,220,0.08), inset 0 0 12px rgba(7,114,220,0.08)`,
                                pointerEvents: 'none',
                            }}
                        />

                        {/* DESKTOP/LAPTOP glow (1024px+) */}
                        <div
                            className="hidden lg:block"
                            style={{
                                position: 'absolute',
                                top:    config.desktop_glow_top,
                                bottom: config.desktop_glow_bottom,
                                left:   config.desktop_glow_left,
                                right:  config.desktop_glow_right,
                                borderRadius: '14px',
                                border: '1.5px solid rgba(7, 114, 220, 0.55)',
                                boxShadow: `0 -6px 20px 4px rgba(7,114,220,0.20), 0 20px 50px 14px rgba(7,114,220,0.50), -6px 0 20px 4px rgba(7,114,220,0.20), 20px 0 50px 14px rgba(7,114,220,0.50), 0 0 60px 16px rgba(7,114,220,0.08), inset 0 0 12px rgba(7,114,220,0.08)`,
                                pointerEvents: 'none',
                            }}
                        />
                    </div>
                </div>
            </WateryReveal>

            {/* Glowing Shadow Boxes */}
            <Container>
                <div style={{ marginTop: config.mobile_strip_mt }}
                     className='grid grid-cols-3 gap-2 xs:gap-3 sm:gap-6 md:gap-10 lg:gap-[60px]'>
                    <style>{`
                        @media (min-width: 640px)  { .strip-mt { margin-top: ${config.tablet_strip_mt}; } }
                        @media (min-width: 1024px) { .strip-mt { margin-top: ${config.desktop_strip_mt}; } }
                    `}</style>
                    <div className='strip-mt bg-linear-to-b from-[#0772DC80] to-[#73737300] h-[60px] xs:h-[80px] sm:h-[200px] md:h-[350px] lg:h-[600px] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl backdrop-blur-sm shadow-[0_-5px_10px_#0772DC,0_0_5px_#0772DC] sm:shadow-[0_-10px_20px_#0772DC,0_0_10px_#0772DC] translate-y-[50%]'></div>
                    <div className='strip-mt bg-linear-to-b from-[#0772DC80] to-[#73737300] h-[60px] xs:h-[80px] sm:h-[200px] md:h-[350px] lg:h-[600px] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl backdrop-blur-sm shadow-[0_-5px_10px_#0772DC,0_0_5px_#0772DC] sm:shadow-[0_-10px_20px_#0772DC,0_0_10px_#0772DC] translate-y-[35%]'></div>
                    <div className='strip-mt bg-linear-to-b from-[#0772DC80] to-[#73737300] h-[60px] xs:h-[80px] sm:h-[200px] md:h-[350px] lg:h-[600px] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl backdrop-blur-sm shadow-[0_-5px_10px_#0772DC,0_0_5px_#0772DC] sm:shadow-[0_-10px_20px_#0772DC,0_0_10px_#0772DC] translate-y-[50%]'></div>
                </div>
            </Container>
        </section>
    )
}

export default ModelsGroupBanner

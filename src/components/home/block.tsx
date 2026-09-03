import Container from '@/style/Container'
import { WateryReveal } from '@/style/SmoothReveal'
import { Check } from 'lucide-react'
import React from 'react'

type BlockCard = {
  title: string
  subtitle?: string
  items: string[]
  featured?: boolean
  badge?: string
  href?: string
}

type BlockContainerProps = {
  title: string
  content: string
  classname: string
  bulletsHeading?: string
  bullets?: string[]
  fontClass?: string
  sideCards?: BlockCard[]
}

const renderCardItem = (item: string) => {
  if (item === "2D sketch of front, back, side with details (P-1)") {
    return <span className="whitespace-nowrap">{item}</span>
  }

  const match = item.match(/^(.*\s)(\S+\s+\(P-\d+\))$/)

  if (!match) return item

  return (
    <>
      {match[1]}
      <span className="whitespace-nowrap">{match[2]}</span>
    </>
  )
}

const BlockContainer = ({
  title,
  content,
  classname,
  bulletsHeading,
  bullets,
  fontClass,
  sideCards,
}: BlockContainerProps) => {
  return (
    <Container>
      <WateryReveal>
        <div className={classname}>
          <div>
            <h1
              className={`${fontClass} font-semibold text-[#1A6FD4] text-2xl md:text-2xl lg:text-2xl`}
            >
              {title}
            </h1>

            <p className="font-medium text-white leading-snug text-base md:text-[16px] lg:text-[18px] mt-5 sm:mt-6 md:mt-7">
              {content}
            </p>

            {bulletsHeading && (
              <p className={`${fontClass} font-medium text-white text-base md:text-[16px] lg:text-[18px] mt-4`}>
                {bulletsHeading}
              </p>
            )}

            {bullets && bullets.length > 0 && (
              <ul className="mt-2 list-disc pl-5 text-white font-medium text-base md:text-[16px] lg:text-[18px] space-y-2">
                {bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>

          {sideCards && sideCards.length > 0 && (
            <div className="mt-20 sm:mt-24 md:mt-28 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {sideCards.map((card, index) => (
                <div
                  key={`${card.title}-${index}`}
                  className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 md:p-7 backdrop-blur-xl shadow-[0_18px_45px_rgba(2,10,26,0.35)] ${
                    card.featured
                      ? 'border-[#1A6FD4] bg-linear-to-b from-[#0E3158] via-[#0A2038] to-[#04111F]'
                      : 'border-white/10 bg-linear-to-b from-[#0A223D] via-[#071726] to-[#04111C]'
                  } mx-auto max-w-[380px] w-full`}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#0772DC] via-[#4EA6FF] to-[#0772DC]" />

                  {card.badge && (
                    <div className="mb-5 inline-flex rounded-full border border-[#4EA6FF]/40 bg-[#0772DC]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#9BD0FF]">
                      {card.badge}
                    </div>
                  )}

                  <h3 className="text-[#EAF4FF] text-xl md:text-2xl font-semibold leading-tight">
                    {card.title}
                  </h3>

                  {card.subtitle && (
                    <p className="mt-3 text-sm md:text-base text-[#9CC7F3] leading-relaxed">
                      {card.subtitle}
                    </p>
                  )}

                  <ul className="mt-6 flex-1 space-y-3">
                    {card.items.map((item, itemIndex) => (
                      <li
                        key={`${card.title}-item-${itemIndex}`}
                        className="flex items-start gap-4 text-sm md:text-[15px] text-white/90 leading-relaxed"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#0772DC] bg-[#0772DC]/20 text-[#5FB6FF] shadow-[inset_0_0_12px_rgba(7,114,220,0.3)]">
                          <Check aria-hidden="true" className="h-3.5 w-3.5 stroke-[2.4]" />
                        </span>
                        <span className="min-w-0 break-words">{renderCardItem(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </WateryReveal>
    </Container>
  )
}

export default BlockContainer

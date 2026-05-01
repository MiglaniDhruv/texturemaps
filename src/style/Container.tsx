import React from 'react'

type ContainerProps = {
    children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <section className='w-[1400px] max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
        {children}
    </section>
  )
}

export default Container
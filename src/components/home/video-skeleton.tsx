import Container from '@/style/Container'
import React from 'react'
import { Loader2 } from 'lucide-react'

const VideoSkeleton = () => {
    return (
        <Container>
            <div className='w-full h-[250px] sm:h-80 md:h-[400px] lg:h-[500px] bg-neutral-950 animate-pulse rounded-2xl md:rounded-3xl lg:rounded-4xl flex justify-center items-center'>
                <Loader2 className='text-white h-5.5 w-5.5 sm:h-6.5 sm:w-6.5 md:h-7 md:w-7 lg:h-8.5 lg:w-8.5 animate-spin' />
            </div>

        </Container>
    )
}

export default VideoSkeleton
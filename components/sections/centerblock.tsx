import React from 'react'
import { SectionProps } from './section'
import Image from 'next/image'

interface CenterblockProps extends SectionProps { }

function Centerblock(props: CenterblockProps) {
    const { layout, backgroundImage } = props

    return (
        <div className='flex flex-row justify-center items-center'>
            <Image className='opacity-10' src={backgroundImage ? backgroundImage : ""} alt="Background Image" layout="fill" />
        </div>
    )
}

export default Centerblock

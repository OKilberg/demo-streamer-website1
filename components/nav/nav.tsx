import Link from 'next/link'
import React from 'react'
import {FaTwitch, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

interface NavProps {}

function Nav(props: NavProps) {
    const {} = props

    return (
        <div className='relative'>
            <div className='absolute w-full h-[70px] z-10'>
                <div className='w-full h-full grid grid-cols-12 px-10 text-gray'>
                    <div className='col-span-3 flex items-center font-headline font-semibold'>
                        <Link href={'/'}>everhuntresstv</Link>
                    </div>
                    <div className='col-span-3 flex items-center gap-20 font-interactive'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/schedule'}>Schedule</Link>
                        <Link href={'/biography'}>Biography</Link>
                    </div>
                    <div className='col-span-3 flex justify-end items-center gap-10 text-xl'>
                        <a href={'https://www.twitch.tv/'}><FaTwitch/></a>
                        <a href={'https://www.instagram.com/'}><FaInstagram/></a>
                        <a href={'https://www.youtube.com/'}><FaYoutube/></a>
                        <a href={'https://twitter.com/'}><FaTwitter/></a>
                    </div>
                    <div className='col-span-3 flex justify-end items-center font-interactive'>
                        <Link href={'/schedule'}>Donate</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav

"use client"

import Link from 'next/link'
import React from 'react'
import { FaTwitch, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiDonateHeart} from 'react-icons/bi'
import StandardButton from '../buttons/StandardButton'
import NavBarItem from './NavBarItem'
import { usePathname } from 'next/navigation'


interface NavProps { }

function Nav(props: NavProps) {
    const { } = props

    const currentRoute = usePathname();

    return (
        <div className='relative'>
            <div className='absolute w-full h-[70px] z-10'>
                <div className='w-full h-full grid grid-cols-12 px-10 text-gray'>
                    <div className='col-span-3 flex items-center font-headline font-semibold'>
                        <NavBarItem>
                            <Link className='uppercase' href={'/'}>everhuntresstv</Link>
                        </NavBarItem>
                    </div>
                    <div className='col-span-3 flex items-center gap-20 font-interactive'>
                        <NavBarItem isActive={currentRoute === "/"}>
                            <Link href={'/'}>Home</Link>
                        </NavBarItem>
                        <NavBarItem isActive={currentRoute === "/schedule"}>
                            <Link href={'/schedule'}>Schedule</Link>
                        </NavBarItem>
                        <NavBarItem isActive={currentRoute === "/biography"}>
                            <Link href={'/biography'}>Biography</Link>
                        </NavBarItem>
                    </div>
                    <div className='col-span-3 flex justify-end items-center gap-10 text-xl'>
                        <NavBarItem>
                            <a href={'https://www.twitch.tv/'}><FaTwitch /></a>
                        </NavBarItem>
                        <NavBarItem>
                            <a href={'https://www.instagram.com/'}><FaInstagram /></a>
                        </NavBarItem>
                        <NavBarItem>
                            <a href={'https://www.youtube.com/'}><FaYoutube /></a>
                        </NavBarItem>
                        <NavBarItem>
                            <a href={'https://twitter.com/'}><FaTwitter /></a>
                        </NavBarItem>
                    </div>
                    <div className='col-span-3 flex justify-end items-center font-interactive'>
                            <StandardButton prominent label='Donate' link='/schedule' icon={<BiDonateHeart className='text-xl'/>}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav

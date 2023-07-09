import React, { ReactNode } from 'react'

interface Props {children: ReactNode | ReactNode[]}

function NavBarItem(props: Props) {
    const {children} = props

    return (
        <div className='hover:text-white transition-colors duration-200'>
            {children}
        </div>
    )
}

export default NavBarItem

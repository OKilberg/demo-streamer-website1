import React, { ReactNode } from 'react'

interface Props {children: ReactNode | ReactNode[], isActive?: boolean}

function NavBarItem(props: Props) {
    const {children, isActive} = props

    const stateStyling = ()=>{
        const commonStyling = ' active:brightness-75'
        return isActive ? 'text-white'+commonStyling : 'hover:text-white transition-colors duration-200'+commonStyling
    }

    return (
        <div className={stateStyling()}>
            {children}
        </div>
    )
}

export default NavBarItem

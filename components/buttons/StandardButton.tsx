import React, { ReactNode } from 'react'
import {prominentButtonStyle, standardButtonStyle} from './ButtonStyleConfigs'

interface Props {prominent?: boolean, label?: string, link?: string, onClick?: ()=>any, icon?: ReactNode}

function StandardButton(props: Props) {
    const {prominent, label, link, onClick, icon } = props

    if(link) return (
        <a href={link} className={` ${prominent ? prominentButtonStyle : standardButtonStyle}`}>
            {icon}
            {label}
        </a>
    )
    return (
        <div onClick={onClick} className={` ${prominent ? prominentButtonStyle : standardButtonStyle}`}>
            {icon}
            {label}
        </div>
    )
}

export default StandardButton

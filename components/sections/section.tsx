import React, { ReactNode } from 'react'

export interface SectionProps {layout?: ReactNode, backgroundImage?: string}

function Section(props: SectionProps) {
    const {} = props

    return (
        <div>Section</div>
    )
}

export default Section

import React, { ReactNode } from 'react'

export interface LayoutProps {children?: ReactNode | ReactNode[]}

function Layout(props: LayoutProps) {
    const {} = props

    return (
        <div>Layout</div>
    )
}

export default Layout

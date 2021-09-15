import React, { ReactNode } from 'react'
import Header from '../Header'
import ComponentProps from './props'

const Layout = ({ children }: ComponentProps ) => {
    return (
        <>
        <Header />
        <main>
            { children } 
        </main>
        </>
    )
}

export default Layout

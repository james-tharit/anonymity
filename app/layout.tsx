import React from "react"
import localFont from 'next/font/local'
// These styles apply to every route in the application
import './global.css'

// Font files can be colocated inside of `app`
const font = localFont({
    src: '../public/fonts/thairat.ttf',
    variable: '--font-thairat',
    display: 'swap',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={font.className}>
            <body>{children}</body>
        </html>
    )
}
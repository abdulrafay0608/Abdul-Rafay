"use client"

import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark')

    const DarkMode = () => {
        setTheme("dark")
    }

    const LightMode = () => {
        setTheme("light")
    }
    return (
        <ThemeContext.Provider value={{ theme, DarkMode, LightMode }}>
            <div className={`${theme  === "dark" ? "bg-slate-950 text-white" : "bg-slate-500 text-slate-950"}`}>
                {children}
            </div>
        </ThemeContext.Provider>

    )
}

export default ThemeProvider
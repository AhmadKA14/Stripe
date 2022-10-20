import React from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Submenu from './components/Submenu'

export default function App() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Hero />
            <Submenu />
        </>
    )
}
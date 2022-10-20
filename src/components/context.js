import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const AppContext = createContext()

export function AppProvider({ children }) {
    const [isSidebarOpen, setIsSideBarOpen] = useState(false)
    const [isSubmenuOpen, setSubmenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({ page: '', links: [] })

    const openSidebar = () => {
        setIsSideBarOpen(true)
    }
    const closeSidebar = () => {
        setIsSideBarOpen(false)
    }
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find(link => link.page === text)
        setPage(page)
        setLocation(coordinates)
        setSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setSubmenuOpen(false)
    }

    return <AppContext.Provider
        value={
            {
                isSubmenuOpen,
                isSidebarOpen,
                openSubmenu,
                openSidebar,
                closeSubmenu,
                closeSidebar,
                location,
                page
            }
        }
    >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
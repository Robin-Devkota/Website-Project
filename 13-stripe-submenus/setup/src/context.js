import React, { useState, useContext } from 'react'
import sublinks from './data'
  const AppContext = React.createContext();
  export const AppProvider = ({children}) => {
      const [isSideBarOpen, setIsSideBarOpen] = useState(false);
      const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
       const[location,setLocation]=useState({})

const [page,setPage]=useState({page: '',links:[] })
const openSidebar = () => {
    setIsSideBarOpen(true);
}
const closeSidebar = () => {
    setIsSideBarOpen(false);
}//as passed parameter from submenu
const openSubMenu = (text,coordinates) => {
    const page=sublinks.find((link)=>link.page === text)
    setPage(page)
    setLocation(coordinates)
    setIsSubMenuOpen(true);
}
const closeSubMenu = () => {
    setIsSubMenuOpen(false);
}
      return (  
      <AppContext.Provider value=
      {{isSideBarOpen,
      isSubMenuOpen,
      openSubMenu,openSidebar,
      closeSubMenu,
      closeSidebar,
      location,
      page,
      }}>
          {children}
      </AppContext.Provider>
  )}
  //custom hoook
  export const useGlobalContext = () => useContext(AppContext);
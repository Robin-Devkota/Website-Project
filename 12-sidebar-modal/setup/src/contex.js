import React, { useState, useContext } from "react";
const AppContext = React.createContext();

//childern must be returned to see output
const AppProvider = ({children}) => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
const openSidebar = () => setIsSidebarOpen(true);
const closeSidebar = () => setIsSidebarOpen(false);
const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);
return <AppContext.Provider value={{
    isModalOpen,isSidebarOpen,openSidebar,closeSidebar,openModal,closeModal
}}>{children} </AppContext.Provider>

}
//custom hook so that we dont need no import useContext and app provider in every component
export const useGlbalContext = () => useContext(AppContext);
export {AppContext,AppProvider}
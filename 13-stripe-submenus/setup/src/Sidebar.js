import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'
const Sidebar = () => {
  const {isSideBarOpen,closeSidebar}=useGlobalContext()
  return (
    <aside 
    className={`${isSideBarOpen ?'sidebar-wrapper show':'sidebar-wrapper'}`}>
     <div className="sidebar">
       <button className="close-btn"onClick={closeSidebar}>
         <FaTimes/>
       </button>
       <div className="sidebar-links">
         {/* two times map as link contain arrry within it */}
         {
           sublinks.map((item,index)=>{
             const {links,page}=item
             return(
               <article key={index}>
                  <h3>{page}</h3>
                  <div className="sidebar-sublinks">
                    {/* one more map iteration goes here */}
                    {
                      links.map((link,index)=>{
                        const {url,icon,label}=link
                        return(
                          <a key={index} href={url}>
                            {icon}
                            {label}
                          </a>
                        )

                      })
                    }
                  </div>
                  </article>
             )
           })
         }
       </div>
     </div>
    </aside>
  )
}

export default Sidebar

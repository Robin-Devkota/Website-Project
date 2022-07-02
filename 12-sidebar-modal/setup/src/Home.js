import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext,useGlbalContext} from './contex'

const Home = () => {
const {openSidebar,openModal}=useGlbalContext()
  //console.log(data)
  return <main>
    <button className='sidebar-toggle' onClick={openSidebar}>
      <FaBars/>

    </button>
    <button className="btn" onClick={openModal}>
      Show modal
    </button>
  </main>
}

export default Home

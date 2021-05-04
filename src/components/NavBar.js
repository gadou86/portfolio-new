import React from 'react'
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'

function NavBar() {
  return (
    <header className="bg-gray-50">
      <div className="container mx-auto flex justify-between ">
        <nav className="flex">
          <NavLink to="/" exact className="inline-flex items-center  py-6 px-3 mr-4 text-gray-800  hover:text-gray-400 text-4xl font-bold cursive tracking-widest" activeClassName="text-white">
            Gad<span className="text-gray-400 tracking-normal font-thin	">dayan</span>
          </NavLink>
          
          <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-800 hover:text-gray-400" activeClassName="text-gray-300 bg-gray-100">
            Blog Posts
          </NavLink>

          <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-800 hover:text-gray-400" activeClassName="text-gray-300 bg-gray-100">
            Projects
          </NavLink>

          <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-800 hover:text-gray-400" activeClassName="text-gray-300 bg-gray-100">
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://linkedin.com/in/gad-dayan" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
          <SocialIcon url="https://github.com/gadou86" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
          {/* <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} /> */}
        </div>

      </div>
    </header>
  )
}

export default NavBar

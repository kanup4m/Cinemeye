import React, { useContext, useState } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import {
  SearchIcon,
  MenuIcon,
} from '../icons'
import {Input} from '@windmill/react-ui'

function Header() {
  const { toggleSidebar } = useContext(SidebarContext)

  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 text-gray-700"
              placeholder="Search for movies"
              aria-label="Search"
            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
            <button class="bg-transparent hover:bg-indigo-700 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-600 hover:border-transparent rounded-lg sm:text-sm">
            Login
          </button>
          <button class="  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg sm:text-sm" style={{ backgroundColor: "#4834d4" }}>
            Try Now
          
          </button>

        </ul>
      </div>
    </header>
  )
}

export default Header

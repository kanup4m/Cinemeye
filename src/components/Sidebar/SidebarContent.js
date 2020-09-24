import React from 'react'
import routes from '../../routes/sidebar'
import { NavLink, Route } from 'react-router-dom'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'
import { Button } from '@windmill/react-ui'
import Store from '../../assets/img/appstore.png'
import Play from '../../assets/img/play.png'


function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarContent() {
  return (
    <div className="py-4 text-white">
      <a className="ml-16 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
        Cinemeye
      </a>
      <ul className="mt-6">
        <p className="px-16 py-3 text-gray-600 ">Categories</p>

        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
              <li className="relative px-16 py-3" key={route.name}>
                <NavLink
                  exact
                  to={route.path}
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  activeClassName="text-gray-800 dark:text-gray-100"
                >
                  <Route path={route.path} exact={route.exact}>
                    <span
                      className="absolute inset-y-0 left-0 w-11/12 bg-gray-600 rounded-lg bg-opacity-50 ml-4"
                      aria-hidden="true"
                    ></span>
                  </Route>
                  <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                  <span className="ml-4">{route.name}</span>
                </NavLink>
              </li>
            )
        )}
      </ul>
      <div className="px-16 my-6 flex text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste eveniet iusto omnis.
      </div>
      <div className="flex flex-wrap ">
        <img src={Store} className="w-2/4" />
        <img src={Play} className="w-2/4 py-3" />
      </div>



    </div>
  )
}

export default SidebarContent

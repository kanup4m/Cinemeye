import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/Dashboard'))
const Tv = lazy(() => import('../pages/Tv'))
const Movies = lazy(() => import('../pages/Movies'))
const Concert = lazy(() => import('../pages/Concert'))
const Sports = lazy(() => import('../pages/Sports'))
const Kids = lazy(() => import('../pages/Kids'))
const Fav = lazy(() => import('../pages/Fav'))
const Series = lazy(() => import('../pages/Series'))
const PersonalData = lazy(() => import('../pages/PersonalData'))


const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/tv',
    component: Tv,
  },
  {
    path: '/movies',
    component: Movies,
  },
  {
    path: '/concert',
    component: Concert,
  },
  {
    path: '/sport',
    component: Sports,
  },
  {
    path: '/kids',
    component: Kids,
  },
  {
    path: '/fav',
    component: Fav,
  },
  {
    path: '/series',
    component: Series,
  },
  {
    path: '/personal',
    component: PersonalData,
  },
]

export default routes

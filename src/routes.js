// pages
import Home from './pages/home/home'
import Detail from './pages/detail'

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/movie/:id',
    exact: true,
    component: Detail,
  },
]

export default Routes

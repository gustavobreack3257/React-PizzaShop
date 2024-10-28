import { createBrowserRouter } from 'react-router-dom'

import { DashBoard } from './pages/app/dashBoard'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashBoard />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
])

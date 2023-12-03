import React from 'react'
import Dashboard from "./pages/Dashboard/Dashboard"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Transaction from "./pages/Transaction/Transaction"
import Support from './pages/Support/Support'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Dashboard />
  },
  {
    path : "/transaction",
    element : <Transaction />
  },
  {
    path : "/support",
    element : <Support />
  }
])

const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App

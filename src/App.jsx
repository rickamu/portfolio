import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components'
import './App.css'
import { routes } from './routes'
import { Page404 } from './pages'

function App() {

  // Initialize a browser router
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: routes
    }
  ], {basename: '/'})
  return (
    
    <RouterProvider router={router} />

  )
}

export default App

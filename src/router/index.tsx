import { createBrowserRouter } from 'react-router-dom'
import { LoginLayout, MainLayout } from '../components/layouts'
import { Login, MemoryGame, NotFound } from '../pages'
import { ROUTES } from '../utils'

export const router = createBrowserRouter([
    {
        path: ROUTES.LOGIN,
        element: <LoginLayout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Login />
            },
            {
                path: ROUTES.MEMORYGAME,
                element: <MainLayout />,
                children:[
                    {
                        index: true,
                        element: <MemoryGame />
                    }
                ]
            }
        ]
    }
])
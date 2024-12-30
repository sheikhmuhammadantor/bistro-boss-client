import {createBrowserRouter} from 'react-router-dom';
import { Home, MainLayout } from '../App';
// import App from '../App';
// import { MainLayout, Home } from '../App';

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            // {
            //     path: "/app",
            //     element: <App />
            // }
        ]
    }
])

export default route;

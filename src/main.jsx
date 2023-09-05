// import in necessary items to get router functionality 
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import in all pages
import App from './App.jsx';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
import Resume from './pages/Resume';

// defining routes that are available and components generated at each route
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />
      },
      // {
      //   path: '/Portfolio',
      //   element: <Portfolio />
      // },
      // {
      //   path: '/Contact',
      //   element: <Contact />
      // },
      {
        path: '/Resume',
        element: <Resume />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

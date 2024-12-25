
import './App.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';

import Home from './components/pages/Home/Home';
import Shop from './components/pages/Shop/Shop';

// slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root/>}
      >
        <Route>
          <Route index element={<Home/>} />
          <Route path='product' element={<Shop/>}/>
          
        </Route>
      </Route>
    )
  );


  return (
    <>
 <RouterProvider router={router} />
    </>
  )
}

export default App


import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home/Home';
import Root from './components/Root/Root';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root/>}
      >
        <Route>
          <Route index element={<Home/>} />
          
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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import {CountryDetail} from "./components/Layout/CountryDetail" ;
import "./App.css";
import { ErrorPages } from "./pages/ErrorPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: < AppLayout />,
    errorElement:<ErrorPages/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Country",
        element: <Country />,
      },
      {
        path: "Country/:id",
        element: <CountryDetail />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

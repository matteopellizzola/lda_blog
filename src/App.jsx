import * as React from "react";

import "./App.css";
import "./global.scss";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Pages/contacts/Contacts";
import About from "./Pages/about/About";
import Home from "./Pages/home/Home";
import Products from "./Pages/Products/Products";
import Edit from "./Pages/Edit/Edit";
import Edit2 from "./Pages/Edit/Edit2";
import Login from "./Pages/login/Login";
import Logout from "./Pages/logout/Logout";
import "./i18n.ts";
import { Checkout } from "./Pages/checkout/Checkout.jsx";
import { ProductsStoreContext, productStore } from "./store/products.jsx";
import Listing from "./Pages/Products/Listing.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "*", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contacts", element: <Contact /> },
      {
        path: "products/details",
        element: (
          <ProductsStoreContext.Provider value={productStore}>
            <Products />
          </ProductsStoreContext.Provider>
        ),
      },
      { path: "edit", element: <Edit /> },
      {
        path: "products",
        element: (
          <ProductsStoreContext.Provider value={productStore}>
            <Listing />
          </ProductsStoreContext.Provider>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "logout", element: <Logout /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function Layout(props) {
  let getKey = React.useCallback((location, matches) => {
    let match = matches.find((m) => m.handle?.scrollMode);
    if (match?.handle?.scrollMode === "pathname") {
      console.log("Found", location.pathname);

      return location.pathname;
    }
    console.log("not Found", location.key);

    return location.key;
  }, []);

  return (
    <>
      <Header />

      <div className="main-content">
        <Outlet />
      </div>

      <Footer />
      <ScrollRestoration getKey={getKey} />
    </>
  );
}

export default App;

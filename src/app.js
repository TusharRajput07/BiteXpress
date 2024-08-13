import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserProfile from "./components/UserProfile";
import ProfileContext from "./utils/ProfileContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import reduxStore from "./utils/reduxStore";
import Footer from "./components/Footer";
import TermsNServices from "./components/TermsNServices";

// lazy loading / on demand loading / chunking / code Splitting / dynamic bundling / dynamic import
const Grocery = lazy(() => import("./components/Grocery"));

// Main component

const AppLayout = () => {
  const [name, setName] = useState("Guest");
  const [email, SetEmail] = useState("guest@gmail.com");
  const [address, setAddress] = useState("street-123, Delhi-110022");

  return (
    <Provider store={reduxStore}>
      <ProfileContext.Provider
        value={{
          username: name,
          updateUsername: setName,
          useremail: email,
          updateUseremail: SetEmail,
          useraddress: address,
          updateUserAddress: setAddress,
        }}
      >
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </ProfileContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/terms",
        element: <TermsNServices />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

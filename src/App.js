import { Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import AllProducts from "./Pages/AllProducts"
import Wishlist from "./Pages/Wishlist"
import Cart from "./Pages/Cart"
import SignIn from "./Pages/SignIn"
import ScrollTop from "./Utilities/ScrollTop"
import { Dresses, Accessories, Shirts, Skirts, Pants, Shoes, Jackets, Sportswears} from "./Pages/Categories"

const App = () => {
  const routes = [
    { component: <Home />, path: '/' },
    { component: <AllProducts />, path: '/all-products'},
    { component: <Wishlist />, path: '/wishlist' },
    { component: <Cart />, path: '/cart' },
    { component: <SignIn />, path: '/sigin' },
    { component: <Dresses />, path: '/category/dresses'},
    { component: <Accessories />, path: '/category/accessories'},
    { component: <Shirts />, path: '/category/shirts'},
    { component: <Skirts />, path: '/category/skirts'},
    { component: <Pants />, path: '/category/pants'},
    { component: <Shoes />, path: '/category/shoes'},
    { component: <Sportswears />, path: '/category/sportswears'},
    { component: <Jackets />, path: '/category/jackets'},
  ]

  return (
    <div className="App h-full bg-[#faf9f8]">
      <Header />

      <Routes>
        {routes.map((route, index) => {
          return (
            <Route exact key={index} path={route.path}
              element={route.component}
            />
          )
        })}
      </Routes>

      <ScrollTop />
    </div>
  )
}

export default App
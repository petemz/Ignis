//import { useContext } from "react"
import { Routes, Route } from "react-router-dom"
//import { Context } from "./Context"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import AllProducts from "./Pages/AllProducts"
import Wishlist from "./Pages/Wishlist"
import Cart from "./Pages/Cart"
import SignIn from "./Pages/SignIn"
import { dressesData, accessoriesData, shirtsData, skirtsData, pantsData, shoesData, jacketsData, sportswearsData} from "./Assets/data"
import Section from "./Components/Section"
import Dresses from "./Pages/Categories/Dreses"
//import Footer from "./Components/Footer"

const App = () => {
  //const { currentPage } = useContext(Context)

  const routes = [
    { component: <Home />, path: '/' },
    { component: <AllProducts />, path: '/all-products'},
    { component: <Wishlist />, path: '/wishlist' },
    { component: <Cart />, path: '/cart' },
    { component: <SignIn />, path: '/sigin' },
    { component: <Dresses />, path: '/category/dresses'},
    { component: <Section items={accessoriesData} />, path: '/category/accessories'},
    { component: <Section items={shirtsData} />, path: '/category/shirts'},
    { component: <Section items={skirtsData} />, path: '/category/skirts'},
    { component: <Section items={pantsData} />, path: '/category/pants'},
    { component: <Section items={shoesData} />, path: '/category/shoes'},
    { component: <Section items={sportswearsData} />, path: '/category/sportswears'},
    { component: <Section items={jacketsData} />, path: '/category/jackets'},
  ]

  return (
    <div className="App h-full">
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
    </div>
  )
}

export default App
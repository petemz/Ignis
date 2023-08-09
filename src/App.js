//import { useContext } from "react"
import { Routes, Route } from "react-router-dom"
//import { Context } from "./Context"
import Home from "./Pages/Home"
import Women from "./Pages/Women"
import Wishlist from "./Pages/Wishlist"
import Cart from "./Pages/Cart"
import SignIn from "./Pages/SignIn"
import { dressesData, accessoriesData, shirtsData, skirtsData, pantsData, shoesData} from "./Assets/data"
import Section from "./Components/Section"
//import Footer from "./Components/Footer"

const App = () => {
  //const { currentPage } = useContext(Context)

  const routes = [
    { component: <Home />, path: '/' },
    { component: <Women />, path: '/women'},
    { component: <Wishlist />, path: '/wishlist' },
    { component: <Cart />, path: '/cart' },
    { component: <SignIn />, path: '/sigin' },
    { component: <Section items={dressesData} />, path: 'category/dresses'},
    { component: <Section items={accessoriesData} />, path: 'category/accessories'},
    { component: <Section items={shirtsData} />, path: 'category/shirts'},
    { component: <Section items={skirtsData} />, path: 'category/skirts'},
    { component: <Section items={pantsData} />, path: 'category/pants'},
    { component: <Section items={shoesData} />, path: 'category/shoes'},
  ]

  return (
    <div className="App h-screen bg-[#faf9f8]">
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
//import { useContext } from "react"
import { Routes, Route } from "react-router-dom"
//import { Context } from "./Context"
import Home from "./Pages/Home"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Kids from "./Pages/Kids"
import Wishlist from "./Pages/Wishlist"
import Cart from "./Pages/Cart"
import SignIn from "./Pages/SignIn"

const App = () => {
  const routes = [
    { component: <Home />, path: '/' },
    { component: <Women />, path: '/women'},
    { component: <Men />, path: '/men' },
    { component: <Kids />, path: '/kids' },
    { component: <Wishlist />, path: '/wishlist' },
    { component: <Cart />, path: '/cart' },
    { component: <SignIn />, path: '/sigin' },
  ]

  return (
    <div className="App h-screen">
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

export default App;

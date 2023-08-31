import { Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import RoutesComp from "./Utilities/Routes"
import ScrollTop from "./Utilities/ScrollTop"

const App = () => {
  return (
    <div className="App h-screen [#faf9f8]">
      <Header />

      <Routes>
        {RoutesComp().map((route, index) => {
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
import { createContext, useState, } from "react"

const Context = createContext()

const ContextProvider = (props) => {
    //const [currentPage, setCurrentPage] = useState()
    const [cart, setCart] = useState([])

    return (
        <Context.Provider value={{ cart, setCart }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

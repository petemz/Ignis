import { createContext, useState, useEffect } from "react"

const Context = createContext()

const ContextProvider = (props) => {
    // Load cart data from local storage on component mount
    const initialCart = JSON.parse(localStorage.getItem("cart")) || []
    const initialFavs = JSON.parse(localStorage.getItem("favorites")) || []
    const [cart, setCart] = useState(initialCart)
    const [favs, setFavs] = useState(initialFavs)

    const addToCart = (item) => {
        const newState = cart.map(prod => {
            if (prod.id === item.id) {
                let prevAmount = prod.amount
                return {...prod, amount: prevAmount + 1}
            }

            return prod
        })

        const index = cart.findIndex(prod => prod.id === item.id)
        index > -1 ? setCart(newState) : setCart(prevCart => [...prevCart, {...item, amount: 1}])
    }
    const handleDelete = (item) => {
        setCart(current => current.filter(prod => prod.id !== item.id))
    }


    const isFav = (id) => {
        return favs.findIndex(prod => prod.id === id) > -1
    }

    const handleAddFav = (item) => {
        console.log('yupp')
        const index = cart.findIndex(prod => prod.id === item.id)
        index < 0 && setFavs(prevCart => [...prevCart, item])
    }
    const handleRemoveFav = (item) => {
        const index = favs.findIndex(prod => prod.id === item.id)
        index > -1 && setFavs(current => current.filter(prod => prod.id !== item.id))
    }

    // Save cart data to local storage whenever the cart changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
        localStorage.setItem("favorites", JSON.stringify(favs))
    }, [cart, favs])

    return (
        <Context.Provider value={{ cart, setCart, addToCart, handleDelete, favs, isFav, handleAddFav, handleRemoveFav }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }


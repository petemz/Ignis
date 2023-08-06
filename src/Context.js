import { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = (props) => {
    // Load cart data from local storage on component mount
    const initialCart = JSON.parse(localStorage.getItem("cart")) || []
    const [cart, setCart] = useState(initialCart)

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
        //const index = cart.findIndex(prod => prod.id === item.id)
        console.log(item.id)
        setCart(current => current.filter(prod => prod.id !== item.id))
    }

    // Save cart data to local storage whenever the cart changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <Context.Provider value={{ cart, setCart, addToCart, handleDelete }}>
            {props.children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };


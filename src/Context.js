import { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = (props) => {
    // Load cart data from local storage on component mount
    const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(initialCart);

    const AddToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    // Save cart data to local storage whenever the cart changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <Context.Provider value={{ cart, setCart, AddToCart }}>
            {props.children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };


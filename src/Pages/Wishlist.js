import { useContext } from "react"
import { Context } from "../Context"
import { Link } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const Wishlist = () => {
    const { cart, handleRemoveFav } = useContext(Context)
    return (

    <div className="pt-36 px-[5%] h-full overflow-y-scroll">
            <Header />

            <div className="w-full max-w-[900px] p-3 mb-10 m-auto text-3xl font-medium h-max bg-orange-100 text-center">
                <p>Get <span className="text-red-500">FREE shipping</span> with orders over $99+ <br/> OR when you pick up your order in-store.</p>
            </div>

            <div className="">
                <div className="flex text-center border-b border-black">
                    <Link className="w-60 p-1 block border border-black border-b-0 border-r-0" to={"/cart"}>CART</Link>
                    <Link className="w-60 p-1 block bg-black text-white border border-black border-b-0" to={"/wishlist"}>WISHLIST</Link>
                </div>

                <div className=" w-full gap-x-10 justify-center py-10">
                    <ul className="flex flex-wrap justify-center w-full">
                        {cart.map(item => {
                            return (
                                <li className="mb-5 mx-1">
                                    <div className="max-w-64 h-96 relative">
                                        <img className="h-full w-full object-cover " src={item.img} alt="" />
                                        <button
                                            className="h-8 w-8 hover:scale-110 absolute bottom-3 right-3 hover:opacity-100 opacity-80 bg-white bg-opacity-60 hover:bg-opacity-100 flex justify-center items-center rounded-full hover:text-red-500"
                                            onClick={() => handleRemoveFav(item)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                                        </button>
                                    </div>
                                    {/*<div className="h-[calc(100%-90px)] relative">
                                        <img className="w-full h-full object-cover object-top" src={item.img} alt="" />
                                        <button
                                            className="h-8 w-8 hover:scale-110 absolute bottom-3 right-3 hover:opacity-100 opacity-80 bg-white bg-opacity-60 hover:bg-opacity-100 flex justify-center items-center rounded-full hover:text-red-500"
                                            onClick={() => handleRemoveFav(item)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                                        </button>
                                    </div>*/}
                                    <div>
                                        <p className="text-xl font-medium">{item.name}</p>
                                        <p>${item.price}</p>

                                    </div>
                                    <button className="mt-2 w-full h-10 bg-black text-white">Add to Cart</button>
                                </li>
                            )}
                        )}
                    </ul>                  
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Wishlist
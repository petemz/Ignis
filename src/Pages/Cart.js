import { useContext } from "react"
import { Context } from "../Context"
import { Link } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const Cart = () => {
    const { cart, setCart, handleDelete, isFav, handleAddFav, handleRemoveFav } = useContext(Context)
    let totalItems = 0
    let totalPrice = 0 

    const handleIncrement = (item) => {
        const newCart = cart.map(prod => {
            if (prod.id === item.id) {
                let prevAmount = prod.amount
                return {...prod, amount: prevAmount + 1}
            }

            return prod
        })

        setCart(newCart)
    }

    const handleDecrement = (item) => {
        if (item.amount > 1) {
            const newCart = cart.map(prod => {
                if (prod.id === item.id) {
                    let prevAmount = prod.amount
                    return {...prod, amount: prevAmount - 1}
                }

                return prod
            })

            setCart(newCart)

        } else handleDelete(item)
    }
    
    const handleFav = (item) => {
        isFav ? handleRemoveFav(item) : handleAddFav(item) 
    }

    return (
        <div className="pt-36 h-full ">
            <Header />

            <div className="w-full max-w-[900px] p-3 mb-10 m-auto text-3xl font-medium h-max bg-orange-100 text-center">
                <p>Get <span className="text-red-500">FREE shipping</span> with orders over $99+ <br/> OR when you pick up your order in-store.</p>
            </div>

            <div className="">
                <div className="flex text-center border-b border-black">
                    <Link className="w-60 md:w-1/2 p-1 block bg-black text-white border border-black border-b-0 border-r-0" to={"/cart"}>CART</Link>
                    <Link className="w-60 md:w-1/2 p-1 block border border-black border-b-0" to={"/wishlist"}>WISHLIST</Link>
                </div>

                {cart.length > 0 ?
                    <div className="grid grid-cols-[1fr_350px] sm:grid-cols-1 w-full gap-x-10 justify-center p-10">
                        <ul className="sm:mb-20">
                            {cart.map(item => {
                                totalItems += item.amount
                                totalPrice += item.price * item.amount

                                return (
                                    <li className="-xs:h-52 xs:w-80 mx-auto rounded-lg max-w-[600px] shadow-lg p-4 mb-5 bg-white flex xs:flex-col relative" key={item.id}>
                                        <div className="h-full w-32 mr-8">
                                            <img className="h-full w-full object-cover " src={item.img} alt="" />
                                        </div>
                                        
                                        <div className="flex flex-col justify-between">
                                            <div className="">
                                                <p className="text-2xl font-medium">{item.name}</p>
                                                <p className="text-lg">${item.price}</p>

                                                <div className="mt-3 xs:mb-3 text-sm grid grid-cols-2 xs:gap-x-10 gap-x-[40%]">
                                                    <p className="w-max"><span className="mr-6">ItemId.:</span> <span>{item.id}</span></p>
                                                    <p className="w-max"><span className="mr-6">Color:</span> <span> {item.color}</span></p>
                                                    <p className="w-max"><span className="mr-6">Size:</span> <span> </span></p>
                                                    <p className="w-max"><span className="mr-6">Subtotal:</span> <span>{item.price * item.amount}</span></p>
                                                </div>
                                            </div>

                                            <div className="flex">
                                                <button onClick={() => handleFav(item)} className={`w-8 h-8 mr-8 flex justify-center items-center border border-black px-4 ${isFav(item.id) ? 'text-red-500' : 'text-white hover:text-red-500'}`}>
                                                    <svg className="w-5 h-5" fill="currentColor" strokeWidth={10} stroke="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                </button>

                                                <div className="flex">
                                                    <button 
                                                        onClick={() => handleDecrement(item)} 
                                                        className="w-8 h-8 border border-r-0 border-black"
                                                    >
                                                        <span>-</span>
                                                    </button>

                                                    <div className="flex justify-center items-center w-8 h-8 border border-r-0 border-black">{item.amount}</div>
                                                    
                                                    <button 
                                                        onClick={() => handleIncrement(item)} 
                                                        className="w-8 h-8 border border-black"
                                                    >
                                                        <span>+</span>
                                                    </button>
                                                </div>
                                            </div>    
                                        </div>

                                        <button onClick={() => handleDelete(item)} className="absolute p-[2px] top-6 right-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                                        </button>
                                    </li>
                                )}
                            )}
                        </ul> 

                        <div className="w-[350px] mx-auto h-max p-4 bg-zinc-200">
                            <table className="mb-4 border-collapse border-spacing-10">
                                <colgroup>
                                    <col className="w-60 "/>
                                </colgroup>
                                <thead>
                                    <tr className="text-left border-b-2 bg border-gray-400">
                                        <th className="h-10">Order Summary</th>
                                        <th>{totalItems} item(s)</th>
                                    </tr>                                     
                                </thead>
       
                                <tbody>
                                    <tr className="mb-4">
                                        <td className="h-9">Order Value</td>
                                        <td>{totalPrice}</td>
                                    </tr>
                                    <tr>
                                        <td className="h-9">Shipping</td>
                                        <td>TBD</td>
                                    </tr>
                                    <tr>
                                        <td className="h-9">Discount</td>
                                        <td>$0</td>
                                    </tr>                                    
                                </tbody>   
                                <tfoot>
                                    <tr className="border-black border-t-2">
                                        <td className="h-12">Order Total</td>
                                        <td>${totalPrice}</td>
                                    </tr>                                    
                                </tfoot>   

                            </table>

                            <button className="w-full h-10 bg-black text-white">Continue to checkout</button>

                        </div> 
                    </div>
                :
                    <div className="text-center py-16 h-96 font-medium">
                        <p>YOU DO NOT HAVE ANY ITEM ON YOUR CART</p>
                        <p className="m-auto mt-2 max-w-md">Want to add items you love to your cart? Click the plus icon on the product image to add them to your cart.</p>

                        <Link className="block text-lg font-bold px-5 py-2 mt-28 w-max m-auto bg-black text-white" to={'/all-products'}>Shop now</Link>
                    </div>
                }         
            </div>

            <Footer />
        </div>
    )
}

export default Cart
import { useContext } from "react"
import { Context } from "../Context"
import { Link } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const Cart = () => {
    const { cart } = useContext(Context)

    return (
        <div className="pt-36 h-full overflow-y-scroll">
            <Header />

            <div className="w-full max-w-[900px] p-3 mb-10 m-auto text-3xl font-medium h-max bg-orange-100 text-center">
                <p>Get <span className="text-red-500">FREE shipping</span> with orders over $99+ <br/> OR when you pick up your order in-store.</p>
            </div>

            <div>
                <div className="flex text-center border-b border-black">
                    <Link className="w-60 p-1 block bg-black text-white border border-black border-b-0 border-r-0" to={"/cart"}>CART</Link>
                    <Link className="w-60 p-1 block  border border-black border-b-0" to={"/wishlist"}>WISHLIST</Link>
                </div>

                <div className="flex gap-10 justify-center py-10">
                    <ul className="w-full max-w-[700px]">
                        {cart.map(item => {
                            return (
                                <div className="h-52 p-4 mb-5 bg-white flex">
                                    <div className="h-full w-32 mr-8">
                                        <img className="h-full w-full object-cover " src={item.img} alt="" />
                                    </div>
                                    
                                    <div className="flex flex-col justify-between">
                                        <div className="">
                                            <p className="text-2xl font-medium">{item.name}</p>
                                            <p className="text-lg">{item.price}</p>

                                            <div className="mt-3 text-sm grid grid-cols-2 gap-x-[40%] ">
                                                <p>ItemId.:</p>
                                                <p>Color: {item.color}</p>
                                                <p>Size: </p>
                                                <p>Total:</p>
                                            </div>
                                        </div>


                                        <div className="flex">
                                            <button className="w-8 h-8 mr-8 flex justify-center items-center border border-black px-4">
                                                <svg className="w-5 h-5 text-white hover:text-red-500" fill="currentColor" strokeWidth={10} stroke="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                            </button>

                                            <div>
                                                <button className="w-8 h-8 border border-r-0 border-black">-</button>
                                                <button className="w-8 h-8 border border-r-0 border-black">1</button>
                                                <button className="w-8 h-8 border border-black">+</button>
                                            </div>

                                        </div>
                                            
                                    </div>
                                    
                                </div>
                            )}
                        )}
                    </ul>          

                    <div className="h-60 w-[350px] bg-white">
                        
                    </div>          
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Cart
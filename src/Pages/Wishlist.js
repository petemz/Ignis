import { useContext, useState } from "react"
import { Context } from "../Utilities/Context"
import { Link } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const Wishlist = () => {
    const { favs, handleRemoveFav, addToCart } = useContext(Context)

    const [isLoading, setIsLoading] = useState(true);

    // Simulate a delay to demonstrate loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 500); 

    return (
        <div className="pt-36 h-full overflow-y-scroll">
            <Header />

            <div className="">
                <div className="flex text-center border-b border-black">
                    <Link className="w-60 md:w-1/2 p-1 block border border-black border-b-0 border-r-0" to={"/cart"}>CART</Link>
                    <Link className="w-60 md:w-1/2 p-1 block bg-black text-white border border-black border-b-0" to={"/wishlist"}>WISHLIST</Link>
                </div>

                <div className=" w-full py-10">
                    {favs.length > 0 ? 
                        <ul className="grid grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-y-16 w-full">
                            {favs.map(item => {
                                return (
                                    <li className="border border-black">
                                        <div className={`max-w-64 relative ${isLoading && 'bg-neutral-200 animate-pulse w-full h-[calc(20vw-10px)] lg:h-[calc(25vw-10px)] sm:h-[calc(33.3vw-12px)] xs:h-[calc(50vw-16px)]'}`}> 
                                            <img className={`${isLoading && 'opacity-0'} w-full object-cover`} src={item.img} alt="" />
                                            <button
                                                className={`${isLoading && 'opacity-0'} h-6 w-6 hover:scale-110 absolute bottom-3 right-3 hover:opacity-100 text-red-600`}
                                                onClick={() => handleRemoveFav(item)}
                                            >
                                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                            </button>  
                                        </div>

                                        <div className="px-1">
                                            {!isLoading ? 
                                                <>
                                                    <p className={` text-lg font-medium`}>{item.name}</p>
                                                    <p>${item.price}</p>    
                                                </>    
                                            :
                                                <>
                                                    <div className="h-6 my-1 w-40 rounded bg-neutral-200"></div>
                                                    <div className="h-4 w-28 rounded bg-neutral-200"></div>
                                                </>
                                            }                                       
                                        </div>

                                        <button onClick={() => addToCart(item)} className="mt-2 w-full border-t border-black h-10 hover:bg-black hover:text-white">Add to Cart</button>
                                    </li>
                                )}
                            )}
                        </ul>      
                    :
                        <div className="text-center py-16 h-96 font-medium">
                            <p>YOU DO NOT HAVE ANY ITEM ON YOUR WISHLIST</p>
                            <p className="m-auto mt-2 max-w-md">Want to save items you love for later? Click the heart icon on the product image to add them to your wislist.</p>

                            <Link className="block text-lg font-bold px-5 py-2 mt-28 w-max m-auto bg-black text-white" to={'/all-products'}>Shop now</Link>
                        </div>
                    }
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Wishlist
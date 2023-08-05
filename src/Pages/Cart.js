import { Link } from "react-router-dom"
import Header from "../Components/Header"

const Cart = () => {
    return (
        <div className="pt-36">
            <Header />

            <div className="w-full max-w-[900px] p-3 mb-10 m-auto text-3xl font-medium h-max bg-orange-100 text-center">
                <p>Get <span className="text-red-500">FREE shipping</span> with orders over $99+ <br/> OR when you pick up your order in-store.</p>
            </div>

            <div>
                <div className="flex text-center border-b border-black">
                    <Link className="w-60 p-1 block border border-black border-b-0 border-r-0" to={"/cart"}>CART</Link>
                    <Link className="w-60 p-1 block border border-black border-b-0" to={"/wishlist"}>WISHLIST</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
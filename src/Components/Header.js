import { useContext, useState } from "react"
import { Context } from "../Context"
import { Link } from "react-router-dom"

const Header = ({color}) => {
    const { cart } = useContext(Context)
    //const [bg, setBg] = useState()
    const [isNav, setIsNav] = useState(false)

    return (
        <header style={{ color: color }} className="fixed z-50 left-0 top-0 hover:bg-white w-full grid grid-cols-3 px-6 pb-5 pt-6">
            <div className="lg:hidden text-base font-medium h-max">
                <Link to={'/all-products'} className="mr-6">Shop</Link>

                <button className="mr-6">Collections</button>

                <button className="mr-6">Shoes</button>

                <button className="">Search</button>
            </div>

            {/*Hamburger menu*/}
            <button 
                onClick={() => setIsNav(true)} 
                className="-lg:hidden w-max h-max"
            >
                <div class="w-8 h-max ">
                    <div class="h-[5px] mb-1 rounded-md bg-black"></div>
                    <div class="h-[5px] ml-auto mb-1 w-2/3 rounded-md bg-black"></div>
                    <div class="h-[5px] mb-1 rounded-md bg-black"></div>
                    <div class="h-[5px] ml-auto w-2/3 rounded-md bg-black"></div>
                </div>
            </button>

                            
            {isNav && 
                <div className="absolute w-80 -lg:hidden border-r border-black bg-[#faf9f8]">
                    <div className="p-5 pl-[15%] flex flex-col justify-center h-screen text-5xl font-semibold">
                        <Link to={'/all-products'} className="my-10 transform transiti hover:italic block w-max">Shop</Link>

                        <button className="my-10 block hover:italic w-max">Collections</button>

                        <button className="my-10 block hover:italic w-max">Shoes</button>

                        <button className="my-10 block hover:italic w-max">Search</button> 

                        <button onClick={() => setIsNav(false)}>
                            <svg className="absolute top-7 right-8" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>                       
                        </button>
                    </div>
                </div>
            } 

            <Link className="text-6xl text-center font-extrabold logo" to={"/"}>IGNIS</Link>

            <ul className="flex justify-end items-center h-max">
                <li className="">
                    <Link  to={'/sigin'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    </Link>
                </li>
                <li className="ml-8">
                    <Link  to={'/wishlist'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                    </Link>
                </li>
                <li className="ml-8">
                    <Link  to={'/cart'} className="flex text-sm">
                        <svg className="w-6 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        <span>({cart.length})</span>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
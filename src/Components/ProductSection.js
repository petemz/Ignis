import { useContext, useState, useRef, } from "react"
import { Context } from "../Utilities/Context"
import { Link } from "react-router-dom"
import Filter from "./Filter"
import favIcon from "../Assets/Icons/add.svg"

const Section = ({ items }) => {
    const { isFav, handleAddFav, handleRemoveFav, addToCart, setProductPage} = useContext(Context)
    const [isCartModal, setisCartModal] = useState(false)
    const [newIem, setNewItem] = useState({})
    const cartRef = useRef(null)
    const cartButtonRef = useRef(null)

    const [displayedItems, setDisplayedItems] = useState(items)

    const handleFav = (item) => {
        !isFav(item.id) ? handleAddFav(item) : handleRemoveFav(item)
    }

    const [timerId, setTimerId] = useState(null)

    const handleCart = (item, e) => {
        if (!cartButtonRef.current.contains(e.target)) {
            e.preventDefault()
        }
        addToCart(item)
    
        // Clear the existing timer if it exists
        timerId && clearTimeout(timerId)
    
        // Set a new timer with the original time (2500)
        const newTimerId = setTimeout(() => {
            setisCartModal(false)
        }, 2000)
    
        setNewItem(item)
        setTimerId(newTimerId)
        setisCartModal(true)
    }

    return ( 
        <div className="blue-700">
            <Filter items={items} setDisplayedItems={setDisplayedItems}/>

            <div className="w-full grid grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-flow-dense gap-x-4 gap-y-4 sm:gap-y-6">
                {displayedItems.map((item, index) => {
                    return (
                        <div 
                            className={`
                                ${index % 9 !== 4 ? 'h-max' : 'row-span-2 col-span-2'} 
                                ${index % 9 === 4 & index % 2 === 1 && 'col-start-3 sm:col-start-2 xs:col-start-1'} 
                                ${index % 9 === 4 & index % 2 !== 1 && 'sm:col-start-1 '}`
                            } 
                            key={index}
                        >
                            <Link to={`/productpage/${item.id}`} 
                                className="h-[calc(100%-70px)] block relative"
                            >
                                <img className="w-full h-full object-cover object-top" src={item.img} alt="" />
                                <button 
                                    className="w-max p-2 m-auto absolute border border-neutral-500 hover:border-0 bottom-6 right-0 left-0 hover:scale-110 bg-white bg-opacity-40 hover:opacity-100 rounded-full"
                                    onClick={(e) => {handleCart(item, e)}}
                                    ref={cartButtonRef}
                                >
                                    <img className="w-full h-full" src={favIcon} alt="" />
                                </button>
                            </Link>
                            <div className=" h-[70px] pt-2 pr-4 relative">
                                <Link 
                                    to={`/productpage/${item.id}`}
                                    onClick={() => setProductPage(item.id)}
                                    className="text-[18px] mt-1 hover:underline"
                                >
                                    {item.name}
                                </Link>
                                <p className="text-sm font-semibold">${item.price}</p>
                                {/*<span className="text-xs text-red-400">{item.newArrival && 'New Arrival'}</span>*/}

                                {/*favorite button*/}
                                <button onClick={() => handleFav(item)} className={`h-4 w-4 absolute top-3 right-0 ${isFav(item.id) ? 'text-red-500' : 'text-gray-200 hover:text-red-500'}`}>
                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                </button>
                            </div>
                        </div>
                    )}
                )}
            </div>

            {isCartModal && 
                <div ref={cartRef} className="fixed z-[999] text-lg bg-white border border-black border-r-0 w-96 top-0 right-0 pt-10 p-4">
                    <p>Item added succesfully!</p>
                    <div className="flex border mt-4 border-black">
                        <img className=" w-[35%] border-r border-black" src={newIem.img} alt="" />
                        <div className=" text-lg font-medium p-3 w-full">
                            <p>{newIem.name}</p>
                            <p>${newIem.price}</p>
                        </div>
                    </div>

                    <Link  to={'/cart'} className=" mt-10 h-16 border border-black p-4 w-full block text-lg font-bold text-center hover:bg-black hover:text-white">
                        VIEW CART
                    </Link>

                    <button onClick={() => setisCartModal(false)}>
                        <svg className="absolute top-2 right-4 " xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>                       
                    </button>
                </div>
            }
        </div>
    )
}

export default Section
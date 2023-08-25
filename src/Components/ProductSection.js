import { useContext, useState, useRef, useEffect } from "react"
import { Context } from "../Utilities/Context"
import { Link } from "react-router-dom"
import angleDown from "../Assets/Images/down.png"
import settingsIcon from "../Assets/Icons/settings.svg"
import sortIcon from "../Assets/Icons/sort.svg"

const Section = ({ items }) => {
    const { isFav, handleAddFav, handleRemoveFav, addToCart} = useContext(Context)
    const [isCartModal, setisCartModal] = useState(false)
    const [newIem, setNewItem] = useState({})
    const cartRef = useRef(null)

    const handleClickOutside = (event) => {
        /*if (cartRef.current && !cartRef.current.contains(event.target)) {
          if(isCartModal){ 
            setisCartModal(false)
            }
        }*/
        console.log('outside')
    }

    useEffect(() => {
        const handleDocumentClick = (event) => {
            handleClickOutside(event)
        }
    
        document.addEventListener('click', handleDocumentClick)
    
        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [])

    const filters = [
        'Colour', 'Size', 'Price', 'Material', 'Others'
    ]

    const handleFav = (item) => {
        !isFav(item.id) ? handleAddFav(item) : handleRemoveFav(item)
    }

    const [timerId, setTimerId] = useState(null)

    const handleCart = (item) => {
        addToCart(item)
    
        // Clear the existing timer if it exists
        timerId && clearTimeout(timerId)
    
        // Set a new timer with the original time (2500)
        const newTimerId = setTimeout(() => {
            setisCartModal(false)
        }, 2500)
    
        setNewItem(item)
        setTimerId(newTimerId)
        setisCartModal(true)
    }

    return ( 
        <div className="">
            <div className="mb-10 flex justify-between font-bold ">
                <div className="flex text-sm">
                    {filters.map(filter => {
                        return (
                            <button className=" lg:hidden tracking-wide flex flex-w items-center mr-7 py-1 rounded-full  border-gray-400" key={filter}>
                                <span className=" uppercase">{filter}</span>
                                <img className="w-5 ml-2" src={angleDown} alt="" />
                            </button>
                        )}
                    )}

                    <button className="ml-6 lg:ml-0 flex items-center tracking-wide">
                        <img className="w-5 mr-3" src={settingsIcon} alt="Settings Icon"/>
                        <span>ALL FILTERS</span>
                    </button>
                </div>  

                <div className="flex items-center ">
                    <button className="mr-10 flex items-center tracking-wide">
                        <img className="w-5 mr-1" src={sortIcon} alt="Sort Icon" />
                        <span>SORT BY</span>
                    </button>

                    <p className=" font-normal">146 items</p>
                </div>              
            </div>


            <div className="w-full grid grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-flow-dense gap-x-4 gap-y-10">
                {items.map((item, index) => {
                    return (
                        <div className={`${index % 9 !== 4 ? 'h-max' : 'row-span-2 col-span-2'} ${index % 9 === 4 & index % 2 === 1 && 'col-start-3 sm:col-start-2 xs:col-start-1'} ${index % 9 === 4 & index % 2 !== 1 && 'sm:col-start-1 '}`} key={index}>
                            <div className="h-[calc(100%-90px)] relative">
                                <img className="w-full h-full object-cover object-top" src={item.img} alt="" />
                                <button 
                                    className="w-max p-2 m-auto absolute border border-neutral-500 hover:border-0 bottom-6 right-0 left-0 hover:scale-110 bg-white bg-opacity-40 hover:bg-opacity-100 rounded-full"
                                    onClick={() => handleCart(item)}
                                >
                                    <svg className="" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                                </button>
                            </div>
                            <div className=" h-[90px] pt-2 relative">
                                <div className="flex">
                                    <div className="w-max p-[1px] border rounded-full mr-1">
                                        <div className="w-[14px] h-[14px] border bg-black rounded-full"></div>
                                    </div>
                                    <div className="w-max p-[1px] border rounded-full mr-1">
                                        <div className="w-[14px] h-[14px] border bg-gray-300 rounded-full"></div>
                                    </div>
                                    <div className="w-max p-[1px] border rounded-full mr-1">
                                        <div className="w-[14px] h-[14px] border bg-red-500 rounded-full"></div>
                                    </div>                                
                                </div>

                                <p className="text-lg font-medium mt-1">{item.name}</p>
                                <p>${item.price}</p>
                                {/*<span className="text-xs text-red-400">{item.newArrival && 'New Arrival'}</span>*/}

                                {/*favorite button*/}
                                <button onClick={() => handleFav(item)} className={`h-6 w-6 absolute top-2 right-1 ${isFav(item.id) ? 'text-red-500' : 'text-gray-200 hover:text-red-500'}`}>
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

                    <Link  to={'/cart'} className=" mt-10 h-16 border-2 border-black p-4 w-full block text-lg font-bold text-center hover:bg-black hover:text-white">
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
import { useContext, useEffect } from "react"
import { Context } from "../Context"
import angleDown from "../Assets/Images/down.png"

const Section = ({ items }) => {
    const { cart, setCart} = useContext(Context)

    const size = (index) => {
        switch (index) {
            default: return 'auto'
            case 4: 
                return ('2 / 1 / 4 / 3')
            case 13: 
                return ('5 / 3 / 7 / 5')
            case 22: 
                return ('8 / 1 / 10/ 3')
            case 31:
                return ('11 / 3 / 13 / 5')
            case 40:
                return ('14 / 1 / 16 / 3')
        }
    }

    const filters = [
        'colour', 'size', 'price', 'material', 'others'
    ]

    const AddToCart = (item) => {
        setCart(cart => [...cart, item])
    }

    return ( 
        <div className="">
            <div className="mb-10 flex">
                {filters.map(filter => {
                    return (
                        <button className=" flex items-center mr-2 pl-3 pr-2 py-1 border-2 border-black" >
                            <span className="">{filter}</span>
                            <img className="w-5 ml-5" src={angleDown} alt="" />
                        </button>
                    )}
                )}
            </div>

            <div className="w-full grid grid-cols-4 gap-x-4 gap-y-10">
                {items.map((item, index) => {
                    return (
                        <div style={{ gridArea: size(index) }} className={`${index % 9 === 4 ? 'h-full max-w-[640px]' : ''}`} key={index}>
                            <div className="h-[calc(100%-90px)] relative">
                                <img className="w-full h-full object-cover object-top" src={item.img} alt="" />
                                <button
                                    className="h-8 w-8 hover:scale-110 absolute bottom-6 left-1/2 right-1/2 bg-white bg-opacity-60 hover:bg-opacity-100 flex justify-center items-center rounded-full hover:text-red-500"
                                    onClick={() => AddToCart(item)}
                                >
                                    <svg className="" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                                </button>
                            </div>
                            <div className="bg-white h-[90px] pt-2 relative">
                                <div className="flex">
                                    <div className="w-max p-[2px] border rounded-full mr-1">
                                        <div className="w-4 h-4 border bg-black rounded-full"></div>
                                    </div>
                                    <div className="w-max p-[2px] border rounded-full mr-1">
                                        <div className="w-4 h-4 border bg-gray-300 rounded-full"></div>
                                    </div>
                                    <div className="w-max p-[2px] border rounded-full mr-1">
                                        <div className="w-4 h-4 border bg-red-500 rounded-full"></div>
                                    </div>                                
                                </div>

                                <p className="text-xl mt-1">{item.name}</p>
                                <p>{item.price}</p>
                                <span className="text-xs text-red-400">{item.newArrival && 'New Arrival'}</span>

                                <button className="h-6 w-6 absolute top-2 right-1 text-gray-200 hover:text-red-500">
                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                </button>
                            </div>

                        </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default Section
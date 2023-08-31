import { Link, useParams } from "react-router-dom"
import { allData } from "../Assets/data"
import Footer from "./Footer"
import { useRef } from "react"
import { useState } from "react"
import { useContext } from "react"
import { Context } from "../Utilities/Context"

const ProductPage = () => {
    const { addToCart } = useContext(Context)
    const { productId } = useParams()
    const fixedRef = useRef(null)
    const scrollableRef = useRef(null)
    const [currentTab, setCurrentTab] = useState('description')

    const handleScroll = (e) => {
        if (e.deltaY !== 0) {
            scrollableRef.current.scrollTop += e.deltaY
        }
    }

    const [isCartModal, setisCartModal] = useState(false)
    const cartRef = useRef(null)
    const handleCart = (item) => {
        addToCart(item)
        
        setisCartModal(true)
  
        setTimeout(() => {
            setisCartModal(false)
        }, 2500)
    }


    // Find the product based on productId
    const currentProduct = allData.find(product => product.id === productId)

    return (
        <div>
            <div className="h-full w-full -mn:flex relative">
                <div 
                    ref={scrollableRef}
                    onWheel={handleScroll}
                    className="-mn:w-1/2 overflow-x-hidden mn:h-[calc(100vh-173px)] mn:flex"
                >
                    <img className="-mn:h-screen h-full object-cover" src={currentProduct.img} alt="" />
                    <img className="-mn:h-screen h-full object-cover" src={currentProduct.img} alt="" />
                    <img className="-mn:h-screen h-full object-cover" src={currentProduct.img} alt="" />
                </div>

                <div 
                    ref={fixedRef}
                    className="-mn:w-1/2 -mn:h-screen -mn:pt-[12%] -mn:pb-8 py-12 px-[7%] flex flex-col justify-between sticky top-0 right-0 bg-[#faf9f8]"
                >
                    <div>
                        <div className="mn:hidden -mn:mb-8">
                            <p className="text-3xl mb-1">{currentProduct.name}</p>
                            <p className="text-lg">{currentProduct.price}</p>                            
                        </div>


                        <div className=" text-sm">
                            <div className="mb-3">
                                <button onClick={()=>setCurrentTab('description')} className={`mr-5 ${currentTab === 'description' && 'underline underline-offset-2 font-medium'}`}>Description</button>
                                <button onClick={()=>setCurrentTab('details')} className={`mr-5 ${currentTab === 'details' && 'underline underline-offset-2 font-medium'}`}>Details</button>
                                <button onClick={()=>setCurrentTab('shipping')} className={`${currentTab === 'shipping' && 'underline underline-offset-2 font-medium'}`}>Shipping</button>                           
                            </div>

                            
                            {currentTab === 'description' && 
                                <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                                </div>
                            }

                            {currentTab === 'details' && 
                                <div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                                </div>
                            }

                            {currentTab === 'shipping' && 
                                <div>
                                    <p className="mb-4">Complimentary shipping on orders over 99 USD. For orders outside of America, duties will be calculated at checkout.</p>
                                    <p>For more information, see shipping & returns</p>
                                </div>
                            }

                            <button onClick={() => handleCart(currentProduct)} className="mn:hidden mt-12 py-2 text-base border border-black hover:bg-black hover:text-white w-full">
                                Add to Cart
                            </button>                        
                        </div>                       
                    </div>

                    <div className=" mn:mt-10 flex justify-between text-[12px] italic">
                        <span>Complimentary shipping on orders over 99 USD</span>
                        <span>Need Help?</span>
                    </div>
                </div>

                <div className="px-[8%] py-7 -mn:hidden sticky z-10 border-t border-black bg-[#faf9f8] bottom-0">
                    <div className="flex justify-between">
                        <p className="text-lg ">{currentProduct.name}</p>
                        <p className="text-sm">{currentProduct.price}</p>
                    </div>

                    <button onClick={() => handleCart(currentProduct)} className="mt-6 py-2 text-base bg-black text-white w-full">
                        Add to Cart
                    </button>   
                </div>
            </div>

            <Footer />     
            
                            
            {isCartModal && 
                <div ref={cartRef} className="fixed z-[999] text-lg bg-white border border-black border-r-0 w-96 top-0 right-0 pt-10 p-4">
                    <p>Item added succesfully!</p>
                    <div className="flex border mt-4 border-black">
                        <img className=" w-[35%] border-r border-black" src={currentProduct.img} alt="" />
                        <div className=" text-lg font-medium p-3 w-full">
                            <p>{currentProduct.name}</p>
                            <p>${currentProduct.price}</p>
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

export default ProductPage
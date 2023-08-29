import { useParams } from "react-router-dom"
import { allData } from "../Assets/data"
import Footer from "./Footer"
import { useRef } from "react"

const ProductPage = () => {
    const { productId } = useParams()
    const fixedRef = useRef(null)
    const scrollableRef = useRef(null)

    const handleScroll = (e) => {
        if (e.deltaY !== 0) {
            scrollableRef.current.scrollTop += e.deltaY
        }
    }

    // Find the product based on productId
    const currentProduct = allData.find(product => product.id === productId)

    return (
        <div>
            <div className="h-full w-full flex relative">
                <div 
                    ref={scrollableRef}
                    onWheel={handleScroll}
                    className="w-1/2 h-full"
                >
                    <img className="w-full  object-cover" src={currentProduct.img} alt="" />
                    <img className="w-full object-cover" src={currentProduct.img} alt="" />
                    <img className="w-full  object-cover" src={currentProduct.img} alt="" />
                </div>

                <div 
                    ref={fixedRef}
                    className="w-1/2 pt-40 px-[8%] sticky top-0 right-0 h-screen bg-[#faf9f8]"
                >
                    <p className="text-3xl">{currentProduct.name}</p>
                    <p className="text-lg">{currentProduct.price}</p>

                    <div className="mt-10">
                        <div className="mb-3">
                            <button className="mr-5 underline underline-offset-2">Description</button>
                            <button className="mr-5">Details</button>
                            <button>Shipping</button>                           
                        </div>

                        <div >
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
 
                    </div>
                </div>
            </div>

            <Footer />            
        </div>

    )
}

export default ProductPage
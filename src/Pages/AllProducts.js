import { Link } from "react-router-dom"
import Footer from "../Components/Footer"
import Section from "../Components/ProductSection"
import { allData } from "../Assets/data"
import { useRef } from "react"

const AllProducts = () => {
    const categories = [
        {name: "Dresses", link: "/category/dresses", img: require("../Assets/Images/category-icons/dresses.jpg")},
        {name: "Shirts", link: "/category/shirts", img: require("../Assets/Images/category-icons/shirts.jpg")},
        {name: "Pants", link: "/category/pants", img: require("../Assets/Images/category-icons/pants.jpg")},
        {name: "Skirts", link: "/category/skirts", img: require("../Assets/Images/category-icons/skirts.jpg")},
        {name: "Shoes", link: "/category/shoes", img: require("../Assets/Images/category-icons/shoes.jpg")},
        {name: "Accessories", link: "/category/accessories", img: require("../Assets/Images/category-icons/accessories.jpg")},
        {name: "Sportswears", link: "/category/sportswears", img: require("../Assets/Images/category-icons/sportswears.jpg")},
        {name: "Jackets", link: "/category/jackets", img: require("../Assets/Images/category-icons/jackets.jpg")},
    ]

    const categoryContainerRef = useRef(null)
    const scrollStep = 200

    const scrollContainer = (scrollDirection) => {
        if (categoryContainerRef.current) {
            const currentScroll = categoryContainerRef.current.scrollLeft
            if (scrollDirection === 'left') {
                categoryContainerRef.current.scrollTo({
                    left: currentScroll - scrollStep,
                    behavior: 'smooth',
                })
            } else if (scrollDirection === 'right') {
                categoryContainerRef.current.scrollTo({
                    left: currentScroll + scrollStep,
                    behavior: 'smooth',
                })
            }
        }
    }

    return (
        <div className="w-full h-full px-[5%] pt-36 pb-24 relative">
            <div className="w-full max-w-[900px] p-3 mb-10 m-auto text-sm h-max bg-orange-100 text-center">
                <p>Ignis Exclusive</p>
                <p className=" text-red-500 text-3xl font-semibold">Big Summer Sales. Up to 20% off all items!</p>
                <div className="flex justify-center items-center mt-1">
                    <span className="mr-16"><button className=" underline">Explore the Collection</button></span>
                    <span>Not a Member? <button className=" underline" href="#">Join now!</button></span>                    
                </div>
            </div>

            <div className="mb-20 w-full overflow-hidden">
                <h1 className="text-5xl mb-6">All Cloths, Shoes,<br /> Bags, and Accessories.</h1>

                <div className="relative grid grid-cols-[60px_1fr_60px]  w-full">        
                    <button className="h-full left-0" onClick={() => scrollContainer('left')}>
                        <svg className="mx-auto h-14 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    </button>   

                    <div className="flex w-full overflow-hidden" ref={categoryContainerRef}>
                        {categories.map(category => {
                            return (
                                <Link to={category.link} className="mr-8 text-lg text-center w-max" key={category.name}>
                                    <img className="mb-1 rounded-full" src={category.img} alt="" />                 
                                    <p>{category.name}</p>               
                                </Link>
                            )}
                        )}
                    </div>         
        
                    <button className="h-full " onClick={() => scrollContainer('right')}>
                        <svg className="mx-auto h-14 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    </button>   
                </div>
            </div>

            <Section items={allData}/>

            <Footer />
        </div>
    )
}

export default AllProducts
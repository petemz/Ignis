//import { useContext, useEffect } from "react"
//import { Context } from "../Context"
import { Link } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Section from "../Components/Section"
import { allData } from "../Assets/data"

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

    return (
        <div className="w-full h-full px-[5%] pt-36 pb-24 relative">
            <Header />

            <div className="w-full max-w-[900px] p-3 mb-10 m-auto text-sm h-max bg-orange-100 text-center">
                <p>Ignis Exclusive</p>
                <p className=" text-red-500 text-3xl font-semibold">Big Summer Sales. Up to 20% off all items!</p>
                <div className="flex justify-center items-center mt-1">
                    <span className="mr-16"><a className=" underline" href="#">Explore the Collection</a></span>
                    <span>Not a Member? <a className=" underline" href="#">Join now!</a></span>                    
                </div>
            </div>

            <div className="mb-20">
                <h1 className="text-5xl mb-6">All Cloths, Shoes,<br /> Bags, and Accessories.</h1>
                <div className="flex flex-wrap">
                    {categories.map(category => {
                        return (
                            <Link to={category.link} className="mb-10 mr-8 text-xl text-center w-max" key={category.name}>
                                <img className="mb-1 rounded-full" src={category.img} alt="" />                 
                                <p>{category.name}</p>               
                            </Link>
                        )}
                    )}
                </div>
            </div>

            <Section items={allData}/>

            <Footer />
        </div>
    )
}

export default AllProducts
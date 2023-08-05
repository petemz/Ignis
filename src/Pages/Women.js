//import { useContext, useEffect } from "react"
//import { Context } from "../Context"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Section from "../Components/Section"
import { womenData } from "../Assets/data"

const Women = () => {
    //const {  } = useContext(Context)

    const categories = [
        {name: "Dresses", link: "/category/dresses", img: require("../Assets/Images/Categories/dresses.jpg")},
        {name: "Shirts", link: "/category/shirts", img: require("../Assets/Images/Categories/shirts.jpg")},
        {name: "Pants", link: "/category/pants", img: require("../Assets/Images/Categories/pants.jpg")},
        {name: "Skirts", link: "/category/skirts", img: require("../Assets/Images/Categories/skirts.jpg")},
        {name: "Shoes", link: "/category/shoes", img: require("../Assets/Images/Categories/shoes.jpg")},
        {name: "Accessories", link: "/category/accessories", img: require("../Assets/Images/Categories/accessories.jpg")},
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
                <div className="flex">
                    {categories.map(category => {
                        return (
                            <div className=" mr-8 text-xl text-center w-max">
                                <img className="mb-1 rounded-full" src={category.img} alt="" />                 
                                <p>{category.name}</p>               
                            </div>
                        )}
                    )}
                </div>
            </div>

            <Section items={womenData}/>

            <Footer />
        </div>
    )
}

export default Women
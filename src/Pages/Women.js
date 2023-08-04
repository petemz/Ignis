import { useContext, useEffect } from "react"
import { Context } from "../Context"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Section from "../Components/Section"
import { womenData } from "../Assets/data"


const Women = () => {
    const { setCurrentPage } = useContext(Context)


    useEffect(() => {
        setCurrentPage('women')
    })

    return (
        <div className="w-full h-full pt-48 pb-24 relative">
            <Header />

            <div className="w-full max-w-[900px] p-3 mb-20 m-auto text-sm h-max bg-orange-100 text-center">
                <p>Ignis Exclusive</p>
                <p className=" text-red-500 text-3xl font-semibold">Big Summer Sales. Up to 20% off all items!</p>
                <div className="flex justify-center items-center mt-1">
                    <span className="mr-16"><a className=" underline" href="#">Explore the Collection</a></span>
                    <span>Not a Member? <a className=" underline" href="#">Join now!</a></span>                    
                </div>

            </div>

            <Section items={womenData}/>

            <Footer />
        </div>
    )
}

export default Women
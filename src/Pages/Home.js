import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import homeImg1 from "../Assets/Images/home9.jpg"
import homeImg2 from "../Assets/Images/home2.jpg"
import homeImg3 from "../Assets/Images/home1.jpg"
import homeImg4 from "../Assets/Images/home4.jpg"

const  Home = () => {
    const slides = [
        <Link
            to={'/all-products'}
            style={{ backgroundImage: `url(${homeImg2})`, transition: 'background-image 0.5s' }} 
            className="w-full h-screen bg-center bg-cover text-xl font-semibold flex flex-col justify-end pb-[20vh]"
        >
            <div className="pl-[8vw] text-white">
                <h1 className="text-5xl mb-3">Season Premiere</h1>
                <p>Presenting new-season essentials<br/> designed for all your life's moments.</p>                
            </div>

        </Link>,
        <Link 
            to={'/all-products'}
            style={{ backgroundImage: `url(${homeImg1})`, transition: 'background-image 0.5s' }} 
            className="w-full h-screen bg-center bg-cover text-xl font-semibold flex flex-col justify-end pb-[20vh]"
        >
            <div className="pl-[18vw] text-white">
                <h1 className="text-5xl mb-3">Summer's Hottest Essentials</h1>
                <p>Look put together & sleek at the same time</p>                
            </div>

        </Link>,
        <Link 
            to={'/all-products'}
            style={{ backgroundImage: `url(${homeImg3})`, transition: 'background-image 0.5s' }} 
            className="w-full h-screen bg-center bg-cover text-xl font-semibold flex flex-col justify-end pb-[20vh]"
        >
            <div className="pl-[8vw]">
                <h1 className="text-5xl mb-3">Season Premiere</h1>
                <p>Presenting new-season essentials<br/> designed for all your life's moments.</p>                
            </div>

        </Link>,
        <Link 
            to={'/all-products'}
            style={{ backgroundImage: `url(${homeImg4})`, transition: 'background-image 0.5s' }} 
            className="w-full h-screen bg-center bg-cover text-xl font-semibold flex flex-col justify-end pb-[20vh]"
        >
            <div className="pl-[8vw] text-white">
                <h1 className="text-5xl mb-3">Graphic Tees</h1>
                <p>Buy merchs of your favorite Animations</p>                
            </div>
        </Link>
    ]
    const [activeIndex, setActiveIndex] = useState(0)

    const nextSlide = () => {
      setActiveIndex((activeIndex + 1) % slides.length)
    }
  
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 4000)
    
        return () => {
            clearInterval(intervalId)
        }
    }, [activeIndex])

    return (
        <div className="w-full h-screen">
                <div className="relative w-full h-screen overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                        key={index}
                        className={`slide absolute h-screen w-full ease-in-out duration-500 transition-opacity ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                        {slide}
                        </div>
                    ))}
                </div>

            <div className="absolute bottom-10 left-5 flex flex-col items-center">
                {slides.map((slide, index) => {
                    return(
                        <div className={`${activeIndex === index ? 'w-[10px] h-[10px]' : 'w-[5px] h-[5px]'} mb-3 bg-white rounded-full`} key={index}></div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
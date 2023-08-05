import { useState, useEffect, useContext } from "react"
import homeImg1 from "../Assets/Images/home9.jpg"
import homeImg2 from "../Assets/Images/home2.jpg"
import homeImg3 from "../Assets/Images/home1.jpg"
import homeImg4 from "../Assets/Images/home4.jpg"
import Header from "../Components/Header"
import { Context } from "../Context"

const  Home = () => {
    const { setCurrentPage } = useContext(Context)
    const slides = [
        <div style={{ backgroundImage:  `url(${homeImg2})`, backgroundPosition: 'center', backgroundSize: 'cover', transition: 'background-image 0.5s' }} className="w-full h-full text-xl font-semibold flex flex-col justify-end pb-[20vh]">
            <Header />
            <div className="pl-[8vw] text-white">
                <h1 className="text-5xl mb-3">Season Premiere</h1>
                <p>Presenting new-season essentials<br/> designed for all your life's moments.</p>                
            </div>

        </div>,
        <div style={{ backgroundImage:  `url(${homeImg1})`, backgroundPosition: 'center', backgroundSize: 'cover', transition: 'background-image 0.5s' }} className="w-full h-full text-xl font-semibold flex flex-col justify-end pb-[30vh]">
            <Header />
            <div className="pl-[18vw] text-white">
                <h1 className="text-5xl mb-3">Summer's Hottest Essentials</h1>
                <p>Look put together & sleek at the same time</p>                
            </div>

        </div>,
        <div style={{ backgroundImage:  `url(${homeImg3})`, backgroundPosition: 'center', backgroundSize: 'cover', transition: 'background-image 0.5s' }} className="w-full h-full text-xl font-semibold flex flex-col justify-end pb-[20vh]">
            <Header/>
            <div className="pl-[8vw]">
                <h1 className="text-5xl mb-3">Season Premiere</h1>
                <p>Presenting new-season essentials<br/> designed for all your life's moments.</p>                
            </div>

        </div>,
        <div style={{ backgroundImage:  `url(${homeImg4})`, backgroundPosition: 'center', backgroundSize: 'cover', transition: 'background-image 0.5s' }} className="w-full h-full text-xl font-semibold flex flex-col justify-end pb-[20vh]">
            <Header color={'white'}/>
            <div className="pl-[8vw] text-white">
                <h1 className="text-5xl mb-3">Graphic Tees</h1>
                <p>Buy merchs of your favorite Animations</p>                
            </div>
        </div>
    ]
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide(current => {
              return current < 3 ? current + 1 : 0
            })
        }, 4000)

        return () => {
            clearInterval(intervalId)
        }
    })

    return (
        <div className="w-full h-full">
            {slides[currentSlide]}

            <div className="absolute bottom-10 left-5 flex flex-col items-center">
                {slides.map((slide, index) => {
                    return(
                        <div className={`${currentSlide === index ? 'w-[10px] h-[10px]' : 'w-[5px] h-[5px]'} mb-3 bg-white rounded-full`} key={index}></div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
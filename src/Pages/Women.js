import Section from "../Components/Section"
import dress1 from "../Assets/Images/women/dress1-e.jpg"
import dress2 from "../Assets/Images/women/dress2.jpg"
import dress3 from "../Assets/Images/women/dress3.jpg"
import dress4 from "../Assets/Images/women/dress4.jpg"
import dress5 from "../Assets/Images/women/dress5.jpg"
import dress6 from "../Assets/Images/women/dress6.jpg"
import dress7 from "../Assets/Images/women/dress7.jpg"
import dress8 from "../Assets/Images/women/dress8.jpg"
import dress9 from "../Assets/Images/women/dress9.jpg"
import dress10 from "../Assets/Images/women/dress10.jpg"
import dress11 from "../Assets/Images/women/dress11.jpg"
import dress12 from "../Assets/Images/women/dress12.jpg"
import dress13 from "../Assets/Images/women/dress13.jpg"
import dress14 from "../Assets/Images/women/dress14.jpg"
import dress15 from "../Assets/Images/women/dress15.jpg"
import dress16 from "../Assets/Images/women/dress16.jpg"
import dress17 from "../Assets/Images/women/dress17.jpg"
import dress18 from "../Assets/Images/women/dress18.jpg"

const Women = () => {
    const data = [
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress1},
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress2},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress3},
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress4},
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress5},
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress6},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress7},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress8},
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress9},
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress10},
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress11},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress12},
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress13},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress14},
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress15},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress16},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress17},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress18},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress1},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress2},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress3},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress4},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress5},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress6},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress7},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress8},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress9},
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress10},
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress11},
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress12},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress13},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress14},
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress15},
        {name: 'Enchanted Garden Gown', price: '$100', newArrival: true, img: dress16},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress17},
        {name: 'Enchanted Garden Gown', price: '$100', img: dress18},
    ]

    return (
        <div className="w-full h-full pt-40 overflow-y-scroll">
            <div className="w-[500px] p-3 mb-20 m-auto h-max bg-orange-100 text-red-500 text-center text-3xl font-semibold">
                <p>Big Summer Sales</p>
                <p>Up to 20% off all items</p>
                <p className="text-sm mt-1 text-black font-normal">Sales end soon. Join now to enjoy!</p>
            </div>

            <Section items={data}/>
        </div>
    )
}

export default Women
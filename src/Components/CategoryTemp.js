import Footer from "./Footer"
import Section from "./Section"

const Category = ({ data, img, introText }) => {
    return (
        <div className="pt-28 px-[5%] sm:px-[3%] xs:px-[2%]">
            <div className="mb-20 text-lg">
                <img className="w-full mb-7" src={img} alt="" />
                <h1 className="text-6xl font-medium">{introText.heading}</h1>
                <p>{introText.body}</p>
            </div>

            <Section items={data}/>

            <Footer />
        </div>
    )
}

export default Category
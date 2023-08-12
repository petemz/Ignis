import { dressesData } from "../../Assets/data"
import Footer from "../../Components/Footer"
import Section from "../../Components/Section"

const Dresses = () => {
    return (
        <div className="pt-28 px-[5%] sm:px-[3%] xs:px-[2%]">
            <div className="mb-20 text-lg">
                <img className="w-full mb-7" src={require("../../Assets/Images/Categories/Dresses/page-intro-test.jpg")} alt="" />
                <h1 className="text-6xl font-medium">Dresses!</h1>
                <p>It's time to hit wardrobe refresh with soon-to-be-fave dresses.</p>
            </div>

            <Section items={dressesData}/>

            <Footer />
        </div>
    )
}

export default Dresses
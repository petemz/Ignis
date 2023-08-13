import { dressesData } from "../../Assets/data"
import Category from "../../Components/CategoryTemp"

const Dresses = () => {
    const introText = {heading: 'Dresses!', body: "It's time to hit wardrobe refresh with soon-to-be-fave dresses."}
    return (
        <Category introText={introText} data={dressesData} img={require("../../Assets/Images/Categories/Dresses/page-intro-test.jpg")}/>
    )
}

export default Dresses
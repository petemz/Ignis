import { dressesData, accessoriesData, shirtsData, skirtsData, pantsData, shoesData, jacketsData, sportswearsData } from "../Assets/data"
import CategoryTemp from "../Components/CategoryTemp"

export const Dresses = () => {
    const introText = {heading: 'Dresses!', body: "It's time to hit wardrobe refresh with soon-to-be-fave dresses."}
    return (
        <CategoryTemp introText={introText} data={dressesData} img={require("../Assets/Images/Categories/Dresses/page-intro-test.jpg")}/>
    )
}

export const Accessories = () => {
    const introText = {heading: 'Accesories!', body: "It's time to hit wardrobe refresh with soon-to-be-fave accesories."}
    return (
        <CategoryTemp introText={introText} data={accessoriesData} img={require("../Assets/Images/Categories/Dresses/page-intro-test.jpg")}/>
    )
}

export const Shirts = () => {
    const introText = {heading: 'Shirts!', body: "It's time to hit wardrobe refresh with soon-to-be-fave Shirts."}
    return (
        <CategoryTemp introText={introText} data={shirtsData} img={require("../Assets/Images/Categories/Dresses/page-intro-test.jpg")}/>
    )
}

export const Skirts = () => {
    const introText = {heading: 'Skirts!', body: "It's time to hit wardrobe refresh with soon-to-be-fave Skirts."}
    return (
        <CategoryTemp introText={introText} data={skirtsData} img={require("../Assets/Images/Categories/Dresses/page-intro-test.jpg")}/>
    )
}

export const Pants = () => {
    const introText = {heading: 'Pants!', body: "It's time to hit wardrobe refresh with soon-to-be-fave Pants."}
    return (
        <CategoryTemp introText={introText} data={pantsData} img={require("../Assets/Images/Categories/Dresses/page-intro-test.jpg")}/>
    )
}

export const Shoes = () => {
    const introText = {heading: 'Shoes!', body: "It's time to hit wardrobe refresh with soon-to-be-fave shoes."}
    return (
        <CategoryTemp introText={introText} data={shoesData} img={require("../Assets/Images/Categories/Dresses/page-intro-test.jpg")}/>
    )
}

export const Jackets = () => {
    const introText = {heading: 'Jackets!', body: "It's time to hit wardrobe refresh with soon-to-be-fave jackets."}
    return (
        <CategoryTemp introText={introText} data={jacketsData} img={require("../Assets/Images/Categories/Dresses/page-intro-test.jpg")}/>
    )
}

export const Sportswears = () => {
    const introText = {heading: 'Sportswears!', body: "It's time to hit wardrobe refresh with soon-to-be-fave sportswears."}
    return (
        <CategoryTemp introText={introText} data={sportswearsData} img={require("../Assets/Images/Categories/Dresses/page-intro-test.jpg")}/>
    )
}
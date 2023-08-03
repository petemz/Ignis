import Section from "../Components/Section"

const Women = () => {
    const data = []

    return (
        <div className="w-full h-full pt-40 bg-gray-700 overflow-y-scroll">
            <div className="w-[500px] p-3 mb-20 m-auto h-max bg-orange-100 text-red-500 text-center text-3xl font-semibold">
                <p>Big Summer Sales</p>
                <p>Up to 20% off all items</p>
                <p className="text-sm mt-1 text-black font-normal">Sales end soon. Join now to enjoy!</p>
            </div>

            <Section />
        </div>
    )
}

export default Women
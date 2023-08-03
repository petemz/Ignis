import dress1 from "../Assets/Images/women/dress1-e.jpg"

const Section = ({ items }) => {
    const size = (index) => {
        //index % 12 === 4 ? 16 23
        switch (index) {
            default: return 'auto'
            case 4: 
                return ('2 / 1 / 4 / 3')
            case 13: 
                return ('5 / 3 / 7 / 5')
            case 22: 
                return ('8 / 1 / 10/ 3')
            case 31:
                return ('11 / 3 / 13 / 5')
            case 40:
                return ('14 / 1 / 16 / 3')
        }
    }

    return ( 
        <div className="w-full h-full grid grid-cols-4 gap-x-4 gap-y-10 px-[5%]">
            {items.map((item, index) => {
                return (
                    <div style={{ gridArea: size(index) }} className={`${index % 9 === 4 ? 'h-full max-w-[640px]' : ''}`} key={index}>
                        <div style={{  }} className="h-[calc(100%-90px)] relative">
                            <img className="w-full h-full object-cover object-top" src={item.img} alt="" />
                            <button className="h-6 w-6 absolute bottom-6 right-6 text-gray-200 hover:text-red-500">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                            </button>
                        </div>
                        <div className="bg-white h-[90px] pt-2">
                            <div className="flex">
                                <div className="w-max p-[2px] border rounded-full mr-1">
                                    <div className="w-4 h-4 border bg-black rounded-full"></div>
                                </div>
                                <div className="w-max p-[2px] border rounded-full mr-1">
                                    <div className="w-4 h-4 border bg-gray-300 rounded-full"></div>
                                </div>
                                <div className="w-max p-[2px] border rounded-full mr-1">
                                    <div className="w-4 h-4 border bg-red-500 rounded-full"></div>
                                </div>                                
                            </div>

                            <p className="text-xl mt-1">{item.name}</p>
                            <p>{item.price}</p>
                            <span className="text-xs text-red-400">{item.newArrival && 'New Arrival'}</span>
                        </div>

                    </div>
                )}
            )}
        </div>
    )
}

export default Section
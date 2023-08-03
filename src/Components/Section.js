import dress1 from "../Assets/Images/women/dress1-e.jpg"

const Section = ({ items }) => {
    const sections = [
        'turquoise', 'gold', 'pink', 'red', 'orange', 'black', 'gold', 'blue', 'green', 'yellow', 'grey', 'teal', 'brown', 'cyan', 'purple', 'turquoise', 'gold', 'pink', 'red', 'orange', 'black', 'red', 'blue', 'green', 'yellow', 'grey', 'teal', 'brown', 'cyan', 'purple', 'turquoise', 'gold', 'pink', 'red', 'orange', 'black', 'grey', 'blue', 'green', 'yellow', 'grey', 'teal', 'brown', 'cyan', 'purple',
    ]

    //console.log(sections.length)
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

    return( 
        <div className="w-full h-full grid grid-cols-4 gap-x-4 gap-y-10 px-[5%]">
            {items.map((item, index) => {
                console.log(dress1)
                console.log(item.img)
                return (
                    <div style={{ gridArea: size(index) }} className={`${index % 9 === 4 ? 'h-full max-w-[640px]' : ''} `} key={index}>
                        <div style={{  }} className="h-[calc(100%-90px)]">
                            <img className="w-full h-full object-cover object-top" src={item.img} alt="" />
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
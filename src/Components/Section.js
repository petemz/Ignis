const Section = () => {
    const sections = [
        'turquoise', 'gold', 'pink', 'red', 'orange', 'black', 'gold', 'blue', 'green', 'yellow', 'grey', 'teal', 'brown', 'cyan', 'purple', 'turquoise', 'gold', 'pink', 'red', 'orange', 'black', 'red', 'blue', 'green', 'yellow', 'grey', 'teal', 'brown', 'cyan', 'purple', 'turquoise', 'gold', 'pink', 'red', 'orange', 'black', 'grey', 'blue', 'green', 'yellow', 'grey', 'teal', 'brown', 'cyan', 'purple',
    ]

    console.log(sections.length)
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
            {sections.map((section, index) => {
                return (
                    <div style={{ gridArea: size(index) }} className={`${index % 9 === 4 ? 'h-full' : 'h-[360px]'}`}>
                        <div style={{ backgroundColor: section }} className="h-[calc(100%-90px)] bg-black">{/*img*/}</div>
                        <div className="bg-white h-[90px]">

                        </div>
                    </div>
                )}
            )}
        </div>
    )
}

export default Section
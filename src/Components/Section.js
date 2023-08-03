const Section = () => {
    const sections = [
        'pink', 'red', 'orange', 'black', 'white', 'blue', 'green', 'yellow'
    ]
    return( 
        <div className="grid grid-cols-4 ">
            {sections.map(section => {
                return (
                    <div style={{ backgroundColor: section }} className="">

                    </div>
                )}
            )}
        </div>
    )
}

export default Section
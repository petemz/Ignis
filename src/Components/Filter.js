import { useState, useRef, useEffect } from "react"
import angleDown from "../Assets/Images/down.png"
import settingsIcon from "../Assets/Icons/settings.svg"
import sortIcon from "../Assets/Icons/sort.svg"
import { uppercaseFirstLettter } from "../Utilities/Reusables"

const Filter = ({ items, setDisplayedItems }) => {
    const colorFilter = ['black', 'beige', 'orange', 'blue', 'brown', 'green', 'multi', 'pink']
    const materialFilter = ['silk', 'cotton', 'chiffon', 'denim', 'polyester', 'lace', 'leather', 'wool']
    const sizeFilter = ['xs', 's', 'm', 'l', 'xl', 'xxl', '3xl']

    const [isSortOpen, setIsSortOpen] = useState(false)
    const [sortType, setSortType] = useState('recommended')
    const sortItemsRef = useRef(null)
    const sortButtonRef = useRef(null)


    const priceLowtoHigh = 
        [...items].sort(function(a, b){
            return parseFloat(a.price) - parseFloat(b.price)
        })

    const handleSortClose = () => {
        isSortOpen ? setIsSortOpen(false) : setIsSortOpen(true)
    }
    
    const handleSort = (type) => {
        setSortType(type)
        setIsSortOpen(false)

        if (type === 'recommended') {
            setDisplayedItems(items)
        } else if (type === 'newest') {
            //setDisplayedItems(priceLowtoHigh)
        } else if (type === 'lowest') {
            setDisplayedItems(priceLowtoHigh)
        } else if (type === 'highest') {
            setDisplayedItems(priceLowtoHigh.reverse())
        }
    }

    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [filterObj, setFilterObj] = useState({name: '', filters: []})
    const filterRef = useRef(null)

    const handleFilterOpen = (filterName, filters) => {
        if(isFilterOpen && filterName === filterObj.name) {
            setIsFilterOpen(false) 
            setFilterObj({})
        } else if (isFilterOpen) {
            setFilterObj({name: filterName, filters: filters})
        } else if (isFilterOpen === false) {
            setIsFilterOpen(true)
            setFilterObj({name: filterName, filters: filters})
        }
    }


    useEffect(() => {
        const handleOutsideClick = (e) => {
            sortItemsRef.current && 
            !sortItemsRef.current.contains(e.target) && 
            !sortButtonRef.current.contains(e.target) && 
            setIsSortOpen(false)
        }

        document.addEventListener('mousedown', handleOutsideClick)
        
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [])

    return ( 
        <div className="mb-10 flex justify-between ">
            <div className="flex text-sm relative">
                <div className="flex relative">
                    <button 
                        onClick={() => handleFilterOpen('color', colorFilter)}
                        className=" tracking-wide flex flex-w items-center mr-7 py-1 rounded-full border-gray-400"
                    >
                        <span className=" uppercase">color</span>
                        <img className={`w-5 ml-2 ${filterObj.name === 'color' && 'rotate-180'}`} src={angleDown} alt="" />
                    </button>   

                    {isFilterOpen && filterObj.name === 'color' &&
                        <div ref={filterRef} className="absolute z-[9999] text-lg px-5 top-8 w-60 bg-white">
                            {colorFilter.map(filter => {
                                return (
                                    <p className="my-4" key="filter">{uppercaseFirstLettter(filter)}</p>
                                )}
                            )}
                        </div>
                    }
                </div>

                <div className="relative">
                    <button 
                        onClick={() => handleFilterOpen('material', materialFilter)}
                        className=" tracking-wide flex flex-w items-center mr-7 py-1 rounded-full border-gray-400"
                    >
                        <span className=" uppercase">material</span>
                        <img className={`w-5 ml-2 ${filterObj.name === 'material' && 'rotate-180'}`} src={angleDown} alt="" />
                    </button>

                    {isFilterOpen && filterObj.name === 'material' &&
                        <div ref={filterRef} className="absolute z-[9999] text-lg px-5 top-8 w-60 bg-white">
                            {materialFilter.map(filter => {
                                return (
                                    <p className="my-4" key="filter">{uppercaseFirstLettter(filter)}</p>
                                )}
                            )}
                        </div>
                    }
                </div>

                <div className="relative">
                    <button 
                        onClick={() => handleFilterOpen('size', sizeFilter)}
                        className=" tracking-wide flex flex-w items-center mr-7 py-1 rounded-full border-gray-400"
                    >
                        <span className=" uppercase">size</span>
                        <img className={`w-5 ml-2 ${filterObj.name === 'size' && 'rotate-180'}`} src={angleDown} alt="" />
                    </button>
                    
                    {isFilterOpen && filterObj.name === 'size' &&
                        <div ref={filterRef} className="absolute z-[9999] text-lg px-5 top-8 w-60 bg-white">
                            {sizeFilter.map(filter => {
                                return (
                                    <p className="my-4" key="filter">{uppercaseFirstLettter(filter)}</p>
                                )}
                            )}
                        </div>
                    }
                </div>

                <button className="ml-6 lg:ml-0 flex items-center tracking-wide">
                    <img className="w-5 mr-3" src={settingsIcon} alt="Settings Icon"/>
                    <span>ALL FILTERS</span>
                </button>
            </div>  


            <div className="flex items-center relative">
                <button ref={sortButtonRef} onClick={() => handleSortClose()} className="mr-8 flex items-center tracking-wide">
                    <img className={`w-5 mr-1  transition-all duration-75 ${isSortOpen && ' -scale-y-100'}`} src={sortIcon} alt="Sort Icon" />
                    <span>SORT BY</span>
                </button>

                {isSortOpen &&
                    <div ref={sortItemsRef} className="text-lg top-8 bg-white accent-black absolute z-[9999] ">                    
                        <label className="block cursor-pointer pl-2 pr-8 py-2 hover:bg-neutral-200">
                            <input
                                className="mr-2"
                                type="radio"
                                value="recommended"
                                checked={sortType === 'recommended'}
                                onClick={() => handleSort('recommended')}
                            />
                            Recommended
                        </label>

                        <label className="block cursor-pointer pl-2 py-2 hover:bg-neutral-200">
                            <input
                                className="mr-2"
                                type="radio"
                                value="newest"
                                checked={sortType === 'newest'}
                                onChange={() => handleSort('newest')}
                            />
                            Newest
                        </label>

                        <label className="block cursor-pointer pl-2 py-2 hover:bg-neutral-200">
                            <input
                                className="mr-2"
                                type="radio"
                                value="lowest"
                                checked={sortType === 'lowest'}
                                onChange={() => handleSort('lowest')}
                            />
                            Lowest Price
                        </label>

                        <label className="block cursor-pointer pl-2 py-2 hover:bg-neutral-200">
                            <input
                                className="mr-2"
                                type="radio"
                                value="highest"
                                checked={sortType === 'highest'}
                                onChange={() => handleSort('highest')}
                            />
                            Highest price
                        </label>
                    </div>
                }

                <p className=" font-normal">{items.length} items</p>
            </div>              
        </div>
    )
}

export default Filter
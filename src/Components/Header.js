const Header = ({color}) => {
    return (
        <header style={{ color: color }} className="fixed top-0 w-full flex justify-between px-6 pt-4 font-medium">
            {/*Hamburger menu*/}


            <div className="flex items-start">
                <button className="w-5 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </button>

                <div className="ml-[7vw] ">
                    <p className="text-8xl font-extrabold mb-4 logo">IGNIS</p>
                    <ul className="flex">
                        <li className="mr-6"><a href="#">WOMEN</a></li>
                        <li className="mr-6"><a href="#">MEN</a></li>
                        <li className="mr-6"><a href="#">KIDS</a></li>
                    </ul>
                </div>
            </div>
            
            {/*Search Input */}

            <ul className="flex items-center h-max">
                <li className="">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </a>
                </li>
                <li className="ml-8">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                    </a>
                </li>
                <li className="ml-8">
                    <a className="flex text-sm" href="">
                        <svg className="w-6 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        <span>(0)</span>
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header
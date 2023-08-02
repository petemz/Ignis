const Header = () => {
    return (
        <header className="fixed top-0 w-full flex justify-between px-6 pt-4 ">
            {/*Hamburger menu*/}


            <div className="flex items-start">
                <button className="w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
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

            <ul className="flex">
                <li className=""><a href="#">LOG IN</a></li>
                <li className="ml-6"><a href="">Wishlist</a></li>
                <li className="ml-6"><a href="">CART (0)</a></li>
            </ul>
        </header>
    )
}

export default Header
const Footer = () => {
    return (
        <footer className="mt-24 text-sm leading-relaxed px-[3%] bg-[#faf9f8] border-t border-black pt-8">
            <p className="text-8xl font-extrabold logo text-center">IGNIS</p>
            <div className="p-10 grid grid-cols-3 sm:grid-cols-2 gap-y-10 bottom-0 w-full">
                <ul className="">
                    <li><a href="/about" onClick={(e) => e.preventDefault()}>About us</a></li>
                    <li><a href="/customer-service" onClick={(e) => e.preventDefault()}>Customer Service</a></li>
                    <li><a href="shipping&tracking" onClick={(e) => e.preventDefault()}>Shipping & Tracking</a></li>
                    <li><a href="return&exchange" onClick={(e) => e.preventDefault()}>Return and Exchange</a></li>
                    <li><a href="contact" onClick={(e) => e.preventDefault()}>Contact</a></li>
                </ul>    

                <div className="flex flex-col justify-between">
                    <ul>
                        <li><a href="terms&conditions" onClick={(e) => e.preventDefault()}>Terms and Conditions</a></li>
                        <li><a href="/accessibilty" onClick={(e) => e.preventDefault()}>Accessibility</a></li>                    
                    </ul>

                    <ul>
                        <li><a href="https://instagram.com/" onClick={(e) => e.preventDefault()}>Instagram</a></li>
                        <li><a href="https://twitter.com/" onClick={(e) => e.preventDefault()}>Twitter</a></li>                    
                    </ul>
                </div>      

                <div className="flex flex-col justify-between">
                    <div>
                        <p>Newsletter</p>
                        <div className="relative max-w-[300px] sm:max-w-[250px]">
                            <input className="border-b mt-1 w-full placeholder:text-base placeholder:text-black" placeholder="Email Addres" type="email" name="newsletter" id="" />                     
                            <svg className="absolute h-5 top-1 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>            
                        </div>
            
                    </div>

                    <p><span>Ignis</span> @2023. All rights reserved</p>
                </div>                
            </div>

        </footer>
    )
}

export default Footer
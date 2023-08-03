const Footer = () => {
    return (
        <div className="border-t p-10 flex justify-between bottom-0 w-full">
            <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Shipping & Tracking</a></li>
                <li><a href="#">Return and Exchange</a></li>
                <li><a href="#">Contact</a></li>
            </ul>    

            <div className="flex flex-col justify-between">
                <ul>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Accessibility</a></li>                    
                </ul>

                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>                    
                </ul>
            </div>      

            <div className="flex flex-col justify-between">
                <div>
                    <p>Newsletter</p>
                    <input type="email" name="newsletter" id="" />                    
                </div>

                <p><span>Ignis</span> @2023. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
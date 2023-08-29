import Home from "../Pages/Home"
import AllProducts from "../Pages/AllProducts"
import Wishlist from "../Pages/Wishlist"
import Cart from "../Pages/Cart"
import SignIn from "../Pages/SignIn"
import { Dresses, Accessories, Shirts, Skirts, Pants, Shoes, Jackets, Sportswears} from "../Pages/Categories"
import ProductPage from "../Components/ProductPage"


const RoutesComp = () => { 

    return [
        { component: <Home />, path: '/' },
        { component: <AllProducts />, path: '/all-products'},
        { component: <Wishlist />, path: '/wishlist' },
        { component: <Cart />, path: '/cart' },
        { component: <SignIn />, path: '/sigin' },
        { component: <Dresses />, path: '/category/dresses'},
        { component: <Accessories />, path: '/category/accessories'},
        { component: <Shirts />, path: '/category/shirts'},
        { component: <Skirts />, path: '/category/skirts'},
        { component: <Pants />, path: '/category/pants'},
        { component: <Shoes />, path: '/category/shoes'},
        { component: <Sportswears />, path: '/category/sportswears'},
        { component: <Jackets />, path: '/category/jackets'},
        { component: <ProductPage />, path:`/productpage/:productId`}
    ]
}

export default RoutesComp
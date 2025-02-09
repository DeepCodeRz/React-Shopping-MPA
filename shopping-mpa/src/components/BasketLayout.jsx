import {Link, Outlet} from 'react-router';
import NavItem from "./NavItem.jsx";
import HeaderNav from "./HeaderNav.jsx";

export default function BasketLayout() {
    return (
        <>
            <HeaderNav>
                <Link to="/bag"><NavItem>Cart</NavItem></Link>
                <Link to="favorites"><NavItem>Favorites</NavItem></Link>
            </HeaderNav>
            <Outlet></Outlet>
        </>
    )
}
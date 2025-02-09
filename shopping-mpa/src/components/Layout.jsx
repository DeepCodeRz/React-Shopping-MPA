import Heading from "./Heading.jsx";
import HeaderNav from "./HeaderNav.jsx";
import NavItem from "./NavItem.jsx";
import { Link, Outlet } from 'react-router';

export default function Layout() {
    return (
        <>
            <div className="flex flex-col gap-12 items-center justify-center">
                <Heading>React Router Practice Project</Heading>
                <HeaderNav>
                    <Link to="/"><NavItem>Menu</NavItem></Link>
                    <Link to="/bag"><NavItem>Bag</NavItem></Link>
                    <Link to="/about"><NavItem>About Us</NavItem></Link>
                </HeaderNav>
            </div>
            <Outlet />
        </>
    )
}
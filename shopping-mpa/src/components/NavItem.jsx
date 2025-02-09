import { Link } from "react-router"

export default function NavItem({children}) {


    return (
        <button className="px-8 py-2 text-xl font-semibold rounded-lg hover:bg-gray-100 hover:border-black hover:cursor-pointer transition-border ease">{children}</button>
    )
}
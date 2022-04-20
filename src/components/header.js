import React from "react";
import {Link} from "gatsby";


const Header = () => {
    return <nav className="px-12 container py-8 flex justify-between mx-auto">
        <Link className="text-lg font-medium " to='/'>Eric Lantian Wei</Link>
        <ul className="flex space-x-8">
            <NavItem to="/articles" title="Articles"/>
            <NavItem to="/projects" title="Projects"/>
            <NavItem to="/articles" title="About"/>
        </ul>

    </nav>
}


const NavItem = ({title, to}) => {
    return <li><Link to={to} activeClassName="text-black"
                     className="text-gray-400 text-lg hover:text-gray-600 uppercase">{title}</Link></li>
}


export default Header

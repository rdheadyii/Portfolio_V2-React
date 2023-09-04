import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    // const currentPage = useLocation().pathname;

    return (
        <ul>
            <li>
                <Link to="/">
                Home
                </Link>
            </li>
            <li>
                <Link to="/about">
                About
                </Link>
            </li>
            <li>
                <Link to="/portfolio">
                Portfolio
                </Link>
            </li>
            <li>
                <Link to="/contact">
                Contact
                </Link>
            </li>
            <li>
                <Link to="/resume">
                Resume
                </Link>
            </li>
        </ul>
    );
}

export default NavBar;
import React from 'react'
import { Link } from "react-router-dom";

export const NavBar = ()  => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link  to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link  to='/todo'>TO DO LIST</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
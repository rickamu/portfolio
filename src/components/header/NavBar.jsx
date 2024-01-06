import React, { PureComponent } from 'react'
import { navLinks } from '../../constants'
import { logo } from '../../assets'
import pathConstants from '../../routes/pathConstants'

class NavBar extends PureComponent {
    render() {
        return (
            <nav>
                <a href={pathConstants.HOME}><img src={logo} alt="Rickamu" /></a>
                <ul>
                {navLinks.map( (nav) => (
                    <li key={nav.id}><a href={"/"+nav.id} >{nav.title}</a></li>
                ))}
                </ul>
            </nav>
        )
    }
}

export default NavBar
import React, { Component } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Menu from './Menu'


class Navbar extends Component {
    state = {clicked: false } ;
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }
render () {
       return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Trippy</h1>
            <div className='menu-icons' onClick={this.handleClick}>
              <li className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></li>
            </div>

            <ul className={ this.state.clicked ? "nav-menu active" : "nav-menu" }>
                {Menu.map((item, index) => {
            return (
                 <li key={index}>
                    <Link className = {item.cName}
                    to={item.url}>
                        <i className = {item.icon}></i>
                        {item.title}</Link>
                </li>
                    )
                })} 
              <button >
                <a href="/signup"> Sign Up </a></button>
            </ul>
        </nav>      
 )
}
}

export default Navbar
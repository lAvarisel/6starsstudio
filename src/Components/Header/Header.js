import React, { Component } from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: true,
            color: this.props.info
        }
        this.navBurgerClick = this.navBurgerClick.bind(this);
    }
    navBurgerClick() {
        this.setState(state => ({
            visibility: !state.visibility
        }));
    }  
    render() {
        let name = ''
        let burger = ''
        let colorInfo = ''
        let colorStar = ''
        if(this.state.visibility) {
            name='header__nav'
            burger='header__navBurger header__navBurger--active'
        }
        else {
            name="header__nav header__nav--hidden"
            burger='header__navBurger'
        }
        if(this.state.color === 'alternative') {
            colorInfo = 'header header--alt'
            colorStar = '#111A6C'
        }
        else {
            colorInfo = 'header'
            colorStar = "white"
        }
        return (
            <header className={colorInfo}>
                <div className='header__inner'>
                    <Link to='/' className='header__logo'>
                        <svg width="67" height="76" viewBox="0 0 67 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.4999 0L35.1983 5.22695H40.6942L36.2479 8.45739L37.9463 13.6843L33.4999 10.4539L29.0536 13.6843L30.752 8.45739L26.3057 5.22695H31.8016L33.4999 0Z" fill={colorStar}/>
                            <path d="M33.4999 60.5161L35.1983 65.7431H40.6942L36.2479 68.9735L37.9463 74.2005L33.4999 70.97L29.0536 74.2005L30.752 68.9735L26.3057 65.7431H31.8016L33.4999 60.5161Z" fill={colorStar}/>
                            <path d="M59.4355 16.2097L61.1338 21.4367H66.6298L62.1835 24.6671L63.8818 29.8941L59.4355 26.6636L54.9892 29.8941L56.6875 24.6671L52.2412 21.4367H57.7371L59.4355 16.2097Z" fill={colorStar}/>
                            <path d="M7.56452 16.2097L9.26286 21.4367H14.7588L10.3125 24.6671L12.0108 29.8941L7.56452 26.6636L3.11821 29.8941L4.81654 24.6671L0.370234 21.4367H5.86618L7.56452 16.2097Z" fill={colorStar}/>
                            <path d="M59.4355 44.3064L61.1338 49.5333H66.6298L62.1835 52.7638L63.8818 57.9907L59.4355 54.7603L54.9892 57.9907L56.6875 52.7638L52.2412 49.5333H57.7371L59.4355 44.3064Z" fill={colorStar}/>
                            <path d="M7.56452 44.3064L9.26286 49.5333H14.7588L10.3125 52.7638L12.0108 57.9907L7.56452 54.7603L3.11821 57.9907L4.81654 52.7638L0.370234 49.5333H5.86618L7.56452 44.3064Z" fill={colorStar}/>
                         </svg>
                        <div className='header__logoTitle'>
                            <p>6 stars</p>
                            <p>studio</p>
                        </div>
                    </Link>
                        <div className='header__navInner'>
                            <nav className={name}>
                                <ul className='header__menu'>
                                    <li className='header__menuItem'>
                                        <Link className='header__navLink' to='/'>Home</Link>
                                    </li>
                                    <li className='header__menuItem'>
                                        <Link className='header__navLink' to='/Service'>Services</Link>
                                    </li>
                                    <li className='header__menuItem'>
                                        <Link className='header__navLink' to='/Work'>Work</Link>
                                    </li>
                                    <li className='header__menuItem'>
                                        <Link className='header__navLink' to='/Clients'>Clients</Link>
                                    </li>
                                    <li className='header__menuItem'>
                                        <Link className='header__navLink' to='/About'>About</Link>
                                    </li>
                                    <li className='header__menuItem'>
                                        <Link className='header__navLink' to='/Contact'>Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div onClick={this.navBurgerClick} className='header__burgerInner'>
                                <div className={burger}></div>
                            </div>
                        </div>
                </div>
            </header>
        )
    }
}
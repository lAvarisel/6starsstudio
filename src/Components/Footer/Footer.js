import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.info
        }
    }
    render() {
        let colorInfo = ''
        if(this.state.color === 'alternative') {
            colorInfo = 'footer footer--alt'
        }
        else {
            colorInfo = 'footer'
        }
        return (
            <footer className={colorInfo}>
                <div className='footer__inner'>
                    <p className='footer__mark'>© 2020 6stars.studio</p>
                    <div className='footer__contact'>
                        <p className='footer__mobile'>+ 7 985 534 80 08</p>
                        <button className='footer__button'>contact us</button>
                    </div>
                </div>
            </footer>
        )
    }
}
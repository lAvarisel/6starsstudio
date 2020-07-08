import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import PageTitle from '../../Components/PageTitle/PageTitle';
import './Contact.scss';
import '../../Components/PageTitle/PageTitle.scss'

export default class Contact extends Component {
    render() {
        let colorinfo = 'alternative'
        return (
            <div className='pageContact'>
               <Header info={colorinfo}/>
               <div className='pageContact__inner'>
                    <PageTitle pagetype = {'Contact'}/>
                    <div className='pageContact__content'>
                        <div className='pageContact__info'>
                            <p className='pageContact__brand'>6 stars studio</p>
                            <p className='pageContact__adress'>Moscow, Russia</p>
                            <div className='pageContact__contactInner'>
                                <p className='pageContact__mobile'>+7 985 534 80 08</p>
                                <a href="viber://chat?number=+0000000000" className='pageContact__viber'>
                                    <img src='media/viber_ico.png' alt='viber img'></img>
                                </a>
                                <a href="href='skype:[]?chat'" className='pageContact__skype'>
                                    <img src='media/skype_ico.png' alt='viber img'></img>
                                </a>
                            </div>
                            <p className='pageContact__email'>hello@6stars.studio</p>
                            <form className='pageContact__form'>
                                <div className='pageContact__formInner'>
                                    <label className='pageContact__label'>Name:</label>
                                    <input className='pageContact__input' ></input>
                                </div>
                                <div className='pageContact__formInner'>
                                    <label className='pageContact__label'>E-mail:</label>
                                    <input className='pageContact__input'></input>
                                </div>
                                <div className='pageContact__formInner'>
                                    <label className='pageContact__label'>Message:</label>
                                    <input className='pageContact__input pageContact__input--big'></input>
                                </div>
                                <button className='pageContact__btn'>Send message</button>
                            </form>
                        </div>
                        <img src='media/map.png' alt='map' className='pageContact__map'></img>
                    </div>
               </div>
               <Footer info={colorinfo}/>
            </div>
        )
    }
}
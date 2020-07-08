import React, { Component } from 'react';
import sample from '../../assets/bgvideo.mp4';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import './Home.scss';

export default class Home extends Component {
    render() {
        return (
            <div className='pageHome'>
                <Header/>
                <div className='pageHome__inner'>
                    <video id="background-video" className="pageHome__bgvideo" loop muted autoPlay>
                        <source src={sample} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h1 className='pageHome__title'>Reach your goals and we will help you with this!</h1>
                    <div className='pageHome__btnInner'>
                        <button className='pageHome__playbtn'>
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 8.5L0.75 16.7272L0.75 0.272758L15 8.5Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

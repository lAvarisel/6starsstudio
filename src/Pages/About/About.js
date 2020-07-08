import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
// import Dots from '../../assets/dots.svg'
import './About.scss';
import PageTitle from '../../Components/PageTitle/PageTitle';

export default class About extends Component {
    render() {
        let colorinfo = 'alternative'
        return (
            <div className='pageAbout'>
               <Header info={colorinfo}/>
               <div className='pageAbout__inner'>
                    <PageTitle pagetype = {'About'}/>
                    <div className='pageAbout__benefits'>
                        <h2 className='pageAbout__title--benefits'>Your benefits from working with us:</h2>
                        <div className='pageAbout__benefitsItem'>
                            <p className='pageAbout__benefitsID'>01</p>
                            <p className='pageAbout__benefitsContent'>A competent and responsible contractor.</p>
                        </div>
                        <div className='pageAbout__benefitsLine'></div>
                        <div className='pageAbout__benefitsItem'>
                            <p className='pageAbout__benefitsID'>02</p>
                            <p className='pageAbout__benefitsContent'>Quality control  throughout the project.</p>
                        </div>
                        <div className='pageAbout__benefitsLine'></div>
                        <div className='pageAbout__benefitsItem'>
                            <p className='pageAbout__benefitsID'>03</p>
                            <p className='pageAbout__benefitsContent'>A creative approach to promotion your business.</p>
                        </div>
                        <div className='pageAbout__benefitsLine'></div>
                        <div className='pageAbout__benefitsItem'>
                            <p className='pageAbout__benefitsID'>04</p>
                            <p className='pageAbout__benefitsContent'>Real experience working with various business sectors.</p>
                        </div>
                        <div className='pageAbout__benefitsLine'></div>
                        <div className='pageAbout__benefitsItem'>
                            <p className='pageAbout__benefitsID'>05</p>
                            <p className='pageAbout__benefitsContent'>A productive and pleasurable partnership.</p>
                        </div>
                        <div className='pageAbout__benefitsLine'></div>
                    </div>
                    <div className='pageAbout__values'>
                        <h2 className='pageAbout__title--values'>Our values:</h2>
                        <div className='pageAbout__ourGroups'>
                            <div className='pageAbout__item pageAbout__item--1'>
                                <div className='pageAbout__ourInner'>
                                    <div className='pageAbout__titleInner'>
                                        <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 0L24.4903 13.8197H39.0211L27.2654 22.3607L31.7557 36.1803L20 27.6393L8.2443 36.1803L12.7346 22.3607L0.97887 13.8197H15.5097L20 0Z" fill="#111A6C"/>
                                        </svg>
                                        <h3 className='pageAbout__ourTitle'>Innovations</h3>
                                    </div>
                                    <p className='pageAbout__ourDescription'>Modern and effective tools and technologies to achieve your business goals.</p>
                                </div>
                            </div>
                            <div className='pageAbout__item pageAbout__item--2'>
                                <div className='pageAbout__ourInner'>
                                    <div className='pageAbout__titleInner'>
                                        <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 0L24.4903 13.8197H39.0211L27.2654 22.3607L31.7557 36.1803L20 27.6393L8.2443 36.1803L12.7346 22.3607L0.97887 13.8197H15.5097L20 0Z" fill="#111A6C"/>
                                        </svg>
                                        <h3 className='pageAbout__ourTitle'>Attitude to work</h3>
                                    </div>
                                    <p className='pageAbout__ourDescription'>Attention to all your wishes. Courtesy and efficiency.</p>
                                </div>
                            </div>
                            <div className='pageAbout__item pageAbout__item--3'>
                                <div className='pageAbout__ourInner'>
                                    <div className='pageAbout__titleInner'>
                                        <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 0L24.4903 13.8197H39.0211L27.2654 22.3607L31.7557 36.1803L20 27.6393L8.2443 36.1803L12.7346 22.3607L0.97887 13.8197H15.5097L20 0Z" fill="#111A6C"/>
                                        </svg>
                                        <h3 className='pageAbout__ourTitle'>Result</h3>
                                    </div>
                                    <p className='pageAbout__ourDescription'>High perfomance in every project.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pageAbout__team'>
                        <h2 className='pageAbout__title--team'>Our team:</h2>
                        <div className='pageAbout__teamInner'>
                            <div className='pageAbout__column'>
                                <div className='pageAbout__cardteam'>
                                    <img className='pageAbout__foto' src='/media/foto_team_1.jpg' alt='team foto'/> 
                                    <p className='pageAbout__name'>Alexander Salnikov</p>
                                    <p className='pageAbout__post'>СEO</p>
                                </div>
                                <div className='pageAbout__cardteam'>
                                    <img className='pageAbout__foto' src='/media/foto_team_2.jpg' alt='team foto'></img>
                                    <p className='pageAbout__name'>Daria Polunina</p>
                                    <p className='pageAbout__post'>Creative director </p>
                                </div>
                            </div>
                            <div className='pageAbout__column'>
                                <div className='pageAbout__cardteam'>
                                    <img className='pageAbout__foto' src='/media/foto_team_3.jpg' alt='team foto'></img>
                                    <p className='pageAbout__name'>Egor Fedin</p>
                                    <p className='pageAbout__post'>Technical director </p>
                                </div>
                                <div className='pageAbout__cardteam'>
                                    <img className='pageAbout__foto' src='/media/foto_team_4.jpg' alt='team foto'></img>
                                    <p className='pageAbout__name'>Olga Samohina</p>
                                    <p className='pageAbout__post'>Project manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
               <Footer info={colorinfo}/>
            </div>
        )
    }
}
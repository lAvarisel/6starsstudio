import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ServiceItem from '../../Components/ServiceItem/ServiceItem'
import Data from '../../assets/Data/ServicesData.json'
import PageTitle from '../../Components/PageTitle/PageTitle';
import './Service.scss';

export default class Service extends Component {
    render() {
        let colorinfo = 'alternative'
        return (
            <div className='pageService'>
                <Header info={colorinfo}/>
                    <div className='pageService__inner'>
                        <PageTitle pagetype = {'Service'}/>
                        <div className='pageService__content'>
                            <ServiceItem data={Data} itemKey={'ecommerce'}/>
                            <ServiceItem data={Data} itemKey={'websites'}/>
                            <ServiceItem data={Data} itemKey={'siteaudit'}/>
                            <ServiceItem data={Data} itemKey={'uxui'}/>
                            <ServiceItem data={Data} itemKey={'adwertising'}/>
                            <ServiceItem data={Data} itemKey={'seo'}/>
                            <ServiceItem data={Data} itemKey={'branding'}/>
                            <ServiceItem data={Data} itemKey={'consulltancy'}/>
                        </div>
                    </div>
                <Footer info={colorinfo}/>
            </div>
        )
    }
}
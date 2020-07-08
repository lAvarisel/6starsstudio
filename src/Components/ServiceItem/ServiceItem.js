import React, { Component } from 'react';
import ecommerce from '../../assets/ecom.svg'
import adwertising from '../../assets/advert.svg'
import siteaudit from '../../assets/audit.svg'
import branding from '../../assets/branding.svg'
import consulltancy from '../../assets/consultancy.svg'
import seo from '../../assets/seo.svg'
import uxui from '../../assets/uxui.svg'
import websites from '../../assets/webIcon.svg'
import './ServiceItem.scss';

export default class ServiceItem extends Component {
    constructor(props) {
        super(props)

        this.renderSwitch = this.renderSwitch.bind(this);
    }
    renderSwitch() {
        switch(this.props.data['service'][this.props.itemKey].icon) {
            case '1':
                return ecommerce;
            case '2':
                return websites;
            case '3':
                return adwertising;
            case '4':
                return seo;
            case '5':
                return siteaudit;
            case '6':
                return uxui;
            case '7':
                return branding;
            case '8':
                return consulltancy;
            default:
                return undefined;
        }
    }
    render() {
        let name = "pageService__item pageService__item--" + this.props.itemKey
        let priceData = this.props.data['service'][this.props.itemKey].price
        let titleData = this.props.data['service'][this.props.itemKey].title 
        return (
            <div className={name}>
                <img src={this.renderSwitch()} alt='ecommerce'></img>
                <h2 className='pageService__cardTitle'>{titleData}</h2>
                <p className='pageService__cardPrice'>from {priceData} USD/progect</p>  
            </div>
        )
    }
}
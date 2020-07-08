import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Clients.scss';
import ClientItem from '../../Components/ClientItem/ClientItem'
import Data from '../../assets/Data/ClientData.json'

export default class Clients extends Component {
    render() {
        let colorinfo = 'alternative'
        return (
            <div className='pageClient'>
               <Header info={colorinfo}/>
                <ClientItem data={Data}/>
               <Footer info={colorinfo}/>
            </div>
        )
    }
}
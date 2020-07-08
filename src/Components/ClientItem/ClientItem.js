import React, { Component } from 'react';
import './ClientItem.scss';
import PageTitle from '../PageTitle/PageTitle';

export default class WorkItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: true
        }
        this.loadDataClick = this.loadDataClick.bind(this);
    }
    loadDataClick() {
        // this.setState(state => ({
        //     visibility: !state.visibility
        // }));
    }
    render() {
        let data = this.props.data
        let keys = []
        let items = []
        Object.keys(data).forEach(function(key) {
            keys.push(data[key])
        })
        items.push(keys.map(item =>
            <div className='clientitem'>
                <img className='clientitem__logo' src={'media/logo/'+item.cientLogo} alt='logoimage'></img>
                <h2 className='clientitem__cardTitle'>{item.title}</h2>
                <p className='clientitem__description'>{item.progectWork}</p>  
            </div>
        ))
        return (
            <div className='pageClient__inner'>
                {/* <div className='pageClients__title'>Clients</div> */}
                <PageTitle pagetype = {'Client'}/>
                <div className='pageClient__content'>
                    {items}
                    <button onClick={this.loadDataClick()} className='pageClient__upload'>+ upload more</button>
                </div>
            </div>
        )
    }
}
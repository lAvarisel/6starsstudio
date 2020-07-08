import React, { Component } from 'react';
import './WorkItem.scss';
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
            <div className='workitem'>
                <img className='workitem__image' src={'media/'+item.progectPhotos} alt='decorateimage'></img>
                <h2 className='workitem__cardTitle'>{item.title}</h2>
                <p className='workitem__typeData'>{item.type}</p>  
            </div>
        ))
        return (
            <div className='pageWork__inner'>
                {/* <div className='pageClients__title'>Clients</div> */}
                <PageTitle pagetype = {'Work'}/>
                <div className='pageWork__content'>
                    {items}
                </div>
                <button onClick={this.loadDataClick()} className='pageWork__upload'>+ upload more</button>
            </div>
        )
    }
}
import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Work.scss';
import WorkItem from '../../Components/WorkItem/WorkItem'
import Data from '../../assets/Data/WorksData.json'
// import PageTitle from '../../Components/PageTitle/PageTitle';

export default class Work extends Component {
    render() {
        let colorinfo = 'alternative'
        return (
            <div className='pageWork'>
                <Header info={colorinfo}/>
                <WorkItem data={Data}/>
                    {/* <div className='pageWork__inner'>
                        <PageTitle pagetype = {'Work'}/>
                        <div className='pageWork__content'>
                            <div className='pageWork__dataInner'>
                                <div className='pageWork__column'>
                                    <WorkItem data={Data} itemKey={'item_1'}/>
                                    <WorkItem data={Data} itemKey={'item_2'}/>
                                </div>
                                <div className='pageWork__column'>
                                    <WorkItem data={Data} itemKey={'item_3'}/>
                                    <WorkItem data={Data} itemKey={'item_4'}/>
                                </div>
                                <div className='pageWork__column'>
                                    <WorkItem data={Data} itemKey={'item_5'}/>
                                    <WorkItem data={Data} itemKey={'item_6'}/>
                                </div>
                                <div className='pageWork__column'>
                                    <WorkItem data={Data} itemKey={'item_7'}/>
                                    <WorkItem data={Data} itemKey={'item_8'}/>
                                </div>
                            </div>
                            <button className='pageWork__upload'>+ upload more</button>
                        </div>
                    </div> */}
                <Footer info={colorinfo}/>
            </div>
        )
    }
}
import React, { Component } from 'react';

export default class PageTitle extends Component {
    render() {
        let itemType = this.props.pagetype
        return (
            <div className={'pageTitle pageTitle--' + itemType}>
                {itemType}
            </div>
        )
    }
}
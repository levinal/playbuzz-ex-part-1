import React, { Component } from 'react';

import './ItemsList.css'

import DisplayItem from '../../components/DisplayItem/DisplayItem';
import { VideoSourceTypes } from '../../types/VideoSourceTypes'

class itemsList extends Component {
    supportedItems = items => {
        const approved = items.filter(item => {
            return !!(VideoSourceTypes.find(source => source.name === item.source));
        });
        return approved;
    } ;

    render() {
        const items = this.supportedItems(this.props.items).map((item, index) => {
            return <DisplayItem key={item.videoId ? item.videoId : index} itemData={item} />;
        });

        return (
            <div className="items-list">
                <div className="item-list__header">
                    <h1>Most viewed</h1>
                </div>
                <div className="items-list__content">{items}</div>
            </div>
        );
    }
}

export default itemsList;
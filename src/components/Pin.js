import React, { PureComponent } from 'react';

const ICON = 'm 10 35 l 15 30 l 15 -30 A 20 20 180 1 0 10 35 z'

const pinStyle = { 
    cursor: 'pointer', 
    fill: '#d00', 
    stroke: 'none' 
};

export default class CityPin extends PureComponent {

render() { 
    const { size = 20, onClick } = this.props;

    return (
    <svg
        height={size}
        viewBox="-8 0 55 65"
        style={{ ...pinStyle, transform: `translate(${-size / 2}px,${-size}px)` }}
        onClick={onClick}>
            
        <path d={ICON} />
    </svg>
    );
} }
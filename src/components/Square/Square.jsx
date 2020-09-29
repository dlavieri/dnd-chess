import React from 'react';
import './Square.css';
import classnames from 'classnames';

const Square = ({ black }) => {
    let classes = classnames({
        'square': true,
        'black': black
    })
    return <div className={classes}></div>
}

export default Square;
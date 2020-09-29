import React from 'react';
import './Piece.css';

const Piece = ({piece}) => {
    return (
        <div className="piece">
            {piece.icon}
        </div>
    )
}

export default Piece;
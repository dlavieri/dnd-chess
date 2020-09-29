import React from 'react';
import './BoardSquare.css';

import Square from '../Square/Square';
import Piece from '../Piece/Piece';

const BoardSquare = ({ x, y, piece }) => {

    let color = (x%2 !== 0 && y%2 !== 0) || (x%2 === 0 && y%2 === 0);

    return (
        <div className="board-square">
            {piece ? <Piece piece={piece}/> : null}
            <Square black={color}/>
        </div>
    )
}

export default BoardSquare;
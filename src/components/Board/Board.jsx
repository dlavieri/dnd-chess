import React from 'react';
import './Board.css';

import BoardSquare from '../BoardSquare/BoardSquare';
import { setup } from '../../helpers/boardsetup';

const Board = () => {
    let squares = setup();
    console.log(squares)

    return (
        <div className="board">
            {squares.map((row,idx) => (
            <div className="row" key={idx}>{row.map(square => <BoardSquare 
                key={square.id} 
                id={square.id} 
                x={square.x}
                y={square.y}
                piece={square.piece}/>)}
            </div>)
            )}
        </div>
    )
}

export default Board;
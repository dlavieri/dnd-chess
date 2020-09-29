import { Pawn, Rook, Bishop, Knight, King, Queen } from './pieces';

export function setup() {
    let board = [];

    for (let row = 1; row < 9; row++) {
        board[row] = [];
        for (let col = 1; col < 9; col++) {
            board[row][col] = { x: col, y: row, piece: placePiece(col,row) }
        }
    }

    return board;
}

function placePiece(x,y) {
    let pieces = [ Pawn, Rook, Knight, Bishop, King, Queen, Bishop, Knight, Rook ]
    switch(y) {
        case 1:
            return {...pieces[x], icon: pieces[x].icon[0]};
        case 8:
            return {...pieces[x], icon: pieces[x].icon[1]};
        case 2: 
            return {...pieces[0], icon: pieces[0].icon[0]};
        case 7: 
            return {...pieces[0], icon: pieces[0].icon[1]};
        default:
            return null;
    }
}
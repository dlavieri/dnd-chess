export const Pawn = {
    icon: ['♙', '♟︎'],
    moves: [ [0,1] ],
    attacks: [ [1,1], [-1,1] ],
}

export const Rook = {
    icon: ['♖', '♜'],
    moves: [ [0,8], [8,0], [-8,0], [0,-8] ],
    attacks: [ [0,8], [8,0], [-8,0], [0,-8] ],
}

export const Bishop = {
    icon: ['♗', '♝'],
    moves: [  ],
    attacks: [ ]
}

export const Queen = {
    icon: ['♕', '♛'],
    moves: [  ],
    attacks: [ ]
}

export const King = {
    icon: ['♔', '♚'],
    moves: [ [1,1], [-1,-1], [-1,1], [1,-1], [1,0], [-1,0], [0,1], [0,-1] ],
    attacks: [ [1,1], [-1,-1], [-1,1], [1,-1], [1,0], [-1,0], [0,1], [0,-1] ]
}

export const Knight = {
    icon: ['♘', '♞'],
    moves: [ [2,1], [-2,1], [1,2], [-1,2], [2,-1], [1,-2] ],
    attacks: [ [2,1], [-2,1], [1,2], [-1,2], [2,-1], [1,-2] ]
}
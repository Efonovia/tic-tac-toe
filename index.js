let turn = 'player1'
const tiles = document.querySelectorAll('.tile')
const stroke = document.querySelector('.stroke')
// stroke.style.display = 'block'
// stroke.style.height = '139vh'
// stroke.style.rotate = '-45deg'
// stroke.style.left = '49vw'
// stroke.style.top = '-19.5vh'
let board = {
    rows: {
        row1: [0, 0, 0],
        row2: [0, 0, 0],
        row3: [0, 0, 0],
    },

    columns: {
        column1: [0, 0, 0],
        column2: [0, 0, 0],
        column3: [0, 0, 0],
    }
}

console.log(tiles);
tiles.forEach((tile, i) => {
    tile.played = false
    i += 1
    if(i <= 3) tile.row = 1
    if(i > 3 && i <= 6) tile.row = 2
    if(i > 6 && i <= 9) tile.row = 3

    if(i === 1 || i === 4 || i === 7) tile.column = 1
    if(i === 2 || i === 5 || i === 8) tile.column = 2
    if(i % 3 === 0) tile.column = 3
})
console.log(tiles);

tiles.forEach(tile => tile.addEventListener('click', () => {
    if(turn === "player1" && tile.played === false && !hasWon().isWinner) {
        board['rows'][`row${tile.row}`][tile.column - 1] = 'X'
        board['columns'][`column${tile.column}`][tile.row - 1] = 'X'
        tile.textContent = "X"
        tile.played = true
        turn = "player2"
        console.log(hasWon().winner)
        cross(hasWon().winType)
        console.log(board.columns.column1)
        console.log(board.columns.column2)
        console.log(board.columns.column3)
    } else if(turn === "player2" && tile.played === false && !hasWon().isWinner) {
        board['rows'][`row${tile.row}`][tile.column - 1] = 'O'
        board['columns'][`column${tile.column}`][tile.row - 1] = 'O'
        tile.textContent = "O"
        tile.played = true
        turn = "player1"
        console.log(hasWon().winner)
        cross(hasWon().winType)
        console.log(board.columns.column1)
        console.log(board.columns.column2)
        console.log(board.columns.column3)
    }
}))

function hasWon() {
    let winInfo = {
        isWinner: false,
        winner: undefined,
        winType: undefined
    }
    let ld = []
    let rd = []

    if(board.rows.row1.every(char => char === "X")) {
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'r1'
        }
    } if(board.rows.row1.every(char => char === "O")) {
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'r1'
        }
    } if(board.rows.row2.every(char => char === "X")) {
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'r2'
        }
    } if(board.rows.row2.every(char => char === "O")) {
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'r2'
        }
    } if(board.rows.row3.every(char => char === "X")) {
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'r3'
        }
    } if(board.rows.row3.every(char => char === "O")) {
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'r3'
        }
    }


    if(board.columns.column1.every(char => char === "X")) {
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'c1'
        }
    } if(board.columns.column1.every(char => char === "O")) {
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'c1'
        }
    } if(board.columns.column2.every(char => char === "X")) {
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'c2'
        }
    } if(board.columns.column2.every(char => char === "O")) {
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'c2'
        }
    } if(board.columns.column3.every(char => char === "X")) {
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'c3'
        }
    } if(board.columns.column3.every(char => char === "O")) {
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'c3'
        }
    }
    ld.push(board.rows.row1[0])
    ld.push(board.rows.row2[1])
    ld.push(board.rows.row3[2])
    rd.push(board.rows.row1[2])
    rd.push(board.rows.row2[1])
    rd.push(board.rows.row3[0])

    if(ld.every(char => char === "X")) { 
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'ld'
        }
    }
    if(ld.every(char => char === "O")) { 
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'ld'
        }
    }
    if(rd.every(char => char === "X")) { 
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'rd'
        }
    }
    if(rd.every(char => char === "O")) { 
        winInfo = {
            isWinner: false,
            winner: undefined,
            winType: 'rd'
        }
    }

    return winInfo
}

function cross(position) {
    switch (position) {
        case 'c1':
            stroke.style.display = 'block'
            stroke.style.left = '35.5vw'
            break;
        case 'c2':
            stroke.style.display = 'block'
            stroke.style.left = '50vw'
            break;
        case 'c3':
            stroke.style.display = 'block'
            stroke.style.left = '64vw'
            break;
        case 'r1':
            stroke.style.display = 'block'
            stroke.style.rotate = '90deg'
            stroke.style.left = '50vw'
            stroke.style.top = '-26.5vh'
            break;
        case 'r2':
            stroke.style.display = 'block'
            stroke.style.rotate = '90deg'
            stroke.style.left = '50vw'
            stroke.style.top = '3.5vh'
            break;
        case 'r3':
            stroke.style.display = 'block'
            stroke.style.rotate = '90deg'
            stroke.style.left = '50vw'
            stroke.style.top = '34.5vh'
            break;
        case 'ld':
            stroke.style.display = 'block'
            stroke.style.height = '139vh'
            stroke.style.rotate = '-45deg'
            stroke.style.left = '49vw'
            stroke.style.top = '-19.5vh'
            break;
        case 'rd':
            stroke.style.display = 'block'
            stroke.style.rotate = '45deg'
            stroke.style.left = '49vw'
            stroke.style.top = '-19.5vh'
            break;
        
        default:
            break;
    }
}
            

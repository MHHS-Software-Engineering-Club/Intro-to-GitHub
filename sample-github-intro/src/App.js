import React, { useState, useEffect } from "react";

function createEmptyBoard()
{
    return Array(4).fill(null).map(() => Array(4).fill(0));
}

function addRandomTile(board)
{
    const empty = [];
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c] === 0) empty.push([r, c]);
        }
    }
    if (empty.length === 0) return board;
    const [r, c] = empty[Math.floor(Math.random() * empty.length)];
    board[r][c] = Math.random() < 0.9 ? 2 : 4;
    return board;
}

function slideRowLeft(row)
{
    let arr = row.filter(val => val);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            arr[i] *= 2;
            arr[i + 1] = 0;
        }
    }
    arr = arr.filter(val => val);
    while (arr.length < 4) arr.push(0);
    return arr;
}

function transpose(board)
{
    return board[0].map((_, i) => board.map(row => row[i]));
}

export default function Game2048()
{
    const [board, setBoard] = useState(() => addRandomTile(addRandomTile(createEmptyBoard())));
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        function handleKey(e) {
            if(gameOver) return;
            let newBoard;
            switch (e.key)
            {
                case 'ArrowLeft':
                    newBoard = board.map(row => slideRowLeft(row));
                    break;
                case 'ArrowRight':
                    newBoard = board.map(row => slideRowLeft(row.reverse()).reverse());
                    break;
                case 'ArrowUp':
                    newBoard = transpose(transpose(board).map(row => slideRowLeft(row)));
                    break;
                case 'ArrowDown':
                    newBoard = transpose(transpose(board).map(row => slideRowLeft(row.reverse()).reverse()));
                    break;
                default:
                    return;
            }

            if(JSON.stringify(newBoard) !== JSON.stringify(board))
            {
                setBoard(addRandomTile(newBoard));
            }
        }
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [board, gameOver]);

    useEffect(() => {
        const newScore = board.flat().reduce((prev, cur) => prev + cur, 0);
        setScore(newScore);
    }, [board])

    useEffect(() => {
        function hasMoves(board)
        {
            for (let r = 0; r < 4; r++)
            {
                for (let c = 0; c < 4; c++)
                {
                    if(board[r][c] === 0) return true;
                    if (c < 3 && board[r][c] === board[r][c + 1]) return true;
                    if (r < 3 && board[r][c] === board[r + 1][c]) return true;
                }
            }
            return false;
        }
        if (!hasMoves(board)) setGameOver(true);
    }, [board]);

    function restart() {
        setBoard(addRandomTile(addRandomTile(createEmptyBoard())));
        setGameOver(false);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>2048 Game</h1>
            <h3>Score: {score}</h3>
            <table style={{ margin: 'auto', borderCollapse: 'collapse' }}>
                <tbody>
                {board.map((row, i) => (
                    <tr key={i}>
                        {row.map((cell, j) => (
                            <td
                                key={j}
                                style={{
                                    width: 60,
                                    height: 60,
                                    border: '1px solid #ccc',
                                    fontSize: 24,
                                    background: cell ? '#eee' : '#fff',
                                }}
                            >
                                {cell || ''}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            {gameOver && (
                <div>
                    <h2>Game Over!</h2>
                    <button onClick={restart}>Restart</button>
                </div>
            )}
            <p>Use arrow keys to play.</p>
        </div>
    );
}

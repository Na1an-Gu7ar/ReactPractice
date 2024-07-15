import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Square = ({ value, onClick }) => {
    return (
        <button onClick={onClick} className='border border-solid border-red-500 float-left text-4xl h-24 p-0 text-center w-24 -mr-0 -mt-0 cursor-pointer'>
            {value}
        </button>
    )
}

const index = () => {

    const [squares, setSquares] = useState(Array(9).fill(""))
    const [isXTurn, setIsXTurn] = useState(true)
    const [status, setStatus] = useState("")

    const getWinner = (squares) => {
        const winningPattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [1, 4, 7],
            [0, 3, 6],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < winningPattern.length; i++) {
            const [x, y, z] = winningPattern[i]
            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                return squares[x]
            }
        }
        return null
    }

    const handleClick = (getCurrentSquare) => {
        const squaresCopy = [...squares]
        if (squaresCopy[getCurrentSquare] === "") {
            squaresCopy[getCurrentSquare] = isXTurn ? "X" : "O"
            setSquares(squaresCopy)
            setIsXTurn(!isXTurn)
        }
    }

    const handleRestart = () => {
        setSquares(Array(9).fill(""))
        setIsXTurn(true)
        setStatus("")
    }

    useEffect(() => {
        const winner = getWinner(squares)
        if (winner) {
            setStatus(`Winner is ${winner}`)
        } else if (!squares.includes("")) {
            setStatus("Draw")
        } else {
            setStatus("")
        }
    }, [squares, isXTurn])

    console.log(squares);

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="row">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="row">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="row">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
            <h1>{status}</h1>
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}

export default index

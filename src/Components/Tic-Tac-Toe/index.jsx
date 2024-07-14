import React, { useState } from 'react'

const index = () => {

    const [player, setPlayer] = useState('x')
    const [player2, setPlayer2] = useState('x')

    const changePlayer = () => {
        setPlayer(player2==='o' ? 'x' : 'o')
    }

    const changePlayer2 = () => {
        setPlayer2(player==='x' ? 'o' : 'x')
    }

    console.log(player);

    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            <button onClick={changePlayer}>player1: {player}</button>
            <button onClick={changePlayer2}>player2: {player2}</button>

            <div className='bg-gray-300 w-80 h-80 grid grid-rows-3 gap-10'>
                <div className='grid grid-cols-3 gap-10'>
                    <div className='bg-red-500 w-20 h-20'></div>
                    <div className='bg-red-500 w-20 h-20'></div>
                    <div className='bg-red-500 w-20 h-20'></div>
                </div>
                {/* <hr /> */}
                <div className='grid grid-cols-3 gap-10'>
                    <div className='bg-red-500 w-20 h-20'></div>
                    <div className='bg-red-500 w-20 h-20'></div>
                    <div className='bg-red-500 w-20 h-20'></div>
                </div>
                <div className='grid grid-cols-3 gap-10'>
                    <div className='bg-red-500 w-20 h-20'></div>
                    <div className='bg-red-500 w-20 h-20'></div>
                    <div className='bg-red-500 w-20 h-20'></div>
                </div>
            </div>
        </div>
    )
}

export default index

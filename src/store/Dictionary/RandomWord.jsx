import React from 'react'

const RandomWord = (props) => {
  return (
    <div className='w-full h-full justify-center items-center bg-veryPaleRed'>
      <p className='font-bold text-2xl text-center'>{props.word}</p>
      <p  className='text-gray-400'>{props.definition}</p>
      <span  className='italic text-xl'>{props.pronunciation}</span>
    </div>
  )
}

export default RandomWord
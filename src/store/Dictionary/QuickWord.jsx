import React, { useContext } from 'react'
import { DictionaryContext } from '../dictionary-context'

const QuickWord = (props) => {
  const dictionaryCtx = useContext( DictionaryContext )
  
  const getWord = () => {
    //const theWord = dictionaryCtx.quickWord
    dictionaryCtx.fullSearchWord( props.word)
    console.log(props.word)
  }
  return (
    <div className='my-1 p-2 bg-rose-200 w-full h-8 cursor-pointer active:bg-lime-200' onClick={getWord}>{props.word}</div>
  )
}

export default QuickWord
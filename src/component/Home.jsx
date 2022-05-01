import React, { useEffect, useState, useContext } from 'react'
import { DictionaryContext } from '../store/dictionary-context'
import Headline from './Headline'

import RandomWord from '../store/Dictionary/RandomWord'
import QuickWord from '../store/Dictionary/QuickWord'
import MainSearch from '../store/Dictionary/MainSearch'

const Home = () => {
  const dictionaryCtx = useContext(DictionaryContext)
  const [timeString, setTimeString] = useState({
    hour: '',
    mins: '',
    seconds: '',
    ampm: '',
  })

  useEffect(() => {
    const interval = setInterval( () => {
     const getTime = new Date()

     let hour = getTime.getHours()
     let mins = getTime.getMinutes()
    let seconds = getTime.getSeconds()
     const ampm = hour > 12 ? 'PM' : 'AM'
     hour = hour % 12
     hour = hour ? hour : '12'
     hour = hour < 10 ? '0' + hour : hour
      mins = mins < 10 ? '0' + mins : mins
      seconds = seconds < 10 ? '0' + seconds : seconds

     setTimeString({
       hour,
       mins,
       seconds,
       ampm,
     })
    }, 1000 ) 
    
    return () => {
      clearInterval(interval)
    }
  }, [])
  useEffect(() => {
    dictionaryCtx.randomWord()
  }, [])

  const showRandomWord = dictionaryCtx.random.map((newWord) => {
    return (
      <RandomWord
        key={newWord.id}
        word={newWord.word}
        pronunciation={newWord.pronunciation}
        definition={newWord.definition}
      />
    )
  })
  const showFullSearch = dictionaryCtx.completeWord.map( word => {
    return (
      <MainSearch
        key={word.id}
        phonetic={word.phonetic}
        word={word.word}
       // audio={word.audio}
        partofSpeech={word.partofSpeech}
        definition1={word.definition1}
        definition2={word.definition2}
        definition3={word.definition3}
        example1 = {word.example1}
        example2={word.example2}
        synonyms1 = {word.synonyms1}  
        synonyms2 = {word.synonyms2}  
        synonyms3 = {word.synonyms3}  
        synonyms4 = {word.synonyms4}  
        synonyms5 = {word.synonyms5}  
        synonyms6 = {word.synonyms6}  
      />
    )
  })

  const showQuickWord = dictionaryCtx.myQuickWord.map( ( quickword ) => {
    return <QuickWord key = {quickword.id} word = {quickword.word}/>
  } )

  

  const setshowQuickWord = dictionaryCtx.showQuickWordNow ? showQuickWord : ''
  const setshowCompleteWord = dictionaryCtx.showCompleteWord ? showFullSearch : ''
  const setRandomSearch = dictionaryCtx.showRandomWordNow ? showRandomWord : ''
  
   

  return (
    <section className='flex  flex-col h-full w-3/5 justify-center overflow-scroll items-center  bg-veryLightGray'>
      <Headline />
      <main className='w-full h-5/6'>
        {setshowQuickWord}
        {setshowCompleteWord}
        <div className='w-full h-3/6 bg-stone-400 justify-center items-center'>
          {setRandomSearch}
          <div className='bg-green-200 w-full  flex-col flex justify-between items-center h-40 text-xl text-center'>
            <p className='w-full h-1/2 bg-cyan-500 flex justify-center items-center text-4xl'>
              word of the moment
            </p>
            <p className='w-full h-1/2 bg-yellow-300'>
              <span className='italic font-mono text-2xl mx-4'>
                {timeString.hour}
              </span>
              :
              <span className='italic font-mono text-2xl mx-4'>
                {timeString.mins}
              </span>
              :
              <span className='italic font-mono text-2xl mx-4'>
                {timeString.seconds}
              </span>
              :
              <span className='italic font-mono text-2xl mx-4'>
                {timeString.ampm}
              </span>
            </p>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Home

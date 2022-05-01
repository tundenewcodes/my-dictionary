import React from 'react'


const MainSearch = (props) => {
  return (
    <section className='h-full w-full flex flex-col   text-center '>
      <div className='m-4 flex flex-col w-full '>
        <div className='flex justify-between items-center w-full h-12 bg-white mx-1'>
          <p className='px-4 text-2xl '> word :{props.word}</p>
          
          <span className='px-4 mr-3 text-2xl'>
            {' '}
            phonetic : {props.phonetic}
          </span>
        </div>
        <span className='italic mt-1 text-xl'>
          {' '}
          part of speech : <br />
          <span className='uppercase'>{props.partofSpeech}</span>
        </span>
      </div>
      <div className='m-4 bg-orange h-68 w-full flex flex-col justify-between'>
        <p className='text-4 italic my-1'>
          <span className='uppercase underline'> definition 1</span> :{' '}
          <span className='itaalic'>{props.definition1}</span>
        </p>
        <p className='text-4 italic my-1'>
          <span className='uppercase underline'> definition 2</span> :{' '}
          <span className='itaalic'>{props.definition2}</span>
        </p>
        <p className='text-4 italic my-1'>
          <span className='uppercase underline'> definition 3</span> :{' '}
          <span className='itaalic'>{props.definition3}</span>
        </p>
        
      </div>
      <div className='flex flex-col w-full m-4 h-48 bg-aliceblue'>
        <p className='text-3xl italic w-full bg-lightgray'>examples</p>
        <span className='font-mono text-xl text-center'>
          example1 : <br /> {props.example1}
        </span>
        <span className='font-mono text-xl text-center'>
          {' '}
          example2: <br />{props.example2}
        </span>
      </div>

      <div className='m-4 bg-veryPaleRed w-full h-40'>
        {' '}
        <p className='uppercase italic text-3xl'>synonyms :</p>
        <span className='italic px-1  text-xl'>{props.synonyms1}</span>,
        <span className='italic px-1 text-xl'>{props.synonyms2}</span>,
        <span className='italic px-1 text-xl'>{props.synonyms3}</span>,
        <span className='italic px-1 text-xl'>{props.synonyms4}</span>,
        <span className='italic px-1 text-xl'>{props.synonyms5}</span>,
        <span className='italic px-1 text-xl'>{props.synonyms6}</span>
      </div>
    </section>
  )
}

export default MainSearch
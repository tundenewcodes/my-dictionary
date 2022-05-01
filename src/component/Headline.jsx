import React,{useRef,  useContext} from 'react'
import { FaSearch, FaAlignJustify } from 'react-icons/fa'
import { DictionaryContext } from '../store/dictionary-context'
const Headline = () => {
  const inputRef = useRef()
  
  const dictionaryCtx = useContext(DictionaryContext)


  const quickSearch = () => {
    const typedWord = inputRef.current.value
    dictionaryCtx.searchWord(typedWord)
  }

  const fullSearch = () => {
    const typedWord = inputRef.current.value
    dictionaryCtx.fullSearchWord(typedWord)
}


  return (
    <header className='h-16 w-full   bg-darkGrayishBlue  flex justify-between items-center'>
      <div className='bg-blue w-1/5 h-full px-4 py-4  text-white text-4xl'>
        <FaAlignJustify />
      </div>

      <div className='relative px-4  bg-blue w-4/5 flex py-2   h-full'>
        <input
          type='text'
          placeholder='search word'
          ref={inputRef}
          onKeyDown={quickSearch}
          onKeyUp={fullSearch}
          className=' relative w-full outline-0 h-full rounded-2xl p-6'
        />
        <FaSearch className=' text-4xl text-blue absolute top-4 right-5' onClick={fullSearch}/>
      </div>
    </header>
  )
}

export default Headline

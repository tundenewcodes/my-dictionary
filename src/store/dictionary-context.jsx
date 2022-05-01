import React, { useState } from 'react'
import axios, {
  onclickSearch,
  searchWord,
} from '../apis/randomWordApi'
export const DictionaryContext = React.createContext({
  myQuickWord: [],
  completeWord: [],
  random: [],
  checkLoading :false,
  showQuickWordNow: false,
  showCompleteWord: false,
  showRandomWordNow: false,
  quickWord : '',
  randomWord: () => {},
  searchWord: (word) => {},
  fullSearchWord: (word) => {},
})

const DictionaryContextProvider = (props) => {
  const [newWord, setNewWord] = useState([])
  const [quickWord, setQuickWord] = useState([])
  const [completeSearch, setCompleteSearch] = useState([])
  const [quickWordShowing, setQuickWordShowing] = useState(false)
  const [showFullWord, setshowFullWord] = useState(false)
  const [ showRandomWord, setShowRandomWord ] = useState( false )
  const [ isLoading, setIsLoading ] = useState( false )
  const [theWord,setTheWord] = useState('')

  const fullSearch = async ( word ) => {
    setIsLoading(true)
    const response = await searchWord.get(`/${word}`)
    const data = response.data
    console.log(data)
    let allData = []

    for (let key in data) {
      allData.push({
        id: key,
        phonetic: data[key].phonetic,
        word: data[key].word,
        //audio: data[key].phonetics[0].audio,
        partofSpeech: data[key].meanings[0].partOfSpeech,
        definition1: data[key].meanings[0].definitions[0].definition,
        definition2: data[key].meanings[0].definitions[1].definition,
        definition3: data[key].meanings[0].definitions[2].definition,
        example1: data[key].meanings[0].definitions[0].example,
         example2: data[key].meanings[0].definitions[2].example,
        synonyms1: data[key].meanings[0].synonyms[0],
        synonyms2: data[key].meanings[0].synonyms[1],
        synonyms3: data[key].meanings[0].synonyms[2],
        synonyms4: data[key].meanings[0].synonyms[3],
        synonyms5: data[key].meanings[0].synonyms[4],
        synonyms6: data[key].meanings[0].synonyms[5],
      })
    }
    setCompleteSearch(allData)
    setshowFullWord( true )
    setIsLoading(false)
    setQuickWordShowing( false )
     setShowRandomWord(false)
     setTheWord(word)
  }

  const searchOnClick = async ( word ) => {
    setIsLoading(true)
    const response = await onclickSearch.get(`/sug?s=${word}`)
    const data = response.data
    //console.log( data )
    let allData = []
    for (let key in data) {
      allData.push({
        id: key,
        word: data[key].word,
      })
    }

    setQuickWord(allData)
    setQuickWordShowing( true )
     setShowRandomWord(false)
     setshowFullWord(false)
    setIsLoading(false)
  }

  const getRandomWord = async () => {
    setIsLoading(true)
    const response = await axios.get()
    const data = response.data
    let allData = []

    for (let key in data) {
      allData.push({
        id: key,
        definition: data[key].definition,
        word: data[key].word,
        pronunciation: data[key].pronunciation,
      })
    }
    setNewWord(allData)
    setShowRandomWord(true)
    setIsLoading(false)
    setshowFullWord( false )
     setQuickWordShowing(false)
    //console.log(data)
  }

  const context = {
    randomWord: getRandomWord,
    searchWord: searchOnClick,
    fullSearchWord: fullSearch,
    random: newWord,
    myQuickWord: quickWord,
    completeWord: completeSearch,
    showCompleteWord: showFullWord,
    showRandomWordNow: showRandomWord,
    showQuickWordNow: quickWordShowing,
    checkLoading: isLoading,
    quickWord :theWord
  }
  return (
    <DictionaryContext.Provider value={context}>
      {props.children}
    </DictionaryContext.Provider>
  )
}

export default DictionaryContextProvider

import  axios from 'axios'




export default axios.create({
  baseURL: 'https://random-words-api.vercel.app/word',
})


export const  onclickSearch = axios.create({
  baseURL : 'https://api.datamuse.com'
})

export const searchWord = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en',
})
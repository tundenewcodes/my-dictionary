import React from 'react'
import ReactDOM from 'react-dom'
import DictionaryContextProvider from './store/dictionary-context'
import App from './App'

import './index.css'

ReactDOM.render(
  <DictionaryContextProvider>
    {' '}
    <App />{' '}
  </DictionaryContextProvider>,

  document.getElementById('root')
)

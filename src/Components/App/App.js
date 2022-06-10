import './App.css'
import { useEffect, useState } from 'react'
import fetchData from '../../apiCalls'
import ArticleHolder from '../ArticleHolder/ArticleHolder'
import { Route, Routes } from 'react-router-dom'
import Deatils from '../Details/Details'
import { ArticleDataProvider } from '../../Context/ArticleData'

const App = () => {
  return (
    <ArticleDataProvider>
      <header className='title'>
        <h1>Art Times</h1>
      </header>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<ArticleHolder />} />
          <Route exact path='/article/:id' element={<Deatils />} />
        </Routes>
      </div>
    </ArticleDataProvider>
  )
}

export default App

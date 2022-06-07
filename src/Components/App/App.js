import './App.css'
import { useEffect, useState } from 'react'
import fetchData from '../../apiCalls'
import ArticleHolder from '../ArticleHolder/ArticleHolder'

const App = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchData().then(data => {
      console.log(data.results)
      setArticles(data.results)
    })
  }, [])

  return (
    <div className='App'>
      <ArticleHolder articles={articles}/>
    </div>
  )
}

export default App

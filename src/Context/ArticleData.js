import { createContext, useState, useEffect } from 'react'
import fetchData from '../apiCalls'

const ArticleDataContext = createContext([])

const ArticleDataProvider = ({ children }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchData().then(data => {
      addId(data.results)
    })
  }, [])

  const addId = data => {
    let currId = 0
    const withId = data.map(item => {
      return { ...item, id: currId++ }
    })
    setArticles(withId)
  }

  return (
    <ArticleDataContext.Provider value={articles}>
      {children}
    </ArticleDataContext.Provider>
  )
}

export { ArticleDataContext, ArticleDataProvider }

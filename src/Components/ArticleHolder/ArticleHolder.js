import Article from '../Article/Article'
import { Link } from 'react-router-dom'
import './ArticleHolder.css'
import { ArticleDataContext } from '../../Context/ArticleData'
import { useContext, useState } from 'react'

const ArticleHolder = ({}) => {
  const [filter, setFilter] = useState('')

  const articles = useContext(ArticleDataContext)

  let eachArticle

  eachArticle = articles.map(article => {
    let { title, section, abstract, byline, id } = article

    return (
      <Link key={title} to={`article/${id}`}>
        <Article
          section={section}
          title={title}
          abstract={abstract}
          byline={byline}
          key={id}
        />
      </Link>
    )
  })

  let categories = []

  articles.forEach(article => {
    if (!categories.includes(article.section)) {
      categories.push(article.section)
    }
  })

  const options = categories.sort().map(cat => (
    <option key={cat} value={cat}>
      {cat}
    </option>
  ))

  if (filter) {
    eachArticle = articles
      .filter(article => {
        if (article.section === filter) {
          return article
        }
      }).map(article => {
        let { title, section, abstract, byline, id } = article

        return (
          <Link key={title} to={`article/${id}`}>
            <Article
              section={section}
              title={title}
              abstract={abstract}
              byline={byline}
              key={id}
            />
          </Link>
        )
      })
  }

  return (
    <div>
      <select
        className='sub-category-option'
        value={filter}
        onChange={e => setFilter(e.target.value)}
      >
        <option value=''>Show All</option>
        {options}
      </select>
      {console.log(articles)}
      <section className='article-holder'>{eachArticle}</section>
    </div>
  )
}

export default ArticleHolder

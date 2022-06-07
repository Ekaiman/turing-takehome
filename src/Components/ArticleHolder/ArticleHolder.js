import Article from "../Article/Article"

const ArticleHolder = ({ articles}) => { 
  const eachArticle = articles.map(article => { 
    return <Article
      section={article.section}
      abstract={article.abstract}
      byline={article.byline}
    /> 
  })
  return (
    <div>
      <p>{eachArticle}</p>
    </div>
  )
}

export default ArticleHolder
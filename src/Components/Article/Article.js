import './Article.css'
const Article = ({section, title, byline, abstract}) => { 

  return (
    <div className="article" >
      <h1>{section}</h1>
      <p>{title}</p>
      <p>{abstract}</p>
      <p>{byline}</p>
    </div>
  )
}

export default Article
import { useNavigate, useParams } from 'react-router-dom'
import { ArticleDataContext } from '../../Context/ArticleData'
import { useContext } from 'react'

const Deatils = ({}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const articles = useContext(ArticleDataContext)

  
  let { title, url, published_date, updated_date, byline } = articles[id]

  return (
    <div>
      <h1>{title}</h1>
      <a href={url}>Article Link</a>
      <p>Published: {published_date}</p>
      {published_date !== updated_date && (
        <p>Last Updated:{updated_date}</p>
      )}
      <p>{byline}</p>
      {/* {console.log(articles)} */}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default Deatils

import { useNavigate, useParams } from 'react-router-dom'
import { ArticleDataContext } from '../../Context/ArticleData'
import { useContext } from 'react'
import './Details.css'

const Deatils = ({}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const articles = useContext(ArticleDataContext)

  let {
    title,
    url,
    published_date,
    updated_date,
    byline,
    abstract,
    multimedia
  } = articles[id]

  return (
    <div className='detail-holder'>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{title}</h1>
      <p>{byline}</p>
      <p>{abstract}</p>
      <a href={url}>Article Link</a>
      <p>Published: {published_date}</p>
      {published_date !== updated_date && <p>Last Updated:{updated_date}</p>}
      <div className='img-holder'>
        <img className="image" src={multimedia[0].url} />
      </div>
    </div>
  )
}

export default Deatils

import './Article.css'
const Article = ({ section, title, byline, abstract, img }) => {
  return (
    <section className='article'>
      <img src={img} className='images'/>
      <h1>{title}</h1>
      <p>{byline}</p>
      <p>{abstract}</p>
    </section>
  )
}

export default Article

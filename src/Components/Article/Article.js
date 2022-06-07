
const Article = ({section, abstract, byline}) => { 

  return (
    <div>
      <p>{section}</p>
      <p>{abstract}</p>
      <p>{byline}</p>
    </div>
  )
}

export default Article
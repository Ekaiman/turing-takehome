const apiKey = process.env.REACT_APP_API_KEY

const fetchData = () => { 
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`
  ).then(res => res.json())
}

export default fetchData
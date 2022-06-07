const apiKey = process.env.REACT_APP_API_KEY

const fetchData = () => { 
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=sxwmQTmsR6jypXRPkGFvplzwCazy3ky9`
  ).then(res => res.json())
}

export default fetchData
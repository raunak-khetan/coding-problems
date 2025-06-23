import { useEffect,useState } from "react"

const useQuestions=(url)=>{
  const [data,setData] = useState(null)
  const [error,setError] = useState(null)
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    fetch(url)

    .then(res =>{ 
      if(!res.ok){
        throw Error("could not fetch data")
      }
      return res.json()})

    .then(data => {
      setData(data)
      setError(null)
      setIsLoading(false)
    })

    .catch(err => {
      console.error('Error fetching questions:', err)
      setError(err.message)
      setIsLoading(false)
    })
  }, [url])

  return {data,error,isLoading}
}

export default useQuestions
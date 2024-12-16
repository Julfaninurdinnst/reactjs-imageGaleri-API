
import Main from "./component/Main"
import Footer from "./component/Footer"
import SideBar from "./component/SideBar"
import { useEffect, useState } from "react"
function App() {
const [data,setData] = useState(null)
const [loading, setLoading] = useState(false)

const [showMOdel,setShowModel] = useState(false)
function handleTogleModel(){
  setShowModel(!showMOdel)
}

useEffect(()=>{
  async function fetchAPIData() {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
    const url ='https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
  const today = (new Date()).toDateString()
  const localKey = `NASA -${today}`
if (localStorage.getItem(localKey)) {
  const apiData = JSON.parse(localStorage.getItem(localKey))
  setData(apiData)
  console.log('Fetch from cache today')
  return
  
}
localStorage.clear()
  
    try {
      const res = await fetch(url)
      const apiData = await res.json()
      localStorage.setItem(localKey,JSON.stringify(apiData))
      setData(apiData)
      console.log('Fetch from API today')
  } catch (error) {
    console.log(error.message)
  }
  }
  fetchAPIData()
},[])
return (
    <div className="appWrap">
  {data ? ( 
    <Main data={data}/>
  )
  
  : (
    <div className="loadingState">
      <i className="fa-solid fa-atom"></i>
    </div>
  )}
  { showMOdel &&(
    <SideBar data= {data} handleTogleModel = {handleTogleModel}/>
  )}
  {data && (<Footer data={data} handleTogleModel = {handleTogleModel}/>)}
   
    </div>
  )
}

export default App

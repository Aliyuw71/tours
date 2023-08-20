import './App.css';
import Tour from "./components/Tour"
import {useState,useEffect} from "react"

function App() {
 const[tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const url = "https://course-api.com/react-tours-project"
  const fetchTour = async () =>{
    setLoading(true)
    try{
      const response = await fetch(url)
      const tour = await response.json()
      setLoading(false)
      setTours(tour)
    }
    catch(err){
      setLoading(false)
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchTour()
  },[])
  const removeTour = (id) =>{
    const newTour = tours.filter((tour)=>{
      return(tour.id !== id)
    })
    setTours(newTour)
  }
  const reload = () => {
    fetchTour()
  }

  return (
    <div className="App">
      <h1 className='title'>Our Tours</h1>
        <div className='underline'></div>
      {(loading === true)?
      <h1 style={{fontStyle:"italic", marginTop:"1.5rem"}}>Loading...</h1>:
      (tours.length)?<Tour
        tours = {tours}
        removeTour = {removeTour}
      />:<button className='refresh-btn' onClick={reload}>
        Refresh for tours
      </button>}
    </div>
  );
}

export default App;

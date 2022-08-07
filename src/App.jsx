import React,{useState, useEffect} from 'react';
import "./App.css";


const App = () => {
  const [slikaData, setSlikaData ] = useState("");

useEffect(() => {fetchSliku()}, []);

const fetchSliku = async () =>{
    const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=rXHTuGgfcHGfYYlynqamDpzGRYc8pJ6lBgvUCTXx");
    const data = await res.json();
    setSlikaData(data);
    
  };

  return (
    <div className='App'>
     <h1>NASA picture of the day</h1>
     <h2>{slikaData.title}</h2>
     <img src={slikaData.url} alt={slikaData.title} />
     <br />
     <br />
     
     <p>{slikaData.explanation}</p>
    </div>
  )
}
export default App;


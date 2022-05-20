import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [timedate,setTimeDate] = useState("");

  const handleTime =  () =>{
    let puretime = new Date().toLocaleString();
    setTimeDate(puretime);
  }

  useEffect (()=>{
    let puretime = new Date().toLocaleString();
    setTimeDate(puretime);
    let result = setInterval(handleTime,1000);
    return () =>{
      clearInterval(result);
    }
  },[])

  return (
    <div id="main">
      <div className="date-time">
        {timedate}
      </div>
    </div>
  )
}


export default App;

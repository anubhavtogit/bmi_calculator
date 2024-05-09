import React,{ useState, useMemo } from 'react'
import './App.css'

function App() {
    const [weight,setWeight]=useState(70);
    const [height,setHeight]=useState(120);

    function changeWeight(event){
        setWeight(event.target.value);
    }
    function changeHeight(event){
        setHeight(event.target.value);
    }

    const output =useMemo(()=>{
        const calcuheight=height/100;
        return(weight/(calcuheight*calcuheight)).toFixed(1)
        
    },[weight,height]);

  return (
    <div className='main'>
        <div className='name'>
            <h1>BMI Calculator</h1>
        </div>
        <div className='input-side'>
            <p className='slider-output'>Weight : {weight} kg</p>
            <input className='input-slider' type='range' step='1' min='20' max='150' onChange={changeWeight}></input>
            <p className='slider-output'>Height : {height} cm</p>
            <input className='input-slider' type='range' step='1' min='80' max='250' onChange={changeHeight}></input>


        </div>
        <div className='output-side'>
            <p>Your BMI is</p>
            <p className='output'>{output}</p>

        </div>
    </div>
  )
}

export default App
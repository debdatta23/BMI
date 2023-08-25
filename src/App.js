
import './App.css';
import React,{useState} from 'react'

function App() {

  //state

  const[weight,setWeight]=useState(0)
  const[height,setHeight]=useState(0)
  const[bmi,setBmi]=useState('')
  const[message,setMessage]=useState('')
  const[meter,setMeter]=useState(0)
  const[foot,setFoot]=useState(0)
  const[inches,setInches]=useState(0)

  let calcBmi=(event)=>{
    if(weight===0 ||height ===0){
      alert("Please enter a valid weight and height")
    }
    else{
      let bmi =(weight/(height*height))
      setBmi(bmi.toFixed(1))
      if(bmi<18.5){
        setMessage('You are underweight')


      }
      else if(bmi>=18.5 && bmi<25){
        setMessage('You are a healthy weight')
      }
      else{
        setMessage("You are overweight")
      }
    }
  }

  let calcMeter=(event)=>{
    let meter=foot*0.3048+inches*0.0254;
    setMeter(meter.toFixed(1))
    

  }

  let reload=()=>{
    window.location.reload()
  }

  return (
    <>
    <div class="col d-flex justify-content-center">
    <div class="card">
 
  <div class="card-body">
    <h5 class="card-title">Feet and inches to meters</h5>
    <p class="card-text">
    <label for="foot" class="form-label">Feet</label>
    <input type="foot" id="inputFoot" class="form-control" aria-labelledby="passwordHelpBlock" value={foot}
    onChange={(e)=>setFoot(e.target.value)}/>

<label for="inches" class="form-label">Inches</label>
    <input type="Inches" id="inputInches" class="form-control" aria-labelledby="passwordHelpBlock" value={inches}
    onChange={(e)=>setInches(e.target.value)}/>

    <button class="btn btn-dark mx-3 my-5 " type="submit" onClick={calcMeter} >Convert</button>
    <button class="btn btn-dark mx-3 " type="submit" onClick={reload} >Reload</button>
    <div className='center'>
      
      <h4>{meter} meter</h4>
    </div>

  



    </p>
    
  </div>
</div>
    </div>

    <div class="col d-flex justify-content-center">
      <div class="card"  >

  <div class="card-body" >
    <h5 class="card-title my-5" >BMI Calculator</h5>
    <p class="card-text">
    
    <label for="weight" class="form-label"><b>Weight(in Kg)</b></label>
<input type="number" id="weight" class="form-control my-2" aria-labelledby="passwordHelpBlock" value={weight}
onChange={(e)=>setWeight(e.target.value)}/>
<label for="height" class="form-label"><b>Height(in meter)</b></label>
<input type="number" id="height" class="form-control" aria-labelledby="passwordHelpBlock" value={height}
onChange={(e)=>setHeight(e.target.value)}/>




    </p>
    
    <div class="col d-flex justify-content-center">
    <button class="btn btn-dark mx-3 " type="submit" onClick={calcBmi}>Submit</button>
  
    <button class="btn btn-dark mx-2" type="submit" onClick={reload}>Reload</button>


    </div>

    <div className='center'>
      <h5>Your BMI is : {bmi}</h5>
      <h4>{message}</h4>
    </div>
  </div>
</div>

    

</div>

 


  
    </>
  );
}

export default App;

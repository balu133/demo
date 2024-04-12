import React from "react";
import { useState,useMemo } from "react";
import './bmistyling.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function BMI(){
    const [weight,setWeight]=useState(0);
    const [height,setHeight]=useState(0);
    const bmi=useMemo(()=>{
      const calculatedHeight = height / 100;
      return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
    },[weight,height]);
    function adjustWeight(event){
        let data=event.target.value;
        setWeight(data);
    }
    function adjustHeight(event){
      let data=event.target.value;
      setHeight(data);
  }
    return (
      <>
        <div className="box">
              <div className="heading">
                <h1 style={{textAlign:'center',fontSize:'40px'}}>BMI CALCULATOR</h1>
              </div>
              <div className="set">
               <h4>Weight :  {weight}  kg</h4><br />
               <input type="range" class="form-range" min="1" max="100" step="1" onChange={adjustWeight}/>
               </div>
               <div className="set-second">
               <h4>Height : {height} cm</h4><br />
               <input type="range" class="form-range" min="1" max="220" step="1" onChange={adjustHeight}/>
               </div>
               <h6 style={{textAlign:'center',marginTop:'333px',}}>Your BMI is</h6>
               <div style={{marginLeft:'210px',width:'80px',height:'40px',background:'blue',color:'white',borderRadius:'20px',textAlign:'center',paddingTop:'5px'}} id="result">{bmi}</div>
        </div>
      </>   
    );
}
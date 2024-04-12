
import { useState,useEffect,Reac } from 'react';
import './styling.css'
export default function Quote(){
    const [index,setIndex]=useState(0);
    const [quote,setQuote]=useState([]);
    useEffect(()=>{
        fetch('https://type.fit/api/quotes')
        .then((res)=>{
            return res.json();
        })
       .then((data)=>{
        console.log(data);
        setQuote(data);
       });
    },[index]);
  function getquote(){
    if(index === quote.length-1) setIndex(0);
    else
    return setIndex(index+1);
  }
    return (
      <>
        <h1 style={{textAlign:'center'}}>QUOTE GENERATOR</h1>
        <div className="app">
         <button style={{ position: 'relative', left:'180px', top:'30px', }} className="btn btn-primary" onClick={getquote}>New Quote</button><br /><br />
         <div className='boxdemo'>
           <span><b>"</b></span><span>{quote[index].text}</span>
           <br />
           <br />
           <h5 style={{textAlign:'center'}}>- {quote[index].author}</h5>
         </div>
        </div>
      </>   
    );
}
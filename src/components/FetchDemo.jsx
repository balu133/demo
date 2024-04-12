import { useEffect,useState } from "react";
export default function Fetch(){
    const [values,setValue]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            setValue(data);
        });
    },[]);
    return (
        <div>
            {
           values.map((value)=>{
             return <img src={value.url} key={value.id} width={100} />
            })
             }
        </div>    
    );
}
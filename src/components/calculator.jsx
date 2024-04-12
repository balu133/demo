import React from "react";
import './calstyle.css'
import { useState } from "react";
import { useReducer } from "react";
const OP={
    ADD: 'add',
    SUB:'sub',
    MUL : 'mul',
    DIV:'div',
};
function reducer(state,action){
  switch(action.type){

    case OP.ADD: 
       return  {
            ...state,
            currentOperand: '${currentOperand || "}${action.paylod.digit}'
       } 
  }
}
export default function Calci(){
    const [{currentOperand,previousOperand,operation},dispatch]=useReducer(reducer,{})
    dispatch({type : OP.ADD, paylod:{digit :1}})
    return (
           
            <>
              <div className="container">
                <div className="display">{previousOperand} {operation}</div>
                <div className="display">{currentOperand}</div>
                <button>AC</button>
                <button>+</button>
                <button>%</button>
                <button>+</button>
                <button>7</button>
                <button >8</button>
                <button>9</button>
                <button>*</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button className="zero">0</button>
                <button>.</button>
                <button>=</button>
              </div>
            </>
         );
}
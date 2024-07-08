import React, { useState } from 'react'

export default function Keypad() {
    const [input,updateinput]=useState("")
    let ze=()=>{
        updateinput(input+'0')
    }
    let on=()=>{
        updateinput(input+'1')
    }
    let tw=()=>{

        updateinput(input+'2')

    }
    let th=()=>{
        updateinput(input+'3')

    }
    let fo=()=>{
        updateinput(input+'4')
    }
    let fi=()=>{
        updateinput(input+'5')
    }
    let si=()=>{

        updateinput(input+'6')
    }
    let se=()=>{
        updateinput(input+'7')
    }
    let ei=()=>{
        updateinput(input+'8')
    }
    let ni=()=>{
        updateinput(input+'9')
    }
    let di=()=>{
        updateinput(input+'/')
    }
    let mu=()=>{
        updateinput(input+'*')
    }
    let pl=()=>{
        updateinput(input+'+')
    }
    let mi=()=>{
        updateinput(input+'-')
    }
    const eq = () => {
        try {
            const result = eval(input);
            updateinput(result.toString());
        } catch (error) {
            updateinput("Error");
        }
    }

  return (
    <div className="container">
    <h1>Calculator app</h1>
    <div className="frame1">
        <input className="input" value={input} />
            <div className="keypad">
              <div className='row'>
             <button className='digit' onClick={se}>7</button>
             <button className='digit' onClick={ei}>8</button>
              <button className='digit'onClick={ni}>9</button>
              <button className='operator' onClick={di}>/</button>
               </div>
            <div className='row'>
             <button className='digit' onClick={fo}>4</button>
             <button className='digit' onClick={fi}>5</button>
             <button className='digit' onClick={si}>6</button>
             <button className='operator' onClick={mu}>*</button>
            </div>
            <div className='row'>
             <button className='digit'onClick={on}>1</button>
             <button className='digit' onClick={tw}>2</button>
             <button className='digit' onClick={th}>3</button>
             <button className='operator' onClick={mi}>-</button>
            </div>
            <div className='row'>
             <button className='digit' onClick={ze}>0</button>
             <button className='func' onClick={()=>{
                updateinput("")
             }
             }>c</button>
             <button className='func' onClick={eq}>=</button>
             <button className='operator' onClick={pl}>+</button>
            </div>
        </div>
    </div>
    </div>
    
    )
}

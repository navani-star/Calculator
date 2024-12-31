import { useState } from 'react'
import './Calculator.css'
const Calculator = () => {
    const[input,setinput]=useState('')

    const showdata=(value)=>{
        setinput(input+value) // String Concatination
    }
    const clearall=()=>{
        setinput('')

    }
    const clearlastdigit=()=>{
        setinput(input.slice(0,-1))
        //console.log(input.slice(0,-1)) welcome=> welcom=>welco=>welc=>wel=>wel=>we=>w to reomove last digit
        
    }
    const solveEqu=()=>{
        try{
            setinput(eval(input).toString())//string Method Convert number to string eval is a predfined function which solve all equation 
        }catch{
            setinput('Error')
        }
        //console.log(eval(input).toString())
       // console.log(typeof(eval(input)))
       
    }
    return (
        <div>
            <h1>Calculator Application :-</h1>
            <div className='calculator'>
                <input type='text'
                className='calculator-screen'
                value={input}
                />
                <div className='calculator-buttons'>
                    <button className='cal-btn' onClick={()=>showdata('1')}>1</button>
                    <button className='cal-btn' onClick={()=>showdata('2')}>2</button>
                    <button className='cal-btn' onClick={()=>showdata('3')}>3</button>
                    <button className='cal-btn' onClick={()=>showdata('+')}>+</button>

                    <button className='cal-btn' onClick={()=>showdata('4')}>4</button>
                    <button className='cal-btn' onClick={()=>showdata('5')}>5</button>
                    <button className='cal-btn' onClick={()=>showdata('6')}>6</button>
                    <button className='cal-btn' onClick={()=>showdata('-')}>-</button>

                    <button className='cal-btn' onClick={()=>showdata('7')}>7</button>
                    <button className='cal-btn' onClick={()=>showdata('8')}>8</button>
                    <button className='cal-btn' onClick={()=>showdata('9')}>9</button>
                    <button className='cal-btn' onClick={()=>showdata('*')}>*</button>

                    <button className='cal-btn' onClick={()=>showdata('0')}>0</button>
                    <button className='cal-btn' onClick={()=>showdata('.')}>.</button>
                    <button className='cal-btn' onClick={()=>showdata('/')}>/</button>
                    <button className='cal-btn' onClick={solveEqu}>=</button>
                    </div>


                    <div className='clear-all'>
                    <button className='cal-btn' onClick={clearall}>&#8998;</button>
                    <button className='cal-btn' onClick={clearlastdigit}>&#8999;</button>
                    </div>
            </div>
        </div>
    )
}

export default Calculator
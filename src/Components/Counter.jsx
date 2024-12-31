import React, { useState } from 'react'
const Counter = () => {
    const [count,setcount]=useState(0)
    const name='jordan walke'
    const age=55
    const version='React-19'

    const increament=()=>{
        setcount(count+1)
        console.log('function add call')

    }
    const decreament=()=>{
        if(count>0){
            setcount(count-1)
            console.log('function sub call')
        }

    }
  return (
    <div>
        <h2 className='text-info'> React Dev Name:-{name} {age} {version} </h2>
    <h1>Counter Application </h1>
    <div className='w-50 bg-dark mx-auto p-3 mt-5 rounded-5'>
    <button className='btn btn-danger me-1' onClick={increament}>+</button>
    <button className='btn btn-warning me-1'>{count}</button>
    <button className='btn btn-success' onClick={decreament}>-</button>
    </div>   
    </div>
  )
}

export default Counter
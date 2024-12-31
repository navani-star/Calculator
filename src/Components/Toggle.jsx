import React, { useState } from 'react'
const Toggle = () => {
    const[name,setname]=useState('Hitesh')
    const[lname,setlname]=useState('Nawani')
    const[position,setposition]=useState('Soft Dev')
    const[salery,setsalery]=useState('50000')
    

    const Changedata=()=>{
        setname('Ritesh')
        setlname('Patil')
        setposition('QA Analyst')
        setsalery('60000')
        
        }
  return (
    <div>
      <h1 className='mt-5'> Toggle Application</h1>
      <h1>{name} {lname} {position} {salery}</h1>
      <button className='btn btn-danger text-info w-50 p-3' onClick={Changedata}>Data Update</button>
    </div>
  )
}
export default Toggle
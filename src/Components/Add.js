import React,{useState} from 'react';
import './Add.css';
import StudentDetails from './StuData';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
// uuid(universal unique identifier) is a 128-bit number used to 
//uniquely identify some objector entity on the internet
//we can use as a primary key(it is unique)

const Add = () => {

    const [name,setName] =useState('');
    const [age,setAge] =useState('');
    const [course,setCourse] =useState('');
    const [batch,setBatch] =useState('');
    const [cancel,setCancel] =useState(false);
    const handleCancel =()=>{
        setCancel(!cancel)
        history('/student-1')
    }

    let history = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        const ids=uuid();
        let uniid=ids.slice(0,8)
        let  a=name,b=age,c=course,d=batch;
        StudentDetails.push({id:uniid,Name:a,Age:b,Course:c,Batch:d})
        history('/student-1')
    }


  return (
    <div>
        <form className='Form-con'>
           <input  
           type='text' 
           placeholder='Enter Your Name'
           required 
           onChange={(e)=>setName(e.target.value)}
            />
            <input  
           type='number' 
           placeholder='Enter Your Age'
           required 
           onChange={(e)=>setAge(e.target.value)}
            />
            <input  
           type='text' 
           placeholder='Enter Your Course'
           required 
           onChange={(e)=>setCourse(e.target.value)}
            />
            <input  
           type='text' 
           placeholder='Enter Your Batch'
           required 
           onChange={(e)=>setBatch(e.target.value)}
            />
        </form>
        <button type='submit' onClick={handleCancel} className='btn-cancel-std' >Cancel</button>
        <button type='submit' onClick={(e)=>handleSubmit(e)} className='btn-add-std'>Submit</button>
    </div>
  )
}
export default Add;
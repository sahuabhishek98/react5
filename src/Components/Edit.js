import React,{useState,useEffect} from 'react';
import StudentDetails from './StuData';
import {useNavigate} from 'react-router-dom';
import './Add.css'
// uuid(universal unique identifier) is a 128-bit number used to 
//uniquely identify some objector entity on the internet
//we can use as a primary key(it is unique)

function Edit(){
    const [id,setId] =useState('');
    const [name,setName] =useState('');
    const [age,setAge] =useState('');
    const [course,setCourse] =useState('');
    const [batch,setBatch] =useState('');
    const [cancel,setCancel] =useState(false);


    let history = useNavigate();
     
    var index = StudentDetails.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const a = StudentDetails[index]//var index = StudentDetails.map(function(e)
        a.Name = name;//a.name from studata and name is variable
        a.Age = age;
        a.Course = course;
        a.Batch = batch;
        history('/student-1')

    }
    const handleCancel =()=>{
        setCancel(!cancel)
        history('/student-1')
    }
    
    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('Name'));
        setAge(localStorage.getItem('Age'))
        setCourse(localStorage.getItem('Course'))
        setBatch(localStorage.getItem('Batch'))
 },[])//[]it will load for one time dependencies



       return(
        <div>
         <form className='Form-con'>
           <input  
           type='text' 
           placeholder='Enter Your Name'
           required 
           value={name}
           onChange={(e)=>setName(e.target.value)}
            />
            <input  
           type='number' 
           placeholder='Enter Your Age'
           required 
           value={age}
           onChange={(e)=>setAge(e.target.value)}
            />
            <input  
           type='text' 
           placeholder='Enter Your Course'
           required 
           value={course}
           onChange={(e)=>setCourse(e.target.value)}
            />
            <input  
           type='text' 
           placeholder='Enter Your Batch'
           required 
           value={batch}
           onChange={(e)=>setBatch(e.target.value)}
            />
        </form>
        <button type='submit' onClick={handleCancel} className='btn-cancel-std' >Cancel</button>
        <button type='submit' onClick={(e)=>handleSubmit(e)} className='btn-add-std'>Update</button>
        </div>
       )
}
export default Edit;
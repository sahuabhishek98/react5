import React from 'react';
import StudentDetails from './StuData';
import './Student.css';

import {Link} from 'react-router-dom';
// import {Link} from 'react-router-dom'

const Student=()=>{
    
    const HandleEdit =(id,name,age,course,batch)=>{
        localStorage.setItem('id',id)
        localStorage.setItem('Name',name)
        localStorage.setItem('Age',age)
        localStorage.setItem('Course',course)
        localStorage.setItem('Batch',batch)
    }
 

    return(
        <div>
            <h1>Students Details</h1>
            <div className='table-con'>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Course
                            </th>
                            <th>
                                Batch
                            </th>
                            <th>
                                Change
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            StudentDetails && StudentDetails.length > 0?StudentDetails.map((item)=>{
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td>
                                            {item.Course}
                                        </td>
                                        <td>
                                            {item.Batch}
                                        </td>
                                        <td>
                                            <Link to={"/edit"}>
                                            <button onClick={()=>HandleEdit(item.id,item.Name,item.Age,item.Course,item.Batch)} className='btn-edit'>Edit</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            }):"no data available"
                        }
                    </tbody>
                </table>
                <br /><br />
                <Link to={"/add"}>
                    <button className='btn-add-std-1'>Add New Student</button>
                </Link>
            </div>
        
        </div>
    )
}
export default Student;
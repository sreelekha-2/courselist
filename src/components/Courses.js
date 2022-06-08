import React,{useState,useEffect} from 'react'

import { getCourses } from '../config/Myservice'
import { Link } from 'react-router-dom'

export default function Courses() {

    const [courses,setCourses]=useState([])

    useEffect(()=>{
        getCourses()
        .then(res=>setCourses(res.data))
        .catch(err=>console.log(err))
    })

  return (
    <div className="container">
        <h1>Courses</h1>
        <div className="d-flex flex-wrap">
            {courses.map(course=>
            <div className="m-3" key={course.id}>
                <img src={course.image} alt={course.name} width="300" height="230"/>
                <h4 className="mt-3 text-center">{course.name}</h4>
                <Link to="/form" className="btn btn-primary d-block w-100 mt-3">Enquire</Link>
                
            </div>)}
        </div>
    </div>
  )
}

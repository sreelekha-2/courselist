import React, { useEffect, useState } from 'react'
import { getUsers } from '../config/Myservice'

export default function Usersdata() {
    const [userData,setUserData]=useState([])

    useEffect(()=>{
        getUsers()
        .then(res=>setUserData(res.data))
        .catch(err=>console.log(err))
    })
  return (
    <div className='container'>
        <h2>User Data</h2>
        <div className='d-flex flex-wrap'>
            {userData.map(user=><div className="card me-3 p-2" key={user.id}>
                <h4 className="card-title">Username:{user.name}</h4>
                <div className='card-body'>
                    <p>Email:{user.email}</p>
                    <p>Mobile:{user.mobile}</p>
                </div>
                
            </div>)}
        </div>
        
    </div>
  )
}

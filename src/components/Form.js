
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { addUserData } from '../config/Myservice'

export default function Form() {

    const [state,setState]=useState({name:"",email:"",mobile:""})
    const navigate=useNavigate()

    const [error,setError]=useState(false)
    const [error2,setError2]=useState(false)
    const [error3,setError3]=useState(false)

    const [text,setText]=useState("")
    const [text2,setText2]=useState("")
    const [text3,setText3]=useState("")

    const handler=(event)=>{
      
        const {name,value}=event.target  
        setState({...state,[name]:value})
    

    }

    const postUserData=(event)=>{
        event.preventDefault()
        let result=validate()
        if(result){
            console.log(state)
            addUserData(state)
            .then(res=>{
               
               if(res){
                console.log(res)
                navigate("/usersdata")
               }
            })
            .catch(err=>console.log(err))
        }
       
      
    }

    const validate=()=>{
        let res1=nameValidate()
        let res2=emailValidate()
        let res3=mobileValidate() 
        return res1 && res2 && res3

    }

    const nameValidate=()=>{
        let regEx=new RegExp("^[A-Za-z]*$")
        if(state.name===""){
            setError(true)
            setText("Required*")
            return false
        }
        else if(!regEx.test(state.name)){
            setError(true)
            setText("Name should contain only alphabets")
            return false
        }
        else{
            setError(false)
            setText("")
            return true
        }
    }

    const emailValidate=()=>{
        let subText=state.email.substring(state.email.indexOf('@')+1);
        if(state.email===""){
            setError2(true)
            setText2("Required*")
            return false
        }
        else if(!state.email.includes('@')||subText==='') {
            setError2(true)
            setText2('Enter valid Email');
            return false;
        }
        else{
            setError2(false)
            setText2("")
            return true
        }
    }

    const mobileValidate=()=>{
        let reg=new RegExp('^[0-9]*$')
        if(state.mobile===""){
            setError3(true)
            setText3("Required*")
            return false
        }
        else if (reg.test(state.mobile)==false){
            setError3(true)
            setText3('the number should contain only numbers');
            return false;
        }
        else if(state.mobile.length<10 || state.mobile.length>10){
            setError3(true)
            setText3("Invalid mobile number")
            return false
        }
        else{
            setError3(false)
            setText3("")
            return true
        }
    }

  return (
    <div className="container">
        <form onSubmit={postUserData}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" className="form-control mt-3" onChange={handler} onBlur={nameValidate}/>
                {error?<p className="text-danger">{text}</p>:""}
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" className="form-control mt-3" onChange={handler} onBlur={emailValidate}/>
                {error2?<p className="text-danger">{text2}</p>:""}
            </div>
            <div className="form-group">
                <label>Mobile</label>
                <input type="number" name="mobile" className="form-control mt-3" onChange={handler} onBlur={mobileValidate}/>
                {error3?<p className="text-danger">{text3}</p>:""}
            </div>
            <input type="submit" className="btn btn-success mt-3"/>
        </form>

    </div>
  )
}

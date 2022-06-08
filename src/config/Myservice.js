
import { APIURL } from "./URL";
import { USERURL } from "./URL";
import axios from "axios"

function getCourses(){
    return axios.get(APIURL)
}

function addUserData(data){
    return axios.post(USERURL,data)
}

function getUsers(){
    return axios.get(USERURL)
}



export {getCourses,addUserData,getUsers}
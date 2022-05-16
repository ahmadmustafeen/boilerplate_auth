import axios from "axios";
import { API_ENDPOINTS } from "../constants";


export const SigninApiCall = async (parseData) => {
    console.log(parseData);
    const response =  await axios.post(API_ENDPOINTS.LOGIN,parseData);
    const {data,status} = response;
    if(status===200){
        if(data.status){
            alert("Login Successful");
            return data.data
        }
        else{
            alert("Login Failed");
            return {}
        }
    }
    else{
        alert("Login Failed");
        throw new Error("Login Failed");
    }
}

export const SignUpApiCall = async (parseData) => {
    console.log(parseData);
    const response =  await axios.post(API_ENDPOINTS.SIGNUP,parseData);
    const {data,status} = response;
    if(status===200 || status===201){
        if(data.status){
            alert(data.message||"Signup Successful");
            return data.data
        }
        else{
            alert(data.message||"Signup Failed");
            return {}
        }
    }
    else{
        alert("Signup Failed");
        throw new Error("Signup Failed");
    }
}
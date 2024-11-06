import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../config'


const EmailVerify = () => {
    const params=useParams()
    const[values,setValues]=useState({
        error:"",
        success:false
    })
    const{error,success} = values

    // verify process
    useEffect(()=>{
        const token = params.token
        fetch(`${API}/confirmation/${token}`,{
            method:"PUT",
            headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },

            })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                setValues({...values, error:data.error})
            }
            else{
                setValues({...values,error:'',success:true})
            }
        })
        .catch(err=>console.log(err))
    },[params.token])

    
// to show error message
const showError = () => {
    return (
      <div className="bg-red-100 text-red-800 p-4 rounded-lg" style={{display: error ? '' : 'none'}} role="alert">
        <strong className="font-bold text-sm mr-4">Error!</strong>
        <span className="block text-sm sm:inline max-sm:mt-2">{error}</span>
      </div>
    );
  };
  
  // to show success message
  const showSuccess = () => {
    return (
      <div className="bg-green-100 text-green-800 p-4 rounded-lg" role="alert" style={{display: success ? '' : 'none'}}>
        <strong className="font-bold text-sm mr-4">Success!</strong>
        <span className="block text-sm sm:inline max-sm:mt-2">Your email has been verified, Go to login page</span>
      </div>
    );
  };
  return (
    <>
      {showError()}
      {showSuccess()}
    </>
  )
}

export default EmailVerify
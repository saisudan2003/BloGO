import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import { SignupInput } from '@saisudansv/blog-common'
import axios from 'axios'
import { BACKEND_URL } from '../config'
function Auth({type}: {type: "signin" | "signup"}) {
    const navigate = useNavigate()
    const [postInputs, setpostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })
    const sendRequest = async () => {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, postInputs)
            console.log(response.data)
            const jwt = response.data.jwt
            localStorage.setItem("token", jwt)
            navigate('/blogs')

        }catch(e){
            alert("Something went wrong")
        }
    }
  return (
    <>
        <div className='h-screen flex flex-col justify-center ml-[20px] mr-[20px]'>
            <h1 className='text-4xl font-bold lg:ml-[170px]'>Create an account</h1>
            <div className={`flex text-md ml-[40px] lg:ml-[205px] mt-3`}>
                <h1>{type === "signup" ? "Already have an account?" : "Dont have an account"}</h1>
                <Link to={type === "signup" ? "/signin" : "/signup"} className='lg:ml-2 underline font-semibold'>{type === "signup" ? "SignIn" : "SignUp"}</Link>
            </div>
            <div className='mt-[50px] lg:ml-[150px] lg:mr-[150px]'>
                <LabeledInput label="Username" placeholder="michael@gmail.com" onChange={(e) => 
                    setpostInputs({...postInputs, email: e.target.value})
                }/>
            </div>
            <div className={`mt-[30px] lg:ml-[150px] lg:mr-[150px] ${type === "signup" ? "block" : "hidden"}`}>
                <LabeledInput label="Name" placeholder="Enter your name" onChange={(e) => 
                    setpostInputs({...postInputs, name: e.target.value})
                }/>
            </div>
            <div className='mt-[50px] lg:ml-[150px] lg:mr-[150px]'>
                <LabeledInput label="Password" type={"password"} placeholder="Enter your password" onChange={(e) => 
                    setpostInputs({...postInputs, password: e.target.value})
                }/>
            </div>
            <button onClick={sendRequest} className='mt-[50px] lg:ml-[150px] lg:mr-[150px] bg-black text-white rounded-lg p-3'>
                {type === "signin" ? "SignIn" : "SignUp"}
            </button>
        </div>
        
    </>
  )
}

interface LabeledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string
}
function LabeledInput({label, placeholder, onChange, type}: LabeledInputType) {
    return(
    <div>
        <label className="block mb-2 text-lg font-bold text-black">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className=" border border-gray-300 text-gray-900 
        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 font-semibold" placeholder={placeholder} required />
    </div>
    )
}

export default Auth
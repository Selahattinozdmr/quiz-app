"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom'

const RegisterForm = ({register,classes}:{register:any,classes:any}) => {
    const [state,formAction]=useFormState(register,undefined)
    const router=useRouter()
    useEffect(()=>{
        state?.success && router.push("/login")
    },[state?.success,router])
    return (
      <div className='flex justify-center my-18 '>
          <form action={formAction} className=' '>
            <div className='my-3'>
              <input type="text" name='name' className='input input-accent w-full border-2' placeholder='name'/>
            </div>
            <div className='my-3'>
              <input type="text" name='surname' className='input input-accent border-2 w-full' placeholder='surname'/>
            </div>
            <div className='my-3'>
              <select name="sinif" className=' input input-accent w-full border-2' id="">
                {classes.map((item:any)=><option key={item.id} value={item.class}>{item.class}</option>)}
              </select>

            </div>
            <div className='my-3'>
              <input type="text" name='username' className='input input-accent border-2 w-full' placeholder='username'/>
  
            </div>
            <div className='my-3'>
              <input type="text" name='email' className='input input-accent border-2 w-full'  placeholder='email' />
  
            </div>
            <div className='my-3'>
              <input type="password" name='password' className='input input-accent border-2 w-full' placeholder='password' />
  
            </div>
            <div className='my-3'>
              <input type="password" name='repeatPassword' className='input input-accent border-2 w-full' placeholder='repeat password'/>
  
            </div>
            <div className='my-3'>
                <label htmlFor="isAdmin" className=' block text-gray-400 text-sm my-2'>Öğretmen mi</label>
                <input type="checkbox" name='isAdmin'className=' checkbox input-accent border-2' />
            </div>
                <div>
                        
                </div>
              <button className=' btn btn-warning w-64'>Kaydol</button>
          </form>
      </div>
    )
}

export default RegisterForm
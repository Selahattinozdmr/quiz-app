"use client"

import React from 'react'
import { useFormState } from 'react-dom'

const LoginForm = ({login}:{login:any}) => {

    const [state,fomrAction]=useFormState(login,undefined)
  return (
    <div className=' w-screen h-screen flex justify-center my-10'>
      <form action={fomrAction} className=''>
        <div className=''>
          <input type="text" name='username' className=' input input-accent border-2 block my-4' placeholder='username'/>  
          <input type="password" name='password' className=' input input-accent border-2 block' placeholder='password'/>
        </div>
        <div className='my-2'>
        {state?.error}
        </div>
        <button className=' btn btn-warning text-base-100 my-5 w-64'>Login</button>  
      </form>
    </div>
  )
}

export default LoginForm
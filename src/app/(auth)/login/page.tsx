import { loginAction } from '@/action'
import LoginForm from '@/components/login/LoginForm'
import React from 'react'

const page = () => {
  return (
    <div>
        <LoginForm login={loginAction}/>
    </div>
  )
}

export default page
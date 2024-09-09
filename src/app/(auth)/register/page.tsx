"use server"
import {getClasses, register}  from '@/action'
import RegisterForm from '@/components/register/RegisterForm'
import React from 'react'
import { useFormState } from 'react-dom'

const RegisterPage =async () => {
  const classes=await getClasses()
  return (
    <div>
      <RegisterForm register={register} classes={classes} />
    </div>
   ) 
}

export default RegisterPage
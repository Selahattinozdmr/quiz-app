import Link from 'next/link'
import React from 'react'
import Links from "@/components/navbar/links/Links"
import { auth } from '@/auth'
const Navbar = async() => {
  const session=await auth()
    return (
    <div className=' flex justify-around items-center'>
      <Link href="/" className={" text-3xl"}>SeloQuiz</Link>
    <div>
        
    </div>
        <Links session={session}/>
    </div>
  )
}

export default Navbar

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import quizImg from '../../public/quiz.jpg'
import { auth } from '@/auth'
import Navbar from '@/components/navbar/links/Links'
const HomePage = async() => {
  const session=await auth()
  console.log(session)
  return (

    <div className='h-auto my-40 flex justify-center items-center'>

      <div className="card w-2/6 h-1/6 items-center ">
        <div className="card-body  border-2 border-black rounded-md p-16">
          <h1 className=' card-title'>Learn new concepts for each question</h1>
          <p>We help you prepare for exams and quizes</p>
          <div className=' card-actions justify-end my-5'>
            <Link href={`${session?.user  ? session.user.isAdmin?"/teacher-page":"ogrenci-sayfa":"/login"}`} className='btn btn-primary'>Hemen Başla</Link>
          </div>
        </div>
      </div>
        <Image src={quizImg} alt='' className='rounded-md mx-4 border-2 border-black' width={470} height={450}></Image>
        
    </div>
  )
}

export default HomePage
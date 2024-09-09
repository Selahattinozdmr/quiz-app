import { getQuestion } from '@/action'
import TeacherQuestion from '@/components/teacherPage/question/TeacherQuestion'
import Link from 'next/link'
import React from 'react'

const page = async({params}) => {
    console.log(params.slug)
    const getQuiz=await getQuestion(parseInt(params.slug))
    console.log(getQuiz)
  return (
    <div className=' w-screen h-screen  justify-center'>
      <div>
      {getQuiz?.map((quiz:any) => (
          <TeacherQuestion quiz={quiz} key={quiz.id}/>
        )) }

      </div>
      <div className=' flex justify-end p-5 px-52'>
        <Link href={"/teacher-page/quiz-list"} className=' btn btn-accent'>Geri Dön</Link>
      </div>
    </div>
  )
}

export default page
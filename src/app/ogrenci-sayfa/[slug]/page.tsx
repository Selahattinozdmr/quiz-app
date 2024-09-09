"use server"
import { getQuizesforStudend1, updateIsCompleted } from '@/action'
import QuizApp from '@/components/teacherPage/quiz/QuizApp/QuizApp'
import React from 'react'
import { editScore } from '@/action'
import { auth } from '@/auth'
const page = async({params}) => {
  const quizes=await getQuizesforStudend1(params.slug)
    return (
    <div>
        <QuizApp sorular={quizes} id={params.slug} updateIsCompleted={updateIsCompleted} editScore={editScore}/>
    </div>
  )
}

export default page
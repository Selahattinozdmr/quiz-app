
import { getCategory, getCheckedSubCategory, getClasses, getQuiz, getRandomQuiz, getSubCategory } from '@/action'
import React, { useState } from 'react'
import Konular from "@/components/teacherPage/quiz/create-quiz/Konular"
import CreateQuiz from '@/components/teacherPage/quiz/create-quiz/CreateQuiz'
import { auth } from '@/auth'
const page = async () => {
  const categories = await getCategory()
  const subCategories = await getSubCategory()
  const class1=await getClasses()
  const session=await auth()
  

  return (
    
   <CreateQuiz categories={categories} class1={class1} subCategories={subCategories} getCheckedSubCategory={getCheckedSubCategory} teacherId={session?.user?.id}/>
  )
}

export default page
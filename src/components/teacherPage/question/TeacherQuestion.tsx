"use client"
import React from 'react'
import Image from 'next/image'
const TeacherQuestion = ({quiz}:{quiz:any}) => {
  return (
    <div className=' w-screen flex justify-center my-8'>
      <div className='card rounded-lg bg-base-100 border border-base-200 shadow-xl w-2/4 p-4 '>
        
          <div key={quiz.id} className=''>
            <p className=' text-left'>{quiz.content}</p>
            <div className=' flex justify-center'>
             {quiz.file1 &&( <Image src={"/"+quiz.file1} alt='' className='w-2/3 h-[300px]  ' width={1000} height={1000}/>)}

            </div>
            <h1 className=' border-b-2 font-bold py-2'>{quiz.id}-) {quiz.question}</h1>

            <div>
              <div  onClick={(e)=>quiz.correctAnswer=="A" ? e.currentTarget.classList.add("border-success"):console.log("A")} className='border border-base-300 shadow-xl  p-3 rounded-lg my-3 hover:bg-accent duration-300'>
                <p><b>A:</b>{quiz.answerA}</p>
              </div>            
              <div onClick={(e)=>quiz.correctAnswer=="B"? e.currentTarget.classList.add("border-success"):console.log("B")} className='border border-base-300 shadow-xl p-3 rounded-lg my-3 hover:bg-accent duration-300'>
                <p><b>B:</b>{quiz.answerB}</p>
              </div>
              <div onClick={(e)=>quiz.correctAnswer=="C" ? e.currentTarget.classList.add("border-success"):console.log("C")} className=' border border-base-300 shadow-xl p-3 rounded-lg my-3 hover:bg-accent duration-300'>
                <p><b>C:</b>{quiz.answerC}</p>
              </div>
              <div onClick={(e)=>quiz.correctAnswer=="D" ? e.currentTarget.classList.add("border-success"):console.log("D")} className=' border border-base-300 shadow-xl  p-3 rounded-lg my-3 hover:bg-accent duration-300'>
                <p><b>D:</b>{quiz.answerD}</p>
              </div>

            </div>

          </div>      
      </div>
      
    </div>

)

}

export default TeacherQuestion
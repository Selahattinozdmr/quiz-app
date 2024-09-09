
import Link from 'next/link'
import React from 'react'
import { getApprovedUser, getClassCount, getLessonCount, getQuestionCount, getQuizCount, getStudentCount } from '@/action'
import ApexChartd from '../apexchart/ApexChart'
import BarChart from '../apexchart/BarChart'
import { TbCategory,TbQuestionMark } from "react-icons/tb";
import { PiStudentFill } from "react-icons/pi";
import { VscSymbolClass } from "react-icons/vsc";
const TeacherPage = async() => {
  const a=await getQuestionCount()
  const b=await getStudentCount()
  const c=await getClassCount()
  const d=await getLessonCount()
  const e=await getQuizCount()
  const f=await getApprovedUser()
  console.log(f)

  return (
    <div className=' w-11/12 my-10 '>
         
   
      <div className=' flex w-full h-full'>
      
      <div className=' quizz w-[170px] h-full border-r- shadow-xl border-gray-300 px-3 '>
        
          <h1 className=' text-lg'>Dashboard</h1>
        
        <div className=' my-10 h-full'>
          <Link href={"/teacher-page/create-quiz"} className='w-full block text-sm text-gray-700 hover:text-black my-6'>Create Quiz</Link>
          <Link href={"/teacher-page/create-question"} className=' w-full block text-sm text-gray-700 my-6 hover:text-black'>Create Question</Link>
          <Link href={"/teacher-page/edit-question"} className=' w-full block text-sm text-gray-700 my-6 hover:text-black'>Edit Question</Link>

        </div>

      </div>
      <div className=' w-full'>
        <div className=' px-5 flex justify-between w-full'>
          <h1 className=' text-2xl font-bold '>Dashboard</h1>
          <a href='/teacher-page/create-quiz' className=' btn bg-gray-200'> <p className=' text-xl'>+</p> Add Quiz { }</a>
        </div>
        <hr className=' my-2 border-gray-300 border'/>
        <div className='cards flex p-5'>
          <div className="card rounded-lg bg-base-100 border border-base-200 shadow-xl w-1/4 mx-3 h-28">
            <div className=' w-full h-full flex items-center justify-center'>
              <div className='rounded-3xl bg-gray-400 p-2 mr-8'>
                <TbCategory className=' text-2xl'/>

              </div>
              <div className=' w-16'>
                <p className=' font-bold text-xl'>{d}</p>
                <p className=' text-sm text-gray-500 '>Category</p>
              </div>

            </div>
          </div>
          <div className="card rounded-lg bg-base-100 border border-base-200 shadow-xl w-1/4 mx-3 h-28">
            <div className=' w-full h-full flex items-center justify-center'>
              <div className='rounded-3xl bg-gray-400 p-2 mr-8'>
                <TbQuestionMark className=' text-2xl'/>

              </div>
              <div className=' w-16'>
                <p className=' font-bold text-xl'>{a}</p>
                <p className=' text-sm text-gray-500 '>Question</p>
              </div>

            </div>
          </div>
          <div className="card rounded-lg bg-base-100 border border-base-200 shadow-xl w-1/4 mx-3 h-28">
            <div className=' w-full h-full flex items-center justify-center'>
              <div className='rounded-3xl bg-gray-400 p-2 mr-8'>
              <PiStudentFill className=' text-2xl'/>

              </div>
              <div className=' w-16'>
                <p className=' font-bold text-xl'>{b}</p>
                <p className=' text-sm text-gray-500 '>Student</p>
              </div>
            </div>
          </div>
          <div className="card rounded-lg bg-base-100 border border-base-200 shadow-xl w-1/4 mx-3 h-28">
            <div className=' w-full h-full flex items-center justify-center'>
              <div className='rounded-3xl bg-gray-400 p-2 mr-8'>
              <VscSymbolClass className=' text-2xl'/>

              </div>
              <div className=' w-16'>
                <p className=' font-bold text-xl'>{c}</p>
                <p className=' text-sm text-gray-500 '>Class</p>
              </div>

            </div>
          </div>
        </div>
        <div className=' flex p-5'>
          <div className="card rounded-lg bg-base-100 border border-base-200 shadow-xl w-2/4 mx-3 h-[600px] p-5">
            <h1 className=' text-2xl p-2'>Quiz Summary</h1>
            <hr className="border border-base-200"/>

            <div className=' bg-green-200 flex justify-between py-6 px-14 items-center rounded-2xl my-3'>
              <div className=' bg-green-500 text-base-100 p-3 rounded-lg'>{e}</div>
              <p className=' text-lg font-bold '>Last Quiz </p>
              <a href='/teacher-page/quiz-list' className=' link text-blue-700 font-bold'>Edit Quiz </a>

            </div>
            <div className=' flex my-3'>
              <div className="card rounded-lg bg-base-100 border border-base-200 shadow-xl w-1/2 mx-3 h-20">
                <p className=' text-center my-1'>{f[0]}</p>
                <p className=' text-sm text-base-300 text-center'>Solved</p>
              </div>
              <div className="card rounded-lg bg-base-100 border border-base-200 shadow-xl w-1/2  mx-3">
              <p className=' text-center my-1'>{f[1]}</p>
                <p className=' text-sm text-base-300 text-center'>Unsolved</p>
              </div>
          
            </div>
            <div className=' flex items-center w-full h-full'>
              <ApexChartd type={"donut"}/>
            </div>
          </div>
          <div className="card rounded-lg bg-base-100 border border-base-200 shadow-xl w-2/4 mx-3 p-3 flex items-center justify-center">
            <BarChart d1={12} d2={13} d3={24} d4={20} d5={16} d6={19} d7={65}/>
          </div>
        </div>
       
      </div>
      
      </div>
    </div>
  )
}

export default TeacherPage
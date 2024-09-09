"use client"
import React,{useState} from 'react'
import Konular from './Konular'

const CreateQuiz = ({getCheckedSubCategory,categories,subCategories,teacherId,class1}) => {
  const [math, setMath] = useState<string[]>([])
  const [science, setScience] = useState<string[]>([])
  const [relegion, setRelegion] = useState<string[]>([])
  const [english, setEnglish] = useState<string[]>([])
  const [turkish, setTurkish] = useState<string[]>([])
  const [history, setHistory] = useState<string[]>([])

  return (
    <div>
         <div className=' w-screen  flex px-6  '>
      <div className=' card rounded-lg bg-base-100 border border-base-200 shadow-xl px-3 my-10 w-full'>
        <h1 className=' text-xl text-center mb-5 mt-5'>Lesson and Question Count</h1>
        <form action={getCheckedSubCategory}>
          <div className='w-full'>
            <input type="hidden" name="teacherId" value={teacherId}/>
            <div className='flex'>
              {categories?.map((item:any) =>
                
                 <Konular key={item.id} title={item.title} id={item.id} name={item.name} 
                 subCategories={subCategories} math={math} science={science} relegion={relegion} english={english} 
                 turkish={turkish} history={history} setMath={setMath} setScience={setScience} setRelegion={setRelegion}
                 setEnglish={setEnglish} setHistory={setHistory} setTurkish={setTurkish}
                 />
            )

              }
            </div>
           
              <div className=' flex items-center justify-end py-6 px-3'>
              <input type="datetime-local" name="date" id="" className=' input input-xs input-accent mx-2'/>
              <select name="classes" className=' input input-xs w-32 input-accent ' required id="">
                 <option disabled selected value="">Select Class</option>
                  {class1?.map((item:any) =>(
                    <option key={item.id} value={item.class}>{item.class}</option>
                  ))}
                </select>
                <button type='submit' className=' btn btn-sm btn-info text-base-100 mx-7'>Create</button>
                <a href='/teacher-page/quiz-list' className=' btn btn-sm btn-info text-base-100'>Quiz List</a>
              </div>
            
          </div>
        </form>
      </div>

    </div>
    </div>
  )
}

export default CreateQuiz
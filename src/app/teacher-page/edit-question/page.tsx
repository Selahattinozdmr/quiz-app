import { getAllQuestons } from '@/action'
import React from 'react'

const page = async() => {
  const question=await getAllQuestons()
  return (
    <div>
    <div className=' my-10'>
     <h1 className='text-center border-y-2 p-3 text-3xl'>Questions</h1>
     <div className=" overflow-auto">
         <table className="table table-zebra">
             {/* head */}
             <thead>
             <tr>
                 <th>IDs</th>
                 <th>Question</th>
                 <th>Question Content</th>
                 <th>A</th>
                 <th>B</th>
                 <th>C</th>
                 <th>D</th>
                 <th>True Answer</th>
                 <th>Image</th>
                 <th>Process</th>

             </tr>
             </thead>
             <tbody>
             {/* row 1 */} 
             {question?.map(item=>(
              
               <tr key={item.id}>
                 <th>{item.id}</th>
                 <td className=' w-3/12'>{item.question}</td>
                 <td className=' text-xs w-5/12'>{item.content}</td>
                 <td>{item.answerA}</td>
                 <td>{item.answerB}</td>
                 <td>{item.answerC}</td>
                 <td>{item.answerD}</td>
                 <td >{item.correctAnswer}</td>
                 <td >{item.file1? item.file1:"Boş"}</td>
                 <td><a href={"/teacher-page/edit-question/"+item.id} className='btn btn-warning btn-xs'>Edit</a></td>
               </tr> 
             ))}

                            
             </tbody>
         </table>
     </div>
 </div>


    
 </div>
  )
}

export default page
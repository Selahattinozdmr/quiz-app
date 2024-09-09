import React from 'react'
import { auth } from '@/auth'
import { getQuizforStudent } from '@/action'
const SPage =async () => {

  const session=await auth()
  const quiz=await getQuizforStudent(session)
  return (
    <div>
    <div className=' my-10'>
     <h1 className='text-center border-y-2 p-3 text-3xl'>Quiz History</h1>
     <div className=" overflow-auto">
         <table className="table table-zebra">
             {/* head */}
             <thead>
             <tr>
                 <th>IDs</th>
                 <th>True Answer Count</th>
                 <th>False Answer Count</th>
                 <th>Sum Question Count</th>
                 <th>Dedline</th>
                 <th>Process</th>

             </tr>
             </thead>
             <tbody>
             {/* row 1 */} 
             {quiz?.map(item=>(
              
               <tr key={item.quizId}>
                 <th>{item.id}</th>
                 <td>{item.trueAnswer}</td>
                 <td>{item.falseAnswer}</td>
                 <td >{item.quiz.sumQuestion}</td>
                 <td>{item.quiz.dedline.toUTCString()}</td>
                 <td className=' flex'>
                  {!item.isCompleted  && item.quiz.dedline.getTime()>=new Date().getTime()?(
                    <>
                      <a href={"/ogrenci-sayfa/"+item.id} className='btn btn-xs btn-accent'>Go</a>
                    </>
                    
                  ):(<p className=' '>Completed, Ded</p>)}
                 </td>
               </tr> 
             ))}

                            
             </tbody>
         </table>
     </div>
 </div>


    
 </div>
  )
}

export default SPage
import { approveQuiz, deleteQuizById, getQuiz } from '@/action'
import { auth } from '@/auth'
import React from 'react'

const page =async () => {
    const session=await auth()
    const quiz=await getQuiz(session?.user?.id)
    console.log(session?.user?.name)
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
                        <th>Author</th>
                        <th>Class</th>
                        <th>Date</th>
                        <th>Question Id</th>
                        <th className=' text-center'>İşlem</th>
                        <th>Dedline</th>

                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */} 
                    {quiz?.map(item=>(
                      !item.isApproved&&
                      <tr key={item.id}>
                        <th>{item.id}</th>
                        <td>{session?.user?.name}</td>
                        <td>{item.className1}</td>
                        <td>{item.date.toUTCString()}</td>
                        <td className=' overflow-auto'>{item.questionId?.toString()}</td>
                        <td className=' flex'>
                          <form action={approveQuiz}>
                            <input type="hidden" name="id" value={item.id}/>
                            <input type="hidden" name='className1' value={item.className1}/>
                            <input type="datetime-local" name="date" id="" className=' input input-xs input-accent mx-2'/>
                            <button className='mx-1 btn btn-xs btn-accent'>Approve</button>
                          </form>
                          <a href={"/teacher-page/quiz-list/"+item.id} className='btn btn-xs btn-accent'>Go</a>
                          <form action={deleteQuizById}>
                            <input type="hidden" name="id" value={item.id} />
                            <button className='mx-1 btn btn-xs btn-accent'>Delete</button>
                          </form>
                        </td>
                        <td>{item.dedline.toUTCString()}</td>
                      </tr> 
                    ))}

                                   
                    </tbody>
                </table>
            </div>
        </div>
        <div className=' flex justify-end p-3'>
          <a href='/teacher-page/create-quiz' className=' btn btn-accent'>Go Back</a>
        </div>

           
        </div>
  )
}

export default page
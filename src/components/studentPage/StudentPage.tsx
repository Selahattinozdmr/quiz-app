import React from 'react'

const StudentPage = ({session,todos,userId,addTodo,homeworks,completeHomeWork}:{session:any,todos:any,userId:any,addTodo:any,completeHomeWork:any,homeworks:any}) => {
  return (
    <div className=' w-11/12 my-10'>
         
    <h2 className='text-3xl text-center h-auto'>Ders Merkezine Hoş Geldin {session.user?.name}</h2>
   
  <div className=' flex w-full'>
 
    <div className='durum  mx-14 my-28 w-3/12 border p-3'>
   

    </div>
    

  </div>
  </div>
  )
}

export default StudentPage
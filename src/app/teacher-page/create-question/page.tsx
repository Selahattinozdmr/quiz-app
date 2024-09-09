"use server"
import { createQuestion, getCategory, getSubCategory } from '@/action'
import React from 'react'

const CreateQuestionPage =async () => {
    const categories=await getCategory()
    const subcategories=await getSubCategory()
    return (
    <div className=' w-screen h-screen flex justify-center'>
        <form action={createQuestion} >
            <div className=' my-2'>
                <input type="text" placeholder='Question' className=' input input-text input-accent' name='question' />
            </div>
            <div className=' my-2'>
                <input type="text" placeholder='Option A' name='optionA'className=' input input-text input-accent' />

            </div>
            <div className=' my-2'>
                <input type="text" placeholder='Option C' name='optionB' className=' input input-text input-accent'/>
            </div>
            <div className=' my-2'>
                <input type="text"placeholder='Option C' name='optionC' className=' input input-text input-accent'/>  
            </div>
            <div className=' my-2'>
                <input type="text" placeholder='Option D' name='optionD'className=' input input-text input-accent' />
            </div>
            <div className=' my-2'>
                <input type="text" placeholder='Correct Answer (A)' name='correctAnswer'className=' input input-text input-accent' />
            </div>
            <div className=' my-2'>
                <input type="file" placeholder='' name='file' className=' file-input w-2/4 ' accept="image/*" />
            </div>
            <div className=' my-2'>
                <input type="text" placeholder='Question Content' name='content'  className='input input-accent w-2/4 ' />
            </div>
            <div className=' my-2'>
                <select name="category" className=' input input-accent w-2/4' id="">
                    <option selected disabled>Select Category</option>
                    {categories?.map(item=>(
                       <> 
                        <option key={item.id} value={item.id}>{item.name}</option>
                        </>
                    ))}
                </select>
            </div>
            <div className=' my-2'>
                <select name="subcategory" className=' input input-accent w-2/4' id="">
                    <option selected disabled>Select Subcategory</option>
                    {categories?.map(item=>(
                       <>
                        {subcategories?.map(sub=>(
                           item.id==sub.categoryId &&( <option key={sub.id} value={sub.id}>{sub.name}</option>)

                        ))} 
                        </>
                    ))}
                </select>
            </div>
            
            <div>
                <button className=' btn btn-accent w-2/4'>Add</button>
            </div>
        </form>

    </div>
  )
}
export default CreateQuestionPage
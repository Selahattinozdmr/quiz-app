import React from 'react'
import { getCategory, getQuestionById, getSubCategory, updateQuestion } from '@/action'

const page = async({params}) => {
    const categories=await getCategory()
    const subcategories=await getSubCategory()
    const question=await getQuestionById(params.slug)
  return (
    <div className=' w-screen h-screen flex justify-center'>
        <form action={updateQuestion} >
            <input type="hidden" name="id" value={params.slug} />
            <div className=' my-2'>
                <input type="text" defaultValue={question?.question} placeholder='Soru' className=' input input-text input-accent  w-3/4' name='question' />
            </div>
            <div className=' my-2'>
                <input type="text" defaultValue={question?.answerA} placeholder='A seçeneği' name='optionA'className=' input input-text input-accent  w-3/4' />

            </div>
            <div className=' my-2'>
                <input type="text" placeholder='B seçeneği' defaultValue={question?.answerB} name='optionB' className=' input input-text input-accent w-3/4'/>
            </div>
            <div className=' my-2'>
                <input type="text"placeholder='C seçeneği' name='optionC' defaultValue={question?.answerC} className=' input input-text input-accent w-3/4'/>  
            </div>
            <div className=' my-2'>
                <input type="text" placeholder='D Seçeneği' name='optionD' defaultValue={question?.answerD} className=' input input-text input-accent w-3/4' />
            </div>
            <div className=' my-2'>
                <input type="text" placeholder='Doğru cevap (A) ya da (B)' defaultValue={question?.correctAnswer} name='correctAnswer'className=' input input-text input-accent w-3/4' />
            </div>
            <div className=' my-2'>
                <input type="file"  name='file' className=' file-input w-3/4 ' accept="image/*" />
            </div>
            <div className=' my-2'>
                <textarea type="text" placeholder='Soru İçeriği giriniz' defaultValue={question?.content} name='content'  className='input input-accent w-3/4 h-72' />
            </div>
            <div className=' my-2'>
                <select name="category" defaultValue={question?.categoryId} className=' input input-accent w-3/4' id="">
                    {categories?.map(item=>(
                       <> 
                        <option key={item.id} value={item.id}>{item.name}</option>
                        </>
                    ))}
                </select>
            </div>
            <div className=' my-2'>
                <select name="subcategory"  defaultValue={question?.subCategoryId} className=' input input-accent w-3/4' id="">
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
                <button className=' btn btn-accent w-3/4 my-5'>Güncelle</button>
            </div>
        </form>

    </div>
  )
}

export default page
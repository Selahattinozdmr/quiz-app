 "use client"
 import React, { useState } from 'react'


 const Konular = ({ subCategories, id, name, title,math,science,relegion,english,turkish,history,setMath,setScience,setRelegion,setEnglish,setTurkish,setHistory }) => {
   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const value = e.currentTarget.value
     if(e.currentTarget.name=="mat"){
       if (math.includes(value)) {
         setMath(s => s.filter(sub => sub !== value))
       } else {
         setMath(s => [...s, value])
       }

     }
     if(e.currentTarget.name=="fen"){
       if (math.includes(value)) {
         setScience(s => s.filter(sub => sub !== value))
       } else {
         setScience(s => [...s, value])
       }

     }
     if(e.currentTarget.name=="turkce"){
       if (turkish.includes(value)) {
         setTurkish(s => s.filter(sub => sub !== value))
       } else {
         setTurkish(s => [...s, value])
       }
     }
     if(e.currentTarget.name=="inkilap"){
       if (history.includes(value)) {
         setHistory(s => s.filter(sub => sub !== value))
       } else {
         setHistory(s => [...s, value])
       }
     }
     if(e.currentTarget.name=="ingilizce"){
       if (english.includes(value)) {
         setEnglish(s => s.filter(sub => sub !== value))
       } else {
         setEnglish(s => [...s, value])
       }

     }
     if(e.currentTarget.name=="din"){
       if (relegion.includes(value)) {
         setRelegion(s => s.filter(sub => sub !== value))
       } else {
         setRelegion(s => [...s, value])
       }

     }
    
   }

   return (
     <div >
       <div className=' card rounded-lg bg-base-100 border border-base-200 shadow-xl py-2 mx-2 h-[700px]'>
         <h1 className=' text-center text-2xl'>{name}</h1>
         <div className=' flex  w-full justify-center'>
           <input type="number" min={0} defaultValue={0} name={title + "i"} className=' input input-sm w-5/6 input-accent my-2' placeholder='Soru sayısı' />
           <input type="hidden" name="math" value={math.join(",")} />
           <input type="hidden" name="relegion" value={relegion.join(",")} />
           <input type="hidden" name="science" value={science.join(",")} />
           <input type="hidden" name="english" value={english.join(",")} />
           <input type="hidden" name="turkish" value={turkish.join(",")} />
           <input type="hidden" name="history" value={history.join(",")} />
         </div>
         {subCategories?.map((item: any) => (
           item.categoryId === id && (
             <div key={item.id} className=' border border-b-black my-1 flex justify-between items-center min-h-10 px-2 '>
               <label htmlFor="" className=' w-44'>{item.name}</label>
               <input type="checkbox" className=' checkbox checkbox-primary' name={title} value={item.title} id=""
               onChange={handleCheckboxChange} />
             </div>
           )
         ))}
       </div>

     </div>
   )
 }

 export default Konular
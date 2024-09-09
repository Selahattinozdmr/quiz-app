import { useState } from 'react'
import Image from 'next/image'
const Card = ({start,question,handleClick,finish,correctAnswer,setScore1,index}:{index:number,setScore1:any,correctAnswer:string,start:boolean,question:any,handleClick:any,finish:boolean}) => {
  
  const [selectedAnswer, setSelectedAnswer] = useState(false)
  const [correcta,setCorrecta]=useState(false)
  const [correctb,setCorrectb]=useState(false)
  const [correctc,setCorrectc]=useState(false)
  const [correctd,setCorrectd]=useState(false)
  const clear=()=>{
    setSelectedAnswer(false)
    setCorrecta(false)
    setCorrectb(false)
    setCorrectc(false)
    setCorrectd(false)
  }
  
  return (

    <div className={`absolute w-full flex justify-center ${!finish &&start?"visible pointer-events-auto":" invisible pointer-events-none"}`}>
      <div className='card rounded-lg bg-base-100 border border-base-200 shadow-xl w-2/4 p-4 '>
        
          <div key={question.id} className=''>
            <p className=' text-left'>{question.content}</p>
            <div className=' flex justify-center'>
             {question.file1 &&( <Image src={"/"+question.file1} alt='' className='w-2/3 h-[300px]  ' width={1000} height={1000}/>)}

            </div>
            <h1 className=' border-b-2 font-bold py-2'>{index}- {question.question}</h1>

            <div>
              <div  onClick={()=>{
                setSelectedAnswer(true)
                if(correctAnswer=="A"){
                  setCorrecta(true)
                  setScore1((s:any)=>s+1)
                }
              }} className={`border border-base-300 shadow-xl p-3 rounded-lg my-3 hover:bg-accent duration-300  ${selectedAnswer?"pointer-events-none":"pointer-events-auto"} ${correcta &&selectedAnswer?" bg-green-300":""}`}>
                <p><b>A:</b>{question.answerA}</p>
              </div>            
              <div onClick={()=>{
                setSelectedAnswer(true)
                if(correctAnswer=="B"){
                  setCorrectb(true)
                  setScore1((s:any)=>s+1)
                }

              }} className={`border border-base-300 shadow-xl p-3 rounded-lg my-3 hover:bg-accent duration-300  ${selectedAnswer?"pointer-events-none":"pointer-events-auto"} ${correctb&&selectedAnswer?" bg-green-300":""}`}>
                <p><b>B:</b>{question.answerB}</p>
              </div>
              <div onClick={()=>{
                setSelectedAnswer(true)
                if(correctAnswer=="C"){
                  setCorrectc(true)
                  setScore1((s:any)=>s+1)
                }
              }} className={`border border-base-300 shadow-xl p-3 rounded-lg my-3 hover:bg-accent duration-300  ${selectedAnswer?"pointer-events-none":"pointer-events-auto"} ${correctc&&selectedAnswer?" bg-green-300":""}`}>
                <p><b>C:</b>{question.answerC}</p>
              </div>
              <div onClick={()=>{
                setSelectedAnswer(true)
                if(correctAnswer=="D"){
                  setCorrectd(true)
                  setScore1((s:any)=>s+1)
                }
              }} className={`border border-base-300 shadow-xl p-3 rounded-lg my-3 hover:bg-accent duration-300  ${selectedAnswer?"pointer-events-none":"pointer-events-auto"} ${correctd&&selectedAnswer?" bg-green-300":""}`}>
                <p><b>D:</b>{question.answerD}</p>
              </div>
              {selectedAnswer&&(<div className="flex justify-end">
               <button className=" btn btn-accent " onClick={()=>{
                 handleClick()
                 clear()            
               }}>Next</button>

             </div>)}

            </div>

          </div>      
      </div>
      
    </div>


    // <div  className={`absolute w-2/5 ${!finish &&start?"visible pointer-events-auto":" invisible pointer-events-none"}`}>
    //    <div className="card card-bordered border-white shadow-md shadow-purple-50">
    //     <div className="card-body">
    //       <h2 className="card-title">{index}- {question.question}</h2>
    //       <div className="options">
    //         <>
    //           <div id='aa' className={`input p-2 my-2 input-secondary cursor-pointer hover:bg-accent duration-500 transition ease-in-out ${selectedAnswer?"pointer-events-none":"pointer-events-auto"} ${correcta?" input-success":""} `} onClick={() => {
    //             setSelectedAnswer(true)
    //             if(correctAnswer=="A"){
    //               setCorrecta(!correcta)
    //               setScore1((s:any)=>s+1)
    //             }
    //           }}>
    //             <span><b>a-)</b> {question.answerA}</span>
    //           </div>
    //           <div id='bb' className={`input p-2 my-2 input-secondary cursor-pointer hover:bg-accent duration-500 transition ease-in-out ${selectedAnswer?"pointer-events-none":"pointer-events-auto"} ${correctb?" input-success":""}`}onClick={() => {
    //             setSelectedAnswer(true)
    //             if(correctAnswer=="B"){
    //               setCorrectb(true)
    //               setScore1((s:any)=>s+1)

    //             }
    //           }}>
    //             <span><b>b-)</b> {question.answerB}</span>
    //           </div>
    //           <div id='cc' className={`input p-2 my-2 input-secondary cursor-pointer hover:bg-accent duration-500 transition ease-in-out ${selectedAnswer?"pointer-events-none":"pointer-events-auto" }  ${correctc?" input-success":""}`}onClick={() => {
    //             setSelectedAnswer(true)
    //             if(correctAnswer=="C"){
    //               setScore1((s:any)=>s+1)
    //               setCorrectc(true)
    //             }
    //           }}>
    //             <span><b>c-)</b> {question.answerC}</span>
    //           </div>
    //           <div id='dd' className={`input p-2 my-2  ${correctd?" input-success":""} input-secondary cursor-pointer hover:bg-accent duration-500 transition ease-in-out  ${correctd?" input-success":""} ${selectedAnswer?"pointer-events-none":"pointer-events-auto"}`} onClick={() => {
    //             setSelectedAnswer(true)
    //             if(correctAnswer=="D"){
    //               setScore1((s:any)=>s+1)
    //               setCorrectd(true)
                  

    //             }
    //           }}>
    //             <span><b>d-)</b> {question.answerD}</span>
    //            </div>
    //         </>
    //         <div className="flex justify-end">
    //           <button className=" btn btn-accent " onClick={()=>{
    //             handleClick()
    //             clear()            
    //           }}>Next</button>

    //         </div>
    //       </div>


          

    //     </div>
    //    </div>
    // </div>
  )
 
}


export default Card
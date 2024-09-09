"use client"
import { useState } from 'react'
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
    <div  className={`absolute w-2/5 ${!finish &&start?"visible pointer-events-auto":" invisible pointer-events-none"}`}>
       <div className="card card-bordered border-white shadow-md shadow-purple-50">
        <div className="card-body">
          <h2 className="card-title">{index}- {question.soruMetni}</h2>
          <div className="options">
            <>
              <div id='aa' className={`input p-2 my-2 input-secondary cursor-pointer hover:bg-accent duration-500 transition ease-in-out ${selectedAnswer?"pointer-events-none":"pointer-events-auto"} ${correcta?" input-success":""} `} onClick={() => {
                setSelectedAnswer(true)
                if(correctAnswer==question.cevapSecenekleri.a){
                  setCorrecta(!correcta)
                  setScore1((s:any)=>s+1)
                }
              }}>
                <span><b>a-)</b> {question.cevapSecenekleri.a}</span>
              </div>
              <div id='bb' className={`input p-2 my-2 input-secondary cursor-pointer hover:bg-accent duration-500 transition ease-in-out ${selectedAnswer?"pointer-events-none":"pointer-events-auto"} ${correctb?" input-success":""}`}onClick={() => {
                setSelectedAnswer(true)
                if(correctAnswer==question.cevapSecenekleri.b){
                  setCorrectb(true)
                  setScore1((s:any)=>s+1)
                }
              }}>
                <span><b>b-)</b> {question.cevapSecenekleri.b}</span>
              </div>
              <div id='cc' className={`input p-2 my-2 input-secondary cursor-pointer hover:bg-accent duration-500 transition ease-in-out ${selectedAnswer?"pointer-events-none":"pointer-events-auto" }  ${correctc?" input-success":""}`}onClick={() => {
                setSelectedAnswer(true)
                if(correctAnswer==question.cevapSecenekleri.c){
                  setScore1((s:any)=>s+1)
                  setCorrectc(true)
                }
              }}>
                <span><b>c-)</b> {question.cevapSecenekleri.c}</span>
              </div>
              <div id='dd' className={`input p-2 my-2  ${correctd?" input-success":""} input-secondary cursor-pointer hover:bg-accent duration-500 transition ease-in-out  ${correctd?" input-success":""} ${selectedAnswer?"pointer-events-none":"pointer-events-auto"}`} onClick={() => {
                setSelectedAnswer(true)
                if(correctAnswer==question.cevapSecenekleri.d){
                  setScore1((s:any)=>s+1)
                  setCorrectd(true)
                }
              }}>
                <span><b>d-)</b> {question.cevapSecenekleri.d}</span>
               </div>
            </>
            <div className="flex justify-end">
              <button className=" btn btn-accent " onClick={()=>{
                handleClick()
                clear()            
              }}>Next</button>

            </div>
          </div>


          

        </div>
       </div>
    </div>
  )
 
}


export default Card
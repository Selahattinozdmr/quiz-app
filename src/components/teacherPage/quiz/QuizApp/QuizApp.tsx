"use client"
import React, { useState } from 'react'
import QuizCard from "./QuizCard"
import Finish from "./Finish"
import Start from "./Start"
const QuizApp = ({sorular,editScore,id,updateIsCompleted}) => {
    const [start, setStart] = useState(false)
  const [finish, setFinish] = useState(false)
  const [index, setIndex] = useState(1)
  const [question, setQuestion] = useState(sorular[index-1])
  const [correctAnswer, setCorrectAnswer] = useState(question.correctAnswer)
  const [score, setScore] = useState(0)
  const startQuizz = () => {
    setStart(true)
    
  }
  const nextQuestion = () => {
    if(index<sorular.length){
      setIndex(i=>i+1)
      
      setQuestion(sorular[index])
      setCorrectAnswer(sorular[index].correctAnswer)
      console.log(question)
    }

    if(index===sorular.length){
      setFinish(true)
      setIndex(1)
    }
    
  }
  const finishQuizz = () => {
    setFinish(false)
    setStart(false)
    console.log(index)  
    setQuestion(sorular[index-1])
    setCorrectAnswer(sorular[index-1].correctAnswer)
  }
  const restartQuizz = () => {
    setStart(true)
    setFinish(false)
    setQuestion(sorular[index-1])
    setCorrectAnswer(sorular[index-1].correctAnswer)
    setScore(0)
  }
  
  return (
    <div className=" ">
      
      <div className="flex justify-center h-screen">
        <div className=' w-full h-full flex items-center justify-center'>
          <Start updateIsCompleted={updateIsCompleted} id={id} onclick={startQuizz} start={start}/>
          <Finish id={id} finish={finish} editScore={editScore} score={score} countQuestion={sorular.length} finishQuizz={finishQuizz} restartQuizz={restartQuizz}/>
        </div>
        <QuizCard  start={start} question={question} index={index} handleClick={nextQuestion} finish={finish} correctAnswer={correctAnswer} setScore1={setScore}/>
        
        
      </div>
    </div>
  )
}

export default QuizApp
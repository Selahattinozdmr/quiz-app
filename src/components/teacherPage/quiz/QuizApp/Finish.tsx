"use client"
import { FaCrown } from "react-icons/fa";
const Finish = ({id,finish,score,countQuestion,finishQuizz,restartQuizz,editScore}:{id:any,editScore:any,restartQuizz:any,finishQuizz:any,countQuestion:number,score:any,finish:boolean}) => {
  
  return (
    <div className={`absolute w-2/5 ${finish?"visible":" invisible" }`}>
        <div className="card card-bordered border-white items-center">
            <FaCrown className=" text-7xl" />
            <p className="my-5 text-3xl"><b>Score:</b>{score}/{countQuestion}</p>
            <form action={editScore} className="flex my-10">
                <input type="hidden" name="id" value={id} />
                <input type="hidden" name="score" value={score} />
                <button type="submit" className="btn btn-accent" >Finish Quiz</button>
                <a href="/ogrenci-sayfa" className="btn btn-accent" onClick={finishQuizz}>Go Back</a>

            </form>
        </div>
    </div>
  )
}

export default Finish
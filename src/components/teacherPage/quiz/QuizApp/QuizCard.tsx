import { useState } from "react";
import Image from "next/image";
const Card = ({
  start,
  question,
  handleClick,
  finish,
  correctAnswer,
  setScore1,
  index,
}: {
  index: number;
  setScore1: any;
  correctAnswer: string;
  start: boolean;
  question: any;
  handleClick: any;
  finish: boolean;
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [correcta, setCorrecta] = useState(false);
  const [correctb, setCorrectb] = useState(false);
  const [correctc, setCorrectc] = useState(false);
  const [correctd, setCorrectd] = useState(false);
  const clear = () => {
    setSelectedAnswer(false);
    setCorrecta(false);
    setCorrectb(false);
    setCorrectc(false);
    setCorrectd(false);
  };

  return (
    <div
      className={`absolute w-full flex justify-center ${
        !finish && start
          ? "visible pointer-events-auto"
          : " invisible pointer-events-none"
      }`}
    >
      <div className="card rounded-lg bg-base-100 border border-base-200 shadow-xl w-2/4 p-4 ">
        <div key={question.id} className="">
          <p className=" text-left">{question.content}</p>
          <div className=" flex justify-center">
            {question.file1 && (
              <Image
                src={"/" + question.file1}
                alt=""
                className="w-2/3 h-[300px]  "
                width={1000}
                height={1000}
              />
            )}
          </div>
          <h1 className=" border-b-2 font-bold py-2">
            {index}- {question.question}
          </h1>

          <div>
            <div
              onClick={() => {
                setSelectedAnswer(true);
                if (correctAnswer == "A") {
                  setCorrecta(true);
                  setScore1((s: any) => s + 1);
                }
              }}
              className={`border border-base-300 shadow-xl p-3 rounded-lg my-3 hover:bg-accent duration-300  ${
                selectedAnswer ? "pointer-events-none" : "pointer-events-auto"
              } ${correcta && selectedAnswer ? " bg-green-300" : ""}`}
            >
              <p>
                <b>A:</b>
                {question.answerA}
              </p>
            </div>
            <div
              onClick={() => {
                setSelectedAnswer(true);
                if (correctAnswer == "B") {
                  setCorrectb(true);
                  setScore1((s: any) => s + 1);
                }
              }}
              className={`border border-base-300 shadow-xl p-3 rounded-lg my-3 hover:bg-accent duration-300  ${
                selectedAnswer ? "pointer-events-none" : "pointer-events-auto"
              } ${correctb && selectedAnswer ? " bg-green-300" : ""}`}
            >
              <p>
                <b>B:</b>
                {question.answerB}
              </p>
            </div>
            <div
              onClick={() => {
                setSelectedAnswer(true);
                if (correctAnswer == "C") {
                  setCorrectc(true);
                  setScore1((s: any) => s + 1);
                }
              }}
              className={`border border-base-300 shadow-xl p-3 rounded-lg my-3 hover:bg-accent duration-300  ${
                selectedAnswer ? "pointer-events-none" : "pointer-events-auto"
              } ${correctc && selectedAnswer ? " bg-green-300" : ""}`}
            >
              <p>
                <b>C:</b>
                {question.answerC}
              </p>
            </div>
            <div
              onClick={() => {
                setSelectedAnswer(true);
                if (correctAnswer == "D") {
                  setCorrectd(true);
                  setScore1((s: any) => s + 1);
                }
              }}
              className={`border border-base-300 shadow-xl p-3 rounded-lg my-3 hover:bg-accent duration-300  ${
                selectedAnswer ? "pointer-events-none" : "pointer-events-auto"
              } ${correctd && selectedAnswer ? " bg-green-300" : ""}`}
            >
              <p>
                <b>D:</b>
                {question.answerD}
              </p>
            </div>
            {selectedAnswer && (
              <div className="flex justify-end">
                <button
                  className=" btn btn-accent "
                  onClick={() => {
                    handleClick();
                    clear();
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

   
  );
};

export default Card;

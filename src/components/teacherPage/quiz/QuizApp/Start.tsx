<<<<<<< HEAD
const Start = ({
  onclick,
  start,
  updateIsCompleted,
  id,
}: {
  id: any;
  updateIsCompleted: any;
  onclick: any;
  start: boolean;
}) => {
  return (
    <div className="absolute ">
      <form action={updateIsCompleted}>
        <input type="hidden" name="id" value={id} />
        <button
          type="submit"
          onClick={onclick}
          className={`btn btn-accent ${
            start
              ? " opacity-0 pointer-events-none"
              : " opacity-95 pointer-events-auto"
          }`}
        >
          Start Quizz
        </button>
      </form>
    </div>
  );
};

export default Start;
=======

>>>>>>> cd9311499558b535bd306eb30f41b3c421107864

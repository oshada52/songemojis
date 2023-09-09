import { useEffect, useState } from "react";

import db from "./lib/db";
import fetchQuizes from "./lib/fetchQuizes";

import { Header } from "./components/header";
import { Question } from "./components/question";
import { Choices } from "./components/choices";
import { Result } from "./components/result";

function App() {
  const [questionsList, setQuestionsList] = useState();
  const [question, setQuestion] = useState();
  const [round, setRound] = useState(1);
  const [test, setTest] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    fetchQuizes().then((data) => {
      setQuestionsList(data);
      setQuestion(data[0]);
    });
  }, []);

  function nextQuestion() {
    setRound(round + 1);
    setQuestion(questionsList[round]);
  }

  return (
    <>
      <Header />
      <main className="flex flex-col gap-10 items-center justify-center mt-20 w-full">
        <span className="text-2xl text-accent">Quiz {round}</span>
        {question ? (
          <>
            <Question emojis={question.emojis} hint={question.hint} />
            <Choices
              first={question.first_choice}
              second={question.second_choice}
              third={question.third_choice}
              result={question.answer}
              action={nextQuestion}
            />
          </>
        ) : (
          <span className="loading loading-spinner loading-lg"></span>
        )}
      </main>
    </>
  );
}

export default App;

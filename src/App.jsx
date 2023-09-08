import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import { Header } from "./components/header";
import { Question } from "./components/question";
import { Answers } from "./components/answers";
import { Alerts } from "./components/alerts";

const supabase = createClient(
  import.meta.env.VITE_PROJECT_URL,
  import.meta.env.VITE_API_KEY
);

function App() {
  const [questionsList, setQuestionsList] = useState();
  const [question, setQuestion] = useState();
  const [round, setRound] = useState(0);

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    const { data } = await supabase
      .from("questions")
      .select("id, emojis, hint, first_choice, second_choice, third_choice");
    console.log(data);
    setQuestionsList(data);
    setQuestion(data[0]);
  }

  return (
    <>
      <Header />
      <main className="flex flex-col gap-10 items-center justify-center mt-20 w-full">
        <span className="text-2xl text-accent">Quiz 1</span>
        {question ? (
          <>
            <Question emojis={question.emojis} hint={question.hint} />
            <Answers
              first={question.first_choice}
              second={question.second_choice}
              third={question.third_choice}
            />
          </>
        ) : (
          <span className="loading loading-spinner loading-lg"></span>
        )}

        <button
          className="btn btn-wide"
          onClick={() => setQuestion(questionsList[1])}
        >
          Next Quiz
          <svg
            className="h-6 w-6 fill-current md:h-8 md:w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
          </svg>
        </button>
      </main>
    </>
  );
}

export default App;

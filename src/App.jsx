import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import { Header } from "./components/header";
import { Question } from "./components/question";
import { Choices } from "./components/choices";
import { Alerts } from "./components/alerts";
import { Result } from "./components/result";

const supabase = createClient(
  import.meta.env.VITE_PROJECT_URL,
  import.meta.env.VITE_API_KEY
);

function App() {
  const [questionsList, setQuestionsList] = useState();
  const [question, setQuestion] = useState();
  const [round, setRound] = useState(1);

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    const { data } = await supabase.from("questions").select();
    setQuestionsList(data);
    setQuestion(data[0]);
  }

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
        <Result />
      </main>
    </>
  );
}

export default App;

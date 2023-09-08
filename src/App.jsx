import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import { Header } from "./components/header";
import { Question } from "./components/question";
import { Answers } from "./components/answers";

const supabase = createClient(
  import.meta.env.VITE_PROJECT_URL,
  import.meta.env.VITE_API_KEY
);

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    const { data } = await supabase.from("questions").select();
    setQuestions(data);
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center mt-20">
        {/* <ul>
          {questions.map((question) => (
            <li key={question.id}>{question.emojis}</li>
          ))}
        </ul> */}

        <div className="flex flex-col items-center gap-10">
          <span className="text-2xl text-accent">Round 1</span>
          <Question />
          <Answers />
        </div>
      </main>
    </>
  );
}

export default App;

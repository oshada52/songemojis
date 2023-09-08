import { useEffect, useState } from "react";
import "./App.css";
import { createClient } from "@supabase/supabase-js";

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
    <main>
      <h1>Welcome to Songmoji</h1>

      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.emojis}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;

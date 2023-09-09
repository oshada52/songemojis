import { useState } from "react";

function formatString(str) {
  const matches = str.split('"');
  return matches;
}

export function Choices({ first, second, third, result, action }) {
  const [chance, setChance] = useState(true);

  const string1 = formatString(first);
  const string2 = formatString(second);
  const string3 = formatString(third);

  function checkAnswer(guess) {
    if (guess === result) {
      document.getElementById("my_modal_1").showModal();
      setChance(true);
    } else if (chance) {
      document.getElementById("my_modal_2").showModal();
      setChance(false);
    } else {
      document.getElementById("my_modal_3").showModal();
      setChance(true);
    }
  }

  return (
    <div className="flex gap-3 flex-col md:flex-row">
      <button
        className="btn btn-outline btn-primary"
        onClick={() => checkAnswer(1)}
      >
        {string1[1]} <br /> {string1[2]}
      </button>
      <button
        className="btn btn-outline btn-secondary"
        onClick={() => checkAnswer(2)}
      >
        {string2[1]} <br /> {string2[2]}
      </button>
      <button
        className="btn btn-outline btn-accent"
        onClick={() => checkAnswer(3)}
      >
        {string3[1]} <br /> {string3[2]}
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-success text-base-300 flex flex-col gap-5 items-center">
          <h3 className="font-bold text-2xl">Correct</h3>
          <picture>
            <source
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.gif"
              alt="🎉"
              width="60"
              height="60"
            />
          </picture>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" onClick={action}>
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
          </form>
        </div>
      </dialog>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-warning text-base-300 flex flex-col gap-5 items-center">
          <h3 className="font-bold text-lg">Try Again</h3>
          <picture>
            <source
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/203c_fe0f/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/203c_fe0f/512.gif"
              alt="‼"
              width="60"
              height="60"
            />
          </picture>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-error text-base-300 flex flex-col gap-5 items-center">
          <span className="font-bold text-2xl">Quize Faild</span>
          <picture>
            <source
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/274c/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/274c/512.gif"
              alt="❌"
              width="32"
              height="32"
            />
          </picture>
          <form method="dialog">
            <button className="btn" onClick={action}>
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
          </form>
        </div>
      </dialog>
    </div>
  );
}

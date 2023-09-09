import { Choices } from "./choices";

export function Question({ emojis, hint }) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body text-center flex flex-col items-center">
          <h2 className="card-title text-4xl">{emojis}</h2>
          <div className="dropdown mt-5">
            <label tabIndex={0} className="btn m-1">
              Hint
            </label>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] card card-compact w-64 shadow bg-warning text-primary-content"
            >
              <div className="card-body">
                <p>{hint}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

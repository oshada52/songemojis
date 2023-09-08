const data = {
  emojis: "🧢🕺🚶‍♀️🌙🚪",
  hint: "tells the tale of a young girl who claims to be the mother of Jackson's alleged son.",
};

export function Question() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <div className="card-body text-center flex flex-col items-center">
        <h2 className="card-title text-4xl">{data.emojis}</h2>
        <div className="dropdown mt-5">
          <label tabIndex={0} className="btn m-1">
            Hint
          </label>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] card card-compact w-64 shadow bg-warning text-primary-content"
          >
            <div className="card-body">
              <p>you can use any element as a dropdown.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

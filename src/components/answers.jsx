const regexp = /".*?"/gsu;

function formatString(str) {
  const matches = str.split('"');
  return matches;
}

export function Answers({ first, second, third }) {
  const string1 = formatString(first);
  const string2 = formatString(second);
  const string3 = formatString(third);

  return (
    <div className="flex gap-3 flex-col md:flex-row">
      <button className="btn btn-outline btn-primary">
        {string1[1]} <br /> {string1[2]}
      </button>
      <button className="btn btn-outline btn-secondary">
        {string2[1]} <br /> {string2[2]}
      </button>
      <button className="btn btn-outline btn-accent">
        {string3[1]} <br /> {string3[2]}
      </button>
    </div>
  );
}

import db from "./db";

async function fetchQuizes() {
  const { data } = await db.from("questions").select();
  const sortedData = data.sort(function (a, b) {
    return a.id - b.id || a.name.localeCompare(b.name);
  });
  return sortedData;
}

export default fetchQuizes
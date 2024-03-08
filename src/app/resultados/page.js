import db from "../config/db";

export async function GET() {}

async function getData() {
  const results = await new Promise((resolve, reject) => {
    db.query(`SELECT * from OscarPredicciones;`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
  const res = Response.json(results);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Resultados() {
  const users = await getData();
  const masterUser = users.find(
    (user) => user?.NombreParticipante === "Master"
  );
  const usersWithCount = users.map((user) => {
    user.count = 0;
    for (const [key, value] of Object.entries(masterUser)) {
      if (masterUser[key] === user[key]) {
        user.count += 1;
      }
    }
    return user;
  });

  return (
    <main className="">
      {usersWithCount
        .filter((user) => user?.NombreParticipante != "Master")
        .map((user) => {
          return (
            <div
              key={user.NombreParticipante}
              className="flex items-center justify-center m-5"
            >
              <span>{user.NombreParticipante}</span>
              <span className="m-4">{user.count}</span>
            </div>
          );
        })}
    </main>
  );
}

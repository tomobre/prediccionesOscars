import db from "../config/db";

async function getData() {
  const results = await new Promise((resolve, reject) => {
    db.query(
      `SELECT SQL_NO_CACHE * from OscarPredicciones;`,
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
  const res = Response.json(results);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Resultados() {
  let users = await getData();
  setTimeout(async () => {
    users = await getData();
    console.log(users);
  }, 10000);

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
              style={{ margin: "10px" }}
              //className="flex items-center justify-center m-5"
            >
              <span style={{ margin: "10px" }}>{user.NombreParticipante}</span>
              <span className="m-4">{user.count}</span>
            </div>
          );
        })}
    </main>
  );
}

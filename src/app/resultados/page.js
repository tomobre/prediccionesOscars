async function getData() {
  const res = await fetch(process.env.URL + "/api/results", {
    next: { revalidate: 60 },
  });

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

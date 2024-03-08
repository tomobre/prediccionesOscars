import db from "../../config/db";

export async function GET() {
  const results = await new Promise((resolve, reject) => {
    db.query(`SELECT * from OscarPredicciones;`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
  return Response.json(results);
}

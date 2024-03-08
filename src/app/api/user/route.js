import db from "../../config/db";

export async function POST(request) {
  const userData = await request.json();
  const {
    pelicula,
    direccion,
    guionAdap,
    guionOri,
    montaje,
    sonido,
    internacional,
    actor,
    actriz,
    actorRep,
    actrizRep,
    foto,
    vestuario,
    efectos,
    disProd,
    animacion,
    docu,
    cortoAnim,
    cortoDoc,
    corto,
    bandaSonora,
    cancion,
    maqYPel,
  } = userData.guesses;

  const results = await new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO OscarPredicciones (NombreParticipante,pelicula,direccion,guionAdap, guionOri, montaje,sonido, internacional, actor,actriz,actorRep,actrizRep,foto,vestuario,efectos,disProd,animacion,docu,cortoAnim,cortoDoc,corto,bandaSonora,cancion,maqYPel) VALUES ('${userData.username}','${pelicula}','${direccion}','${guionAdap}', '${guionOri}', '${montaje}','${sonido}','${internacional}', '${actor}','${actriz}','${actorRep}','${actrizRep}','${foto}','${vestuario}','${efectos}','${disProd}','${animacion}','${docu}','${cortoAnim}','${cortoDoc}','${corto}','${bandaSonora}','${cancion}','${maqYPel}');`,
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
  return Response.json({ results, err });
}

"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const form = useRef();
  const [username, setUsername] = useState("");
  const [guesses, setGuesses] = useState({
    pelicula: "",
    direccion: "",
    guionAdap: "",
    guionOri: "",
    montaje: "",
    sonido: "",
    internacional: "",
    actor: "",
    actriz: "",
    actorRep: "",
    actrizRep: "",
    foto: "",
    vestuario: "",
    efectos: "",
    disProd: "",
    animacion: "",
    docu: "",
    cortoAnim: "",
    cortoDoc: "",
    corto: "",
    bandaSonora: "",
    cancion: "",
    maqYPel: "",
  });

  const onSend = async (e) => {
    e.preventDefault();
    let response;
    try {
      response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ guesses, username }),
      });

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          () => {
            // setSuccess(true);
            // form.current.reset();
          },
          () => {
            // setError(true);
          }
        );
      window.alert("listo!");
    } catch (err) {
      console.log(err);
    }

    console.log(await response.json());
    console.log("send");
  };

  const onChangeCheckBox = (target) => {
    console.log(target.name, target.value);
    setGuesses({ ...guesses, [target.name]: target.value });
    return;
  };

  const categories = [
    {
      name: "pelicula",
      label: "mejor pelicula",
      nominees: [
        { label: "american fiction", value: 1 },
        { label: "anatomia de una caida", value: 2 },
        { label: "barbie", value: 3 },
        { label: "los que se quedan", value: 4 },
        { label: "los asesinos de la luna", value: 5 },
        { label: "maestro", value: 6 },
        { label: "oppenheimer", value: 7 },
        { label: "past lives", value: 8 },
        { label: "pobres criaturas", value: 9 },
        { label: "la zona de interes", value: 10 },
      ],
    },
    {
      name: "direccion",
      label: "mejor director",
      nominees: [
        { label: "JUSTINE TRIET / Anatomía de una caída", value: 1 },
        { label: "MARTIN SCORSESE/ Los asesinos de la luna", value: 2 },
        { label: "CHRISTOPHER NOLAN / Oppenheimer", value: 3 },
        { label: "YORGOS LANTHIMOS / Pobres criaturas", value: 4 },
        { label: "JONATHAN GLAZER / La zona de interés", value: 5 },
      ],
    },
    {
      name: "guionAdap",
      label: "mejor guion adaptado",
      nominees: [
        { label: "AMERICAN FICTION", value: 1 },
        { label: "BARBIE", value: 2 },
        { label: "OPPENHEIMER", value: 3 },
        { label: "POBRES CRIATURAS", value: 4 },
        { label: "LA ZONA DE INTERÉS", value: 5 },
      ],
    },
    {
      name: "guionOri",
      label: "mejor guion original",
      nominees: [
        { label: "ANATOMÍA DE UNA CAIDA", value: 1 },
        { label: "LOS QUE SE QUEDAN", value: 2 },
        { label: "MAESTRO", value: 3 },
        { label: "SECRETOS DE UN ESCÁNDALO", value: 4 },
        { label: "PAST LIVES", value: 5 },
      ],
    },
    {
      name: "montaje",
      label: "mejor montaje",
      nominees: [
        { label: "ANATOMÍA DE UNA CAÍDA", value: 1 },
        { label: "LOS QUE SE QUEDAN", value: 2 },
        { label: "LOS ASESINOS DE LA LUNA", value: 3 },
        { label: "OPPENHEIMER", value: 4 },
        { label: "POBRES CRIATURAS", value: 5 },
      ],
    },
    {
      name: "sonido",
      label: "mejor sonido",
      nominees: [
        { label: "EL CREADOR", value: 1 },
        { label: "MAESTRO", value: 2 },
        { label: "MISIÓN IMPOSIBLE: SENTENCIA MORTAL", value: 3 },
        { label: "OPPENHEIMER", value: 4 },
        { label: "LA ZONA DE INTERÉS", value: 5 },
      ],
    },
    {
      name: "internacional",
      label: "mejor pel extranjera",
      nominees: [
        { label: "IO CAPITANO / Italia", value: 1 },
        { label: "PERFECT DAYS / Japón", value: 2 },
        { label: "LA SOCIEDAD DE LA NIEVE / España", value: 3 },
        { label: "THE TEACHERS’ LOUNGE / Alemania", value: 4 },
        { label: "LA ZONA DE INTERÉS / Reino Unido", value: 5 },
      ],
    },
    {
      name: "actor",
      label: "mejor actor",
      nominees: [
        { label: "BRADLEY COOPER / Maestro", value: 1 },
        { label: "COLMAN DOMINGO / Rustin", value: 2 },
        { label: "PAUL GIAMATTI / Los que se quedan", value: 3 },
        { label: "CILLIAN MURPHY / Oppenheimer", value: 4 },
        { label: "JEFFREY WRIGHT / American fiction", value: 5 },
      ],
    },
    {
      name: "actriz",
      label: "mejor actriz",
      nominees: [
        { label: "ANNETTE BENING / Nyad", value: 1 },
        { label: "LILY GLADSTONE / Los asesinos de la luna", value: 2 },
        { label: "SANDRA HÜLLER / Anatomía de una caída", value: 3 },
        { label: "CAREY MULLIGAN / Maestro", value: 4 },
        { label: "EMMA STONE / Pobres criaturas", value: 5 },
      ],
    },
    {
      name: "actorRep",
      label: "mejor actor reparto",
      nominees: [
        { label: "STERLING K. BROWN / American Fiction", value: 1 },
        { label: "ROBERT DE NIRO / Los asesinos de la luna", value: 2 },
        { label: "ROBERT DOWNEY JR / Oppenheimer", value: 3 },
        { label: "RYAN GOSLING / Barbie", value: 4 },
        { label: "MARK RUFFALO / Pobres criaturas", value: 5 },
      ],
    },
    {
      name: "actrizRep",
      label: "mejor actriz de reparto",
      nominees: [
        { label: "EMILY BLUNT / Oppenheimer", value: 1 },
        { label: "DANIELLE BROOKS / El color púrpura", value: 2 },
        { label: "AMERICA FERRERA / Barbie", value: 3 },
        { label: "JODI FOSTER / Nyad", value: 4 },
        { label: "DA’VINE JOY RANDOLPHN / Los que se quedan", value: 5 },
      ],
    },
    {
      name: "foto",
      label: "mejor foto",
      nominees: [
        { label: "EL CONDE", value: 1 },
        { label: "LOS ASESINOS DE LA LUNA", value: 2 },
        { label: "MAESTRO", value: 3 },
        { label: "OPPENHEIMER", value: 4 },
        { label: "POBRES CRIATURAS", value: 5 },
      ],
    },
    {
      name: "vestuario",
      label: "mejor vestuario",
      nominees: [
        { label: "BARBIE", value: 1 },
        { label: "LOS ASESINOS DE LA LUNA", value: 2 },
        { label: "NAPOLEÓN", value: 3 },
        { label: "OPPENHEIMER", value: 4 },
        { label: "POBRES CRIATURAS", value: 5 },
      ],
    },
    {
      name: "efectos",
      label: "mejor efectos",
      nominees: [
        { label: "EL CREADOR", value: 1 },
        { label: "GODZILLA MINUS ONE", value: 2 },
        { label: "GUARDIANES DE LA GALAXIA VOL.3", value: 3 },
        { label: "MISIÓN IMPOSIBLE: SENTENCIA MORTAL 1", value: 4 },
        { label: "NAPOLEÓN", value: 5 },
      ],
    },
    {
      name: "disProd",
      label: "mejor diseno produccion",
      nominees: [
        { label: "BARBIE", value: 1 },
        { label: "LOS ASESINOS DE LA LUNA", value: 2 },
        { label: "NAPOLEON", value: 3 },
        { label: "OPPENHEIMER", value: 4 },
        { label: "POBRES CRIATURAS", value: 5 },
      ],
    },
    {
      name: "animacion",
      label: "mejor animacion",
      nominees: [
        { label: "EL NIÑO Y LA GARZA", value: 1 },
        { label: "ELEMENTAL", value: 2 },
        { label: "NIMONA", value: 3 },
        { label: "ROBOT DREAMS", value: 4 },
        { label: "SPIDERMAN: CRUZANDO EL MULTIVERSO", value: 5 },
      ],
    },
    {
      name: "docu",
      label: "mejor documental",
      nominees: [
        { label: "BOBI WINE: THE PEOPLE’S PRESIDENT", value: 1 },
        { label: "THE ETERNAL MEMORY", value: 2 },
        { label: "FOUR DAUGHTERS", value: 3 },
        { label: "TO KILL A TIGER", value: 4 },
        { label: "20 DAYS IN MARIUPOL", value: 5 },
      ],
    },
    {
      name: "cortoAnim",
      label: "mejor corto animacion",
      nominees: [
        { label: "LETTER TO A PIG", value: 1 },
        { label: "NINETY-FIVE SENSES", value: 2 },
        { label: "OUR UNIFORM", value: 3 },
        { label: "PACHYDERME", value: 4 },
        {
          label: "WAR IS OVER! INSPIRED BY THE MUSIC OF JOHN & YOKO",
          value: 5,
        },
      ],
    },
    {
      name: "cortoDoc",
      label: "mejor corto documental",
      nominees: [
        { label: "THE ABCs OF BOOK BANNING", value: 1 },
        { label: "THE BARBER OF LITTLE ROCK", value: 2 },
        { label: "ISLAND IN BETWEEN", value: 3 },
        { label: "THE LAST REPAIR SHOP", value: 4 },
        { label: "NǍI NAI & WÀI PÓ", value: 5 },
      ],
    },
    {
      name: "corto",
      label: "mejor corto",
      nominees: [
        { label: "THE AFTER", value: 1 },
        { label: "INVINCIBLE", value: 2 },
        { label: "KNIGH OF FORTUNE", value: 3 },
        { label: "RED, WHITE AND BLUE", value: 4 },
        { label: "LA MARAVILLOSA HISTORIA DE HENRY SUGAR", value: 5 },
      ],
    },
    {
      name: "bandaSonora",
      label: "mejor banda sonora",
      nominees: [
        { label: "AMERICAN FICTION", value: 1 },
        { label: "INDIANA JONES Y EL DIAL DEL DESTINO", value: 2 },
        { label: "LOS ASESINOS DE LA LUNA", value: 3 },
        { label: "OPPENHEIMER", value: 4 },
        { label: "POBRES CRIATURAS", value: 5 },
      ],
    },
    {
      name: "cancion",
      label: "mejor cancion",
      nominees: [
        { label: "THE FIRE INSIDE / Flamin’ hot", value: 1 },
        { label: "I’M JUST KEN / Barbie", value: 2 },
        { label: "IT NEVER WENT AWAY / American Symphony", value: 3 },
        { label: "WAHZHAZHE / Los asesinos de la luna", value: 4 },
        { label: "WHAT WAS I MADE FOR? / Barbie", value: 5 },
      ],
    },
    {
      name: "maqYPel",
      label: "mejor maquillake y peluqueria",
      nominees: [
        { label: "GOLDA", value: 1 },
        { label: "MAESTRO", value: 2 },
        { label: "OPPENHEIMER", value: 3 },
        { label: "POBRES CRIATURAS", value: 4 },
        { label: "LA SOCIEDAD DE LA NIEVE", value: 5 },
      ],
    },
  ];

  return (
    <main className="">
      <form onSubmit={async (e) => onSend(e)} ref={form}>
        <div style={{ marginLeft: "3rem", marginTop: "1rem" }} className="m-3">
          <span>nombre:</span>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="border border-black"
            name="name"
            type="text"
          />
        </div>
        <div style={{ marginLeft: "3rem", marginTop: "1rem" }} className="m-3">
          <span>email:</span>
          <input className="border border-black" name="email" type="text" />
        </div>
        {categories.map((category, index) => {
          return (
            <div key={index} style={{ margin: "2rem" }}>
              <label
                style={{ margin: "5px", fontWeight: "bold" }}
                className="font-bold"
              >
                {category.label}
              </label>
              {category.nominees.map((nominee) => {
                return (
                  <div style={{ margin: "10px" }} key={nominee}>
                    <span>{nominee.label}</span>{" "}
                    <input
                      type="radio"
                      value={nominee.label}
                      name={category.name}
                      onChange={(e) => onChangeCheckBox(e.target)}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}

        <div className="flex items-center justify-center">
          <button
            style={{ margin: "20px", marginLeft: "3rem" }}
            className="border-b bg-gray-200 text-center p-2 rounded-xl m-4"
          >
            ENVIAR
          </button>
        </div>
      </form>
    </main>
  );
}

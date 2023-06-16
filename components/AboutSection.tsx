import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "Data Analysis" },
  { skill: "SQL" },
  { skill: "C#" },
  { skill: "C" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Javasript" },
  { skill: "Typescript" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-6 pb-6 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Über mich
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Das bin ich!
            </h1>
            <p>
              Ich heiße Axel und bin ein {" "}
              <span className="font-bold">{"sehr motivierter"}</span>,
              <span className="font-bold">{" begeisterungsfähiger"}</span> und
              <span className="font-bold">{" wissbegieriger"}</span> Software Entwickler aus München.
            </p>
            <br />
            <p>
              Ich habe eine Ausbildung als IT-Systemelektroniker absolviert, bei der ich zum ersten Mal tiefer mit Programmiersprachen in Berührung kam und sofort begeistert war.
              Seitdem habe ich in meiner Freizeit kontinuierlich neue Sprachen und Techniken erkundet und versucht, sie in meinen Alltag zu integrieren.
            </p>
            <br />
            <p>
              Ich glaube, man sollte{" "}
              <span className="font-bold text-teal-500">
                nie aufhören zu lernen
              </span>{", "}
              und genau danach strebe ich. Ich hege eine Leidenschaft für Technologie und möchte stets besser werden.
              Es bereitet mir Freude, zu sehen, wohin mich mein Weg führt, und ich bin immer offen für spannende Chancen. {/*🙂*/}
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Meine Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

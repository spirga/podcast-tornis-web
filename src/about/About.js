import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <img src="../images/logo.png" className="about-image" />
      <div className="about-content">
        <p>
          Podkāsts <span className="bold">"Tornis" </span>
          ir Talsu Valsts ģimnāzijas skolēnu izstrādāts projekts, kas realizēts
          laika posmā no biedrības "Delna" rīkotā projektu konkursa 2020. gada
          nogalē līdz pat 2021. gada maijam.
          <br></br>
          <br></br>
          Projekta <span className="bold">mērķis</span> ir veicināt skolēnu
          radošumu, pilnveidot mediju un komunikācijas prasmes, kā arī dot
          iespēju gūt pieredzi raidījumu ierakstīšanā un apstrādē.
          <br></br>
          <br></br>
          Podkāstā apspriežamās tēmas nav noteiktas, tādēļ{" "}
          <span className="bold">saturs ir ļoti daudzveidīgs</span> un ļauj
          ikvienam interesentam realizēt savas idejas. Projektā paralēli
          darbojas divas saturu izstrādājošas grupas - interesenti, kas veido
          jebkādu saturu rubrikai "Bazars", un pastāvīgie podkāsta komandas
          dalībnieki, kas atbild par citām rubrikām.
        </p>
      </div>
    </div>
  );
};

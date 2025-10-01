"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../styles/about.module.css";

const data = {
    "Points forts": [
        { title: "Autonome", desc: "J’ai pris de l’avance sur la formation avant même de la commencer, ce qui me permet aujourd’hui d’être autonome dans les tâches qu’on me confie." },
        { title: "Motivé", desc: "Je suis très impliqué dans ce que je fais et je m'investis à fond dans chaque projet que j’entreprends." },
        { title: "Créatif", desc: "Ma créativité est l’une de mes grandes forces, et c’est en grande partie ce qui m’a poussé à choisir cette voie." },
        { title: "Minutieux", desc: "Je porte une grande attention aux détails et je n’aime pas bâcler un travail. J’aime que les choses soient bien faites." },
    ],
    "Mes loisirs": [
        { title: "Fitness", desc: "Pratique régulière de musculation et d’activités physiques pour mon bien-être et la discipline personnelle." },
        { title: "Programmation ", desc: "Passionné par la programmation, j’aime développer des projets personnels pour apprendre de nouvelles technologies." },
        { title: "Jeux vidéo", desc: "Les jeux vidéo me permettent de stimuler ma réflexion, ma créativité et mon esprit stratégique." },
    ],
};

export default function About() {
    const [selected, setSelected] = useState<keyof typeof data>("Points forts");
    const [activeIndex, setActiveIndex] = useState(0);
    const tabs = ["Points forts", "Mes loisirs"];

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.container_image}>
                    <Image
                        className={styles.photo}
                        src="/images/Photo.jpg"
                        alt="Photo de Maxime Séchaud"
                        fill
                    />
                </div>

                <div className={styles.container_info}>
                    <h2>À propos</h2>
                    <p>
                        Apprenti de deuxième année âgé de 21 ans. J’ai commencé mon apprentissage à l’Orif de Pomy. Avant cela, je me suis formé par moi-même, en autodidacte, en suivant des tutoriels sur le développement web, l’informatique et l’utilisation des outils de la suite Adobe, notamment pour la création d’identités visuelles. Aujourd’hui, je suis passionné par ce que je fais et je m’investis pleinement dans mon apprentissage. Je suis actuellement à la recherche d’un stage pour mettre en pratique mes compétences et développer mon expérience professionnelle.
                    </p>

                    <ul className={styles.list_competences}>
                        {tabs.map((tab, index) => (
                            <li
                                key={index}
                                className={activeIndex === index ? styles.active : ""}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setSelected(tab as keyof typeof data);
                                }}
                                >
                                {tab}
                            </li>
                        ))}
                    </ul>

                    <ul className={styles.list_details}>
                        {data[selected].map((detail, index) => (
                            <li key={index}>
                                <span>{detail.title}</span> - {detail.desc}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

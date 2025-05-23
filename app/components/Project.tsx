"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Item from "./Item";
import Image from "next/image";
import styles from "../styles/project.module.css";

type Project = {
    title: string;
    type: string;
    src: string;
    description: string;
    tools: string[];
    link?: string;
};

export default function Experience() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isVisible, setIsVisible] = useState(false);
  
    const handleOpen = (project: Project) => {
        setSelectedProject(project);
        setIsVisible(true);
    };
  
    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => setSelectedProject(null), 600);
    };

    const projects = [
        {
            title: "EEF",
            type: "Développement Web",
            src: "/images/Project/EEF.png",
            description: "L’Étagère en Folie est le tout premier projet et la première application web que j’ai réalisés, avant même de commencer ma formation de médiamaticien. Cette application avait pour but de répertorier des livres afin de permettre aux lecteurs de consulter facilement les ouvrages disponibles.",
            tools: ["HTML", "CSS", "JavaScript", "PHP"],
            link: "https://etagere-en-folie.ch",
        },
        {
            title: "Beri-Montage",
            type: "Développement Web",
            src: "/images/Project/Beri.svg",
            description: "J’ai été contacté par la société Beri Montage Sàrl pour concevoir leur site web. Leur demande portait sur la création d’un site vitrine mettant en valeur leurs prestations, leur savoir-faire ainsi que les services qu’ils proposent.",
            tools: ["React", "CSS", "PHP"],
            link: "https://beri-montage.ch",
        },
        {
            title: "The Fasty",
            type: "Développement Web",
            src: "/images/Project/TheFasty.svg",
            description: "TheFasty est un fast-food fictif créé dans le cadre de mes cours interentreprises. Ce projet, réalisé en peu de temps, m’a permis de mettre en pratique mes compétences en développement web. J’ai obtenu la note de 6/6 pour ce travail.",
            tools: ["React", "CSS", "Adobe Illustrator"],
            link: "https://m.sechaud.topbee.ch",
        },
        {
            title: "InnovateWeb",
            type: "Projet 360°",
            src: "/images/Project/InnovateWeb.svg",
            description: "InnovateWeb est un projet particulièrement important pour moi, car il s’agit de ma propre société, que j’ai créée en parallèle de ma formation de médiamaticien. Ce projet m’a permis de travailler sur l’ensemble des aspects de l’entreprise, depuis la création son l’identité visuelle jusqu’au développement du site vitrine. Je travaille actuellement sur un CMS personnalisé qui permet à mes clients de modifier le contenu de leur site en toute autonomie.",
            tools: ["Next.js", "CSS", "Adobe Illustrator"],
            link: "https://innovateweb.ch",
        },
        {
            title: "Médiamatique",
            type: "Projet 360°",
            src: "/images/Project/Mediamatique.svg",
            description: "Sur ce projet, j’ai conçu l’ensemble de l’identité visuelle de la section Médiamatique de l’ORIF, où je poursuis actuellement mon apprentissage. Cela comprend la création du logo ainsi que de la charte graphique. En parallèle, je développe actuellement le site vitrine dédié à cette section.",
            tools: ["Next.js", "CSS", "Adobe Illustrator"],
        },
    ];    

    return (
        <section id="project" className={styles.project}>
            <div className={styles.container}>
                <div className={styles.container_title}>
                    <h2>Quelques réalisations</h2>
                    <p>Voici une petite liste de quelques-uns des projets les plus<br />  concrets que j’ai réalisés depuis le début de ma<br />  formation en ordre croissant.</p> 
                </div>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className={styles.swiper}
                    >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className={styles.slide}>
                        <div className={styles.box}>
                            <Image
                                src={`${project.src}`}
                                alt={`${project.title} image`}
                                width={200}
                                height={100}
                                className={styles.image}
                            />

                            <h4>{project.type}</h4>
                            <h3>{project.title}</h3>
                            <button onClick={() => handleOpen(project)}>Découvrir</button>
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <AnimatePresence mode="wait">
                    {selectedProject && isVisible && (
                        <div className={styles.popupOverlay}>
                            <div className={styles.popupContent}>
                            <Item
                                title={selectedProject.title}
                                type={selectedProject.type}
                                image={selectedProject.src}
                                description={selectedProject.description}
                                tools={selectedProject.tools}
                                link={selectedProject.link}
                                onClose={handleClose}
                            />
                            </div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

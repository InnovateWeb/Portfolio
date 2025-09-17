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
    created: string;
    tools: string[];
    link?: string;
};

export default function Experience() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
    const handleOpen = (project: Project) => {
        setSelectedProject(project);
    };

    const handleClose = () => {
        setSelectedProject(null);
    };

    const projects = [
        {
            title: "Étagère en folie",
            type: "Développement Web",
            src: "/images/Project/EEF.png",
            description: "L’Étagère en Folie est le tout premier projet et la première application web que j’ai réalisés, avant même de commencer ma formation de médiamaticien. Cette application avait pour but de répertorier des livres afin de permettre aux lecteurs de consulter facilement les ouvrages disponibles.",
            created: "10 Mars 2024",
            tools: ["HTML", "CSS", "JavaScript", "PHP"],
            link: "www.etagere-en-folie.ch",
        },
        {
            title: "Beri-Montage",
            type: "Développement Web",
            src: "/images/Project/Beri.svg",
            description: "J’ai été contacté par la société Beri Montage Sàrl pour concevoir leur site web. Leur demande portait sur la création d’un site vitrine mettant en valeur leurs prestations, leur savoir-faire ainsi que les services qu’ils proposent.",
            created: "15 Décembre 2024",
            tools: ["React", "CSS", "PHP"],
            link: "www.beri-montage.ch",
        },
        {
            title: "The Fasty",
            type: "Développement Web",
            src: "/images/Project/TheFasty.svg",
            description: "TheFasty est un fast-food fictif créé dans le cadre de mes cours interentreprises. Ce projet, réalisé en peu de temps, m’a permis de mettre en pratique mes compétences en développement web. J’ai obtenu la note de 6/6 pour ce travail.",
            created: "15 Janvier 2025",
            tools: ["React", "CSS", "Adobe Illustrator"],
            link: "www.m.sechaud.topbee.ch",
        },
        {
            title: "InnovateWeb",
            type: "Projet 360°",
            src: "/images/Project/InnovateWeb.svg",
            description: "InnovateWeb est un projet particulièrement important pour moi, car il s’agit de ma propre société, que j’ai créée en parallèle de ma formation de médiamaticien. Ce projet m’a permis de travailler sur l’ensemble des aspects de l’entreprise, depuis la création son l’identité visuelle jusqu’au développement du site vitrine. Je travaille actuellement sur un CMS personnalisé qui permet à mes clients de modifier le contenu de leur site en toute autonomie.",
            created: "15 Janvier 2025",
            tools: ["Next.js", "CSS", "Adobe Illustrator"],
            link: "www.innovateweb.ch",
        },
        {
            title: "Médiamatique",
            type: "Projet 360°",
            src: "/images/Project/Mediamatique.svg",
            description: "Sur ce projet, j’ai conçu l’ensemble de l’identité visuelle de la section Médiamatique de l’ORIF, où je poursuis actuellement mon apprentissage. Cela comprend la création du logo ainsi que de la charte graphique. En parallèle, je développe actuellement le site vitrine dédié à cette section.",
            created: "20 Mai 2025",
            tools: ["Next.js", "CSS", "Adobe Illustrator"],
        },
        {
            title: "Adrenaline",
            type: "Identité visuelle",
            src: "/images/Project/Adrenaline.svg",
            description: "Ce projet fictif a été réalisé dans le cadre de mes cours interentreprises. L’objectif était de créer un logo, une brochure, une affiche et un flyer. J’ai obtenu la note maximale de 5.5/6 pour ce travail.",
            created: "22 juin 2025",
            tools: ["Adobe Photoshop", "Adobe Illustrator"],
        },
        {
            title: "Parking",
            type: "Projet 360°",
            src: "/images/Project/Parking.svg",
            description: "L’application de parking, développée pour le site de l’ORIF de Chamard, a pour but de faciliter la réservation des places de parc visiteurs en offrant un agenda journalier, un historique complet pour un suivi clair, une gestion des utilisateurs par les responsables ainsi que la possibilité de créer des réservations périodiques ou ponctuelles.",
            created: "15 septembre 2025",
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
                    {selectedProject && (
                        <div className={styles.popupOverlay}>
                            <div className={styles.popupContent}>
                            <Item
                                title={selectedProject.title}
                                type={selectedProject.type}
                                image={selectedProject.src}
                                description={selectedProject.description}
                                created={selectedProject.created}
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

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
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nihil. Quos nisi adipisci dolorem aut sunt, repudiandae cupiditate voluptatibus ab voluptas quas? Asperiores libero, fugit nemo ex nisi excepturi in dolor. Incidunt nesciunt velit cupiditate et quas itaque quia porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nihil. Quos nisi adipisci dolorem aut sunt, repudiandae cupiditate voluptatibus ab voluptas quas? Asperiores libero, fugit nemo ex nisi excepturi in dolor. Incidunt nesciunt velit cupiditate et quas itaque quia porro!",
            tools: ["HTML", "CSS", "JavaScript", "PHP"],
            link: "https://etagere-en-folie.ch",
        },
        {
            title: "Beri-Montage",
            type: "Développement Web",
            src: "/images/Project/Beri.svg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nihil. Quos nisi adipisci dolorem aut sunt, repudiandae cupiditate voluptatibus ab voluptas quas? Asperiores libero, fugit nemo ex nisi excepturi in dolor. Incidunt nesciunt velit cupiditate et quas itaque quia porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nihil. Quos nisi adipisci dolorem aut sunt, repudiandae cupiditate voluptatibus ab voluptas quas? Asperiores libero, fugit nemo ex nisi excepturi in dolor. Incidunt nesciunt velit cupiditate et quas itaque quia porro!",
            tools: ["React", "CSS", "PHP"],
            link: "https://beri-montage.ch",
        },
        {
            title: "The Fasty",
            type: "Développement Web",
            src: "/images/Project/TheFasty.svg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nihil. Quos nisi adipisci dolorem aut sunt, repudiandae cupiditate voluptatibus ab voluptas quas? Asperiores libero, fugit nemo ex nisi excepturi in dolor. Incidunt nesciunt velit cupiditate et quas itaque quia porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nihil. Quos nisi adipisci dolorem aut sunt, repudiandae cupiditate voluptatibus ab voluptas quas? Asperiores libero, fugit nemo ex nisi excepturi in dolor. Incidunt nesciunt velit cupiditate et quas itaque quia porro!",
            tools: ["React", "CSS", "Adobe Illustrator"],
            link: "https://m.sechaud.topbee.ch",
        },
        {
            title: "InnovateWeb",
            type: "Projet 360°",
            src: "/images/Project/InnovateWeb.svg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nihil. Quos nisi adipisci dolorem aut sunt, repudiandae cupiditate voluptatibus ab voluptas quas? Asperiores libero, fugit nemo ex nisi excepturi in dolor. Incidunt nesciunt velit cupiditate et quas itaque quia porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nihil. Quos nisi adipisci dolorem aut sunt, repudiandae cupiditate voluptatibus ab voluptas quas? Asperiores libero, fugit nemo ex nisi excepturi in dolor. Incidunt nesciunt velit cupiditate et quas itaque quia porro!",
            tools: ["Next.js", "CSS", "Adobe Illustrator"],
            link: "https://innovateweb.ch",
        },
        {
            title: "Médiamatique",
            type: "Identité visuelle",
            src: "/images/Project/Mediamatique.svg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nihil. Quos nisi adipisci dolorem aut sunt, repudiandae cupiditate voluptatibus ab voluptas quas? Asperiores libero, fugit nemo ex nisi excepturi in dolor. Incidunt nesciunt velit cupiditate et quas itaque quia porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nihil. Quos nisi adipisci dolorem aut sunt, repudiandae cupiditate voluptatibus ab voluptas quas? Asperiores libero, fugit nemo ex nisi excepturi in dolor. Incidunt nesciunt velit cupiditate et quas itaque quia porro!",
            tools: ["Adobe Illustrator"],
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

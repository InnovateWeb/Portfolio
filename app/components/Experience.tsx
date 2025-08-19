"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/experience.module.css";

const experiences = [
    {
      title: "Stage en cuisine",
      subtitle: "Hôtel de Ville à Crissier",
      year: "Novembre 2017",
      description: "Découverte du monde de la haute gastronomie et des exigences d’une cuisine étoilée dans un établissement de renom."
    },
    {
      title: "Stage en cuisine",
      subtitle: "GastroVaud à Pully",
      year: "Janvier 2018",
      description: "Immersion dans une brigade de cuisine avec apprentissage des techniques de base et travail en conditions réelles."
    },
    {
      title: "Programme pré-professionnel",
      subtitle: "MDJ'ump à Lausanne",
      year: "Décembre 2021",
      description: "Initiation au travail du bois dans un atelier de menuiserie avec réalisation de projets simples et apprentissage des outils."
    },
    {
      title: "Stage linguistique",
      subtitle: "Angleterre",
      year: "Avril 2022",
      description: "Séjour d’un mois en immersion totale pour renforcer mes compétences en anglais à travers la vie quotidienne et des cours intensifs."
    },
    {
      title: "Stage en dessin technique",
      subtitle: "Atau à Lausanne",
      year: "Juin 2022",
      description: "Découverte du dessin assisté par ordinateur et lecture de plans techniques dans un environnement professionnel."
    },
    {
      title: "CFC 1re année en restauration",
      subtitle: "CHUV à Lausanne",
      year: "Août 2022",
      description: "Apprentissage des bases du service et de la restauration collective au sein d’un établissement hospitalier."
    },
    {
      title: "Stage en logistique",
      subtitle: "Caritas à Lausanne",
      year: "Avril 2023",
      description: "Participation à la gestion de stock, à la réception de dons et à l’organisation de la distribution des marchandises."
    },
    {
      title: "Réhabilitation au travail",
      subtitle: "Orif à Pomy",
      year: "Août 2023",
      description: "Programme d’accompagnement visant à faciliter le retour à l’emploi avec activités adaptées et encadrement personnalisé."
    },
    {
      title: "Stage en assurance",
      subtitle: "Fragniere Assureur-conseil à Cugy",
      year: "Avril 2024",
      description: "Observation du métier de courtier, participation à l’accueil client et compréhension des comparaisons d’offres d’assurance."
    },
    {
      title: "Début apprentissage CFC",
      subtitle: "Médiamaticien à l'Orif de Pomy",
      year: "Août 2024",
      description: "Entrée en formation médiamaticien avec apprentissage du design, du web, de la communication et des outils numériques."
    },
    {
      title: "Création de ma start-up",
      subtitle: "InnovateWeb",
      year: "Février 2025",
      description: "Lancement de mon activité indépendante dans le développement de sites web et la création visuelle, en parallèle de ma formation."
    },
];


export default function Experience() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerView, setItemsPerView] = useState(2);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const popupRefs = useRef<Array<HTMLDivElement | null>>([]);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const paragraphRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		const updateItemsPerView = () => {
		const isNarrow = window.innerWidth < 960;
		setItemsPerView(isNarrow ? 1 : 2);
		};
		updateItemsPerView();
		window.addEventListener("resize", updateItemsPerView);
		return () => window.removeEventListener("resize", updateItemsPerView);
	}, []);

	const totalPositions = Math.max(1, experiences.length - itemsPerView + 1);
	useEffect(() => {
		if (currentIndex > totalPositions - 1) {
		setCurrentIndex(totalPositions - 1);
		}
	}, [itemsPerView, totalPositions, currentIndex]);

	const visibleExperiences = experiences.slice(currentIndex, currentIndex + itemsPerView);

	const setPopupRef = (index: number) => (el: HTMLDivElement | null) => {
		popupRefs.current[index] = el;
	};

	const handleNext = () => {
		if (currentIndex + 1 < totalPositions) setCurrentIndex(currentIndex + 1);
	};

	const handlePrev = () => {
		if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
	};

	useEffect(() => {
		const ctx = gsap.context(() => {
		popupRefs.current.forEach((popup) => {
			if (popup) {
			gsap.fromTo(
				popup,
				{ y: -20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.1 }
			);
			}
		});
		}, wrapperRef);
		return () => ctx.revert();
	}, [currentIndex, itemsPerView]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const ctx = gsap.context(() => {
		if (titleRef.current) {
			gsap.fromTo(
			titleRef.current,
			{ y: 20, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1.5,
				ease: "power2.out",
				scrollTrigger: { trigger: titleRef.current, start: "top 80%", once: true },
			}
			);
		}
		if (paragraphRef.current) {
			gsap.fromTo(
			paragraphRef.current,
			{ y: 20, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1.5,
				delay: 0.5,
				ease: "power2.out",
				scrollTrigger: { trigger: paragraphRef.current, start: "top 80%", once: true },
			}
			);
		}
		}, wrapperRef);
		return () => ctx.revert();
	}, []);

	return (
		<section className={styles.experience}>
			
			<div className={styles.container_title}>
				<h3 ref={titleRef}>Une trajectoire construite par l’expérience</h3>
				<p ref={paragraphRef}>
				Depuis mon adolescence, j’ai eu l’occasion de faire plusieurs stages dans des domaines variés. J’ai exploré le travail manuel, la restauration, la logistique et même l’assurance. Ces expériences m’ont permis de mieux comprendre ce que j’aime faire. À la suite de problèmes de santé, je me suis tourné vers un métier plus polyvalent. Ce choix m’a rapproché de ma passion pour le digital, et la médiamatique est vite devenue une évidence.
				</p>
			</div>

			<div className={styles.container}>
				<div className={styles.controls}>
				<button onClick={handlePrev} disabled={currentIndex === 0}>
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				<span>
					{currentIndex + 1} / {totalPositions}
				</span>
				<button onClick={handleNext} disabled={currentIndex + 1 >= totalPositions}>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
				</div>

				<div className={styles.line}>
					<div className={styles.slider} ref={wrapperRef}>
						{visibleExperiences.map((exp, index) => (
						<div key={exp.year + exp.title} className={styles.wrapper}>
							<div className={styles.popup} ref={setPopupRef(index)}>
							<h4>{exp.title}</h4>
							<p className={styles.description}>{exp.description}</p>
							<p className={styles.subtitle}>{exp.subtitle}</p>
							</div>
							<div className={styles.date}>{exp.year}</div>
							<div className={styles.point}></div>
						</div>
						))}
					</div>
				</div>
			</div>
		</section>
  );
}

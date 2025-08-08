import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "../styles/skills.module.css";

gsap.registerPlugin(ScrollTrigger);

const competencesProgrammation = [
	{ label: "HTML & CSS", pourcentage: 100 },
	{ label: "JavaScript", pourcentage: 75 },
	{ label: "React", pourcentage: 80 },
	{ label: "Next.Js", pourcentage: 78 },
	{ label: "Git", pourcentage: 90 },
];

const competencesDesign = [
	{ label: "Adobe Photoshop", pourcentage: 76 },
	{ label: "Adobe Illustrator", pourcentage: 86 },
	{ label: "Adobe Lightroom", pourcentage: 84 },
	{ label: "Figma", pourcentage: 68 },
	{ label: "Suite Microsoft", pourcentage: 80 },
];

const Competences = () => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const bars = gsap.utils.toArray(".progress-bar-fill");
			const percents = gsap.utils.toArray(".progress-percent");

			bars.forEach((bar) => {
				const element = bar as HTMLElement;
				const percent = element.getAttribute("data-pourcentage");
				gsap.fromTo(
					element,
					{ width: "0%" },
					{
						width: percent + "%",
						duration: 4,
						ease: "power2.out",
						scrollTrigger: {
							trigger: element,
							start: "top 80%",
						},
					}
				);
			});

			percents.forEach((el) => {
				const element = el as HTMLElement;
				const endValue = parseInt(element.getAttribute("data-pourcentage") || "0");
				const obj = { val: 0 };
				gsap.to(obj, {
					val: endValue,
					duration: 4,
					ease: "power2.out",
					scrollTrigger: {
						trigger: element,
						start: "top 80%",
					},
					onUpdate: () => {
						element.innerText = Math.round(obj.val) + "%";
					},
				});
			});

		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section className={styles.skills} ref={sectionRef}>
			<div className={styles.container}>
				<div className={styles.container_title}>
					<h2>Expertise technique</h2>
					<p>
						Voici un aperçu des compétences que j’ai développées au fil de ma formation, de mes expériences et des projets réalisés.
					</p>
				</div>
				<div className={styles.container_skills}>
					<div className={styles.column}>
						<h3>Développement</h3>
						{competencesProgrammation.map((competence) => (
							<div className={styles.skill} key={competence.label}>
								<div className={styles.title}>
									<span className={styles.label}>{competence.label}</span>
									<span
										className={`${styles.percent} progress-percent`}
										data-pourcentage={competence.pourcentage}
									>
										0%
									</span>
								</div>
								<div className={styles.progress_bar}>
									<div
										className={`progress-bar-fill ${styles.fill}`}
										data-pourcentage={competence.pourcentage}
									></div>
								</div>
							</div>
						))}
					</div>
					<div className={styles.column}>
						<h3>Application</h3>
						{competencesDesign.map((competence) => (
							<div className={styles.skill} key={competence.label}>
								<div className={styles.title}>
									<span className={styles.label}>{competence.label}</span>
									<span
										className={`${styles.percent} progress-percent`}
										data-pourcentage={competence.pourcentage}
									>
										0%
									</span>
								</div>
								<div className={styles.progress_bar}>
									<div
										className={`progress-bar-fill ${styles.fill}`}
										data-pourcentage={competence.pourcentage}
									></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Competences;

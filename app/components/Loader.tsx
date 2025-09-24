"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles/loader.module.css";

type LoaderProps = {
  onComplete?: () => void;
};

export default function Loader({ onComplete }: LoaderProps) {
	const doneRef = useRef(false);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		return () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	const handleSecondDone = () => {
		if (doneRef.current) return;
		doneRef.current = true;

		timeoutRef.current = setTimeout(() => {
		onComplete?.();
		}, 800);
	};

	return (
		<div className={styles.loader}>
			<motion.svg
				className={`logo ${styles.logo}`}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 914.87 707.43"
				initial="hidden"
				animate="visible"
			>
				<motion.polygon
				fill="#3568aa"
				points="314.42 0 0 707.43 122.09 707.43 294.88 318.65 294.88 707.43 406.45 707.43 406.45 0 314.42 0"
				variants={{
					hidden: { opacity: 0 },
					visible: {
					opacity: 1,
					transition: { duration: 0.4 }
					}
				}}
				/>

				<motion.polygon
				fill="#3568aa"
				points="861.14 111.58 914.87 0 534.45 0 439.58 218.93 439.58 222.26 439.58 248.28 439.58 248.28 439.58 359.85 631.15 359.85 533.75 595.86 439.57 595.86 439.57 707.43 608.4 707.43 734.25 402.48 784.75 280.12 789.63 268.29 797.89 248.28 748.05 248.28 693.76 248.28 559.64 248.28 559.64 222.26 559.73 222.26 607.7 111.57 737.32 111.57 737.31 111.58 861.14 111.58"
				variants={{
					hidden: { opacity: 0 },
					visible: {
					opacity: 1,
					transition: { duration: 0.4, delay: 0.8 }
					}
				}}
				onAnimationComplete={handleSecondDone}
				/>
			</motion.svg>
		</div>
	);
}

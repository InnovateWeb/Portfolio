"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/item.module.css";

type ItemProps = {
    title: string;
    type: string;
    image: string;
    description: string;
    tools: string[];
    onClose: () => void;
    link?: string;
};

export default function Item({ title, type, image, description, tools, onClose, link }: ItemProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <motion.section
            className={styles.background}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.1,
            }}
        >
            <motion.div
                className={styles.wrapper}
                ref={wrapperRef}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.3, ease: "easeOut" },
                }}
                exit={{
                    opacity: 0,
                    scale: 0.95,
                    y: 20,
                    transition: { duration: 0.6, ease: "easeInOut" },
                }}
            >
                <div className={styles.container_image}>
                    <div className={styles.image}>
                        <Image
                            className={styles.logo}
                            src={image}
                            alt={`Logo de ${title}`}
                            fill
                        />
                    </div>
                </div>

                <div className={styles.container_text}>
                    <h1>{title}</h1>
                    <h2>{type}</h2>
                    <p>{description}</p>
                    <h3>Les outils ayant permis la réalisation de ce projet</h3>
                    <ul>
                        {tools.map((tool, i) => <li key={i}>{tool}</li>)}
                    </ul>
                    <div className={styles.container_button}>
                        <button onClick={onClose}>Fermer</button>
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className={styles.view}>Visiter le projet</button>
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}

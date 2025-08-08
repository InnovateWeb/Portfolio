"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/item.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCalendar, faGear, faEye } from "@fortawesome/free-solid-svg-icons";

type ItemProps = {
    title: string;
    type: string;
    image: string;
    description: string;
    created: string;
    tools: string[];
    onClose: () => void;
    link?: string;
};

export default function Item({
    title,
    type,
    image,
    description,
    created,
    tools,
    onClose,
    link,
}: ItemProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.body.style.overflow = "hidden";
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <motion.section
            className={styles.background}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
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
                <button className={styles.close} onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button>
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
                    <h2>{type}</h2>
                    <h3>{title}</h3>
                    <p>{description}</p>

                    <ul className={styles.meta}>
                        <li>
                            <FontAwesomeIcon className={styles.icon} icon={faCalendar} />Réalisé le {created}
                        </li>
                        <li>
                            <FontAwesomeIcon className={styles.icon} icon={faGear} /> Conçu avec {tools.join(", ")}
                        </li>
                        {link && (
                            <li>
                                <FontAwesomeIcon className={styles.icon} icon={faEye} />{" "}
                                <a
                                    className={styles.url}
                                    href={link.startsWith("http") ? link : `https://${link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </motion.div>
        </motion.section>
    );
}

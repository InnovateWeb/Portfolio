"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/hero.module.css";

const phrases = ["Développement Web", "Designer UI/UX", "Référencement"];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <h2>Apprenti Médiamaticien</h2>
                <h1>
                    Bonjour, Je suis <br /> Maxime Séchaud<br />
                </h1>

                <div className={styles.motionWrapper}>
                    <AnimatePresence mode="wait">
                        <motion.h3
                            key={phrases[index]}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {phrases[index]}
                        </motion.h3>
                    </AnimatePresence>
                </div>
            </div>
            <div className={styles.container_image}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 623.01 255.39"
                    className={styles.icon}
                >
                    <defs>
                        <style>
                            {`
                                .cls-1, .cls-2, .cls-3, .cls-4, .cls-5 { fill: #3568ab; }
                            `}
                        </style>
                    </defs>
                    <g>
                    <motion.path
                        className="cls-1"
                        d="M623.01,55.85h-27.05L518.83,0h-87.28l-135.54,135.54h-146.55c-2.04-6.85-8.38-11.85-15.9-11.85-9.16,0-16.59,7.43-16.59,16.59s7.43,16.59,16.59,16.59c7.52,0,13.86-5,15.9-11.85h150.47L435.47,9.47h80.29l77.12,55.85h30.12v-9.47ZM133.57,147.86c-4.19,0-7.59-3.4-7.59-7.59s3.4-7.59,7.59-7.59,7.59,3.4,7.59,7.59-3.4,7.59-7.59,7.59Z"
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    />

                    <motion.path
                        className="cls-2"
                        d="M622.13,109.37l-6.94-5.03h-223.99l-95.01,97.78h-95.64c-1.84-6.18-7.56-10.69-14.34-10.69-8.27,0-14.97,6.7-14.97,14.97s6.7,14.97,14.97,14.97c6.78,0,12.5-4.51,14.34-10.69h99.25l95.01-97.78h217.61l9.71,7.03v-10.55ZM186.21,213.24c-3.78,0-6.85-3.07-6.85-6.85s3.07-6.85,6.85-6.85,6.85,3.07,6.85,6.85-3.07,6.85-6.85,6.85Z"
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />

                    <motion.path
                        className="cls-3"
                        d="M623.01,97.47h-149.15l-135.54,135.54h-191.32c-2.14-7.19-8.79-12.44-16.68-12.44-9.62,0-17.41,7.8-17.41,17.41s7.8,17.41,17.41,17.41c7.89,0,14.54-5.25,16.68-12.44h195.44l135.54-135.54h145.04v-9.94ZM130.31,245.94c-4.4,0-7.97-3.57-7.97-7.97s3.57-7.97,7.97-7.97,7.97,3.57,7.97,7.97-3.57,7.97-7.97,7.97Z"
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                    />

                    <motion.path
                        className="cls-4"
                        d="M623.01,150.81h-135.04L352.44,15.27h-74.13c-2.11-7.08-8.65-12.24-16.42-12.24-9.46,0-17.14,7.67-17.14,17.14s7.67,17.14,17.14,17.14c7.76,0,14.31-5.17,16.42-12.24h70.08l135.54,135.54h139.09v-9.78ZM261.89,28c-4.33,0-7.84-3.51-7.84-7.84s3.51-7.84,7.84-7.84,7.84,3.51,7.84,7.84-3.51,7.84-7.84,7.84Z"
                        initial={{ opacity: 0.9 }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                    />

                    <motion.path
                        className="cls-5"
                        d="M622.57,229.59h-190.35l-135.54-135.54H33.96c-2.13-7.17-8.76-12.4-16.62-12.4-9.58,0-17.35,7.77-17.35,17.35s7.77,17.35,17.35,17.35c7.86,0,14.49-5.23,16.62-12.39h258.62l135.54,135.54h194.45v-9.9ZM17.35,106.94c-4.38,0-7.94-3.55-7.94-7.94s3.55-7.94,7.94-7.94,7.94,3.55,7.94,7.94-3.55,7.94-7.94,7.94Z"
                        initial={{ opacity: 0.1 }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                    />

                    </g>
                </svg>
            </div>
        </section>
    );
}

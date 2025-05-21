"use client";

import Image from "next/image";
import styles from "../styles/header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, faFilePdf, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import { Sling as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
    const [isOpen, setOpen] = useState(false);
    const [isLocked, setLocked] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const links = [
        { icon: faPhone, label: "+41 78 810 71 22", href: "tel:+41788107122" },
        { icon: faEnvelope, label: "maximesechaud32@gmail.com", href: "mailto:maximesechaud32@gmail.com" },
        { icon: faLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/maxime-s%C3%A9chaud-321269341/" },
        { icon: faCode, label: "Portfolio", href: "https://github.com/InnovateWeb/Portfolio" },
        { icon: faFilePdf, label: "Version PDF", href: "#" },
    ];

    useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 400);
        setIsMobileView(window.innerWidth < 1400);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);


    useEffect(() => {
        if (isOpen) {
            setLocked(true);
            const unlockDelay = (links.length - 1) * 100 + 300;
            const timer = setTimeout(() => {
                setLocked(false);
            }, unlockDelay);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && isMobileView) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen, isMobileView]);


    const handleToggle = () => {
        if (!isLocked) {
            setOpen(prev => !prev);
        }
    };

    return (
        <header className={styles.header}>
            <Image
                className={styles.logo}
                src="/images/Logo.svg"
                alt="Logo"
                width={isMobile ? 140 : 170}
                height={isMobile ? 45 : 45}
                priority
            />

            <div className={styles.container}>
                {isMobileView ? (
                    <>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                className={styles.wrapper}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                <nav className={styles.container_info}>
                                    {links.map((link, index) => {
                                    const delay = index * 0.1;
                                    return (
                                        <motion.div
                                        key={link.label}
                                        className={styles.info}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            delay,
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }}
                                        >
                                        <FontAwesomeIcon className={styles.icon} icon={link.icon} />
                                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                                            {link.label}
                                        </a>
                                        </motion.div>
                                    );
                                    })}
                                </nav>
                                </motion.div>
                            )}
                        </AnimatePresence>


                        <div className={styles.burger_button}>
                            <Hamburger
                                toggled={isOpen}
                                toggle={handleToggle}
                                size={isMobile ? 28 : 35}
                                duration={0.5}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <nav className={styles.container_info}>
                            <AnimatePresence>
                                {links.map((link, index) => {
                                    const delay = (links.length - 1 - index) * 0.1;
                                    return isOpen ? (
                                        <motion.div
                                            key={link.label}
                                            className={styles.info}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                delay,
                                                duration: 0.3,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <FontAwesomeIcon className={styles.icon} icon={link.icon} />
                                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                                {link.label}
                                            </a>
                                        </motion.div>
                                    ) : null;
                                })}
                            </AnimatePresence>
                        </nav>

                        <div className={styles.burger_button}>
                            <Hamburger
                                toggled={isOpen}
                                toggle={handleToggle}
                                size={35}
                                duration={0.5}
                            />
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}

"use client";

import Image from "next/image";
import styles from "../styles/header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFilePdf, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                className={styles.logo}
                src="/images/Logo.svg"
                alt="Logo"
                width={170}
                height={45}
                priority
            />

            <div className={styles.container_info}>
                <div className={styles.info}>
                    <FontAwesomeIcon className={styles.icon} icon={faPhone} />
                    <a href="tel:+41788107122">+41 78 810 71 22</a>
                </div>
                <div className={styles.info}>
                    <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                    <a href="mailto:maximesechaud32@gmail.com">maximesechaud32@gmail.com</a>
                </div>
                <div className={styles.info}>
                    <FontAwesomeIcon className={styles.icon} icon={faCode} />
                    <a
                        href="https://github.com/InnovateWeb/Portfolio"
                        target="_blank"
                        rel="noopener noreferrer" 
                    >Portfolio</a>
                </div>
                <div className={styles.info}>
                    <FontAwesomeIcon className={styles.icon} icon={faFilePdf} />
                    <a href="#">Version PDF</a>
                </div>
            </div>
        </header>
    );
}

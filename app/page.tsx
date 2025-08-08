"use client";

import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Portfolio() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 1600);

        return () => clearTimeout(timer);
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
        <div>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Project />
            <Experience />
            <Footer />
        </div>
    );
}

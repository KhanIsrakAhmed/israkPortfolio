import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FcGraduationCap } from "react-icons/fc";
import "../styles/Education.css";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    institution: "United International University",
    abbreviation: "UIU",
    degree: "Bachelor of Science in Computer Science and Engineering",
    duration: "2022 — 2026",
    url: "https://www.uiu.ac.bd/",
  },
  {
    institution: "Shaheed Ramiz Uddin Cantonment College",
    abbreviation: "SRCC",
    degree: "Higher Secondary Certificate, HSC",
    duration: "2020",
    url: "https://www.srcc.edu.bd/",
  },
  {
    institution: "Adamjee Cantonment Public School",
    abbreviation: "ACPS",
    degree: "Secondary School Certificate, SSC",
    duration: "2018",
    url: "https://www.acps.edu.bd/",
  },
];

export default function Education() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#education .section-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#education",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#education .education-list",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef}>
      <div className="section-header">
        <span className="section-title">Education</span>
      </div>

      <div className="education-list">
        {education.map((item) => (
          <div className="education-card" key={item.abbreviation} ref={addToCardsRef}>
            <div className="education-icon">
              <FcGraduationCap />
            </div>
            <div className="education-details">
              <div className="education-institution-row">
                {item.url ? (
                  <a
                    href={item.url}
                    className="education-institution"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.institution}
                  </a>
                ) : (
                  <span className="education-institution">{item.institution}</span>
                )}
                <span className="education-abbreviation">({item.abbreviation})</span>
              </div>
              <div className="education-degree">{item.degree}</div>
              <div className="education-duration">{item.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

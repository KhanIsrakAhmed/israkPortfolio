import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./Icons";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#about",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Image container is the first child, so it appears first (no delay).
      gsap.fromTo(
        ".about-flex-container > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, aboutRef);

    // Only cleans up this component's animations and triggers
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef}>
      <div className="about-content">
        <div className="about-flex-container">
          <div className="about-image-container">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Khan Israk Ahmed.jpg`}
              alt="Khan Israk Ahmed"
              className="about-profile-image"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>

          <div className="about-text-content">
            <div className="section-header">
              <span className="section-title about-title">About Me</span>
            </div>

            <div className="about-description">
              <p>
                Hi, my name is Israk and I enjoy solving puzzles, building
                things, and exploring technology. My journey began in 2015 when
                I became fascinated by{" "}
                <span className="highlight">
                  Soccer Bot and remote-controlled cars
                </span>{" "}
                and microcontrollers like{" "}
                <span className="highlight">Arduino and ESP32</span>. That
                childhood curiosity sparked a lifelong passion for electronics
                and robotics.
              </p>

              <p>
                From 2015 to 2019, I explored the vast fields of computer
                science, graphics design, and software engineering. During the
                pandemic, I deep-dived into{" "}
                <span className="highlight">
                  Web Development and Figma Design
                </span>
                . My academic journey eventually led me to United International
                University.
              </p>

              <p>
                In 2024, I pivoted my focus toward{" "}
                <span className="highlight">
                  Deep Learning and Artificial Intelligence
                </span>
                .
              </p>

              <p>
                Outside of work, I love playing video games. I'm also into
                perfumes and I love hoarding cool tech products.
              </p>

              <p className="about-timeline-link">
                <a href="#timeline">
                  <span role="img" aria-label="timeline"></span>
                  View my timeline to learn more about my{" "}
                  <span className="about-timeline-highlight">
                    unique journey
                  </span>{" "}
                  &rarr;
                </a>
              </p>

              <div className="about-actions">
                <a href="#contact" className="resume-button btn-effect">
                  Get in Touch <Icon name="Mail" className="button-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

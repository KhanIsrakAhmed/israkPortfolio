import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./Icons";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      ".about-title",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.from(textRefs.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={aboutRef}>
      <div className="about-content">
        <div className="about-flex-container">
          <div className="about-image-container" ref={(el) => (textRefs.current[7] = el)}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Khan Israk Ahmed.png`}
              alt="Khan Israk Ahmed"
              className="about-profile-image"
            />
          </div>

          <div className="about-text-content">
            <div className="section-header">
              <span className="section-title about-title">About Me</span>
            </div>

            <div className="about-description">
              <p ref={(el) => (textRefs.current[0] = el)}>
                Hi, my name is Israk and I enjoy solving puzzles, building things,
                and exploring technology. My journey began in 2015 when I became
                fascinated by <span className="highlight">Soccer Bot and remote-controlled cars</span> and
                microcontrollers like <span className="highlight">Arduino and ESP32</span>. That
                childhood curiosity sparked a lifelong passion for electronics and
                robotics.
              </p>

              <p ref={(el) => (textRefs.current[1] = el)}>
                From 2015 to 2019, I explored the vast fields of computer science,
                graphics design, and software engineering. During the pandemic, I
                deep-dived into{" "}
                <span className="highlight">Web Development and Figma Design</span>.
                My academic journey eventually led me to United International
                University,
              </p>

              <p ref={(el) => (textRefs.current[2] = el)}>
                In 2024, I pivoted my focus toward{" "}
                <span className="highlight">
                  Deep Learning and Artificial Intelligence
                </span>
                .
              </p>

              <p ref={(el) => (textRefs.current[4] = el)}>
                Outside of work, I love playing video games. I'm also into perfums and I love hoarding cool tech products.
              </p>

              <p
                className="about-timeline-link"
                ref={(el) => (textRefs.current[5] = el)}
              >
                <a href="#timeline">
                  <span role="img" aria-label="timeline"></span>
                  View my timeline to learn more about my{" "}
                  <span className="about-timeline-highlight">unique journey</span>{" "}
                  &rarr;
                </a>
              </p>

              <div className="about-actions" ref={(el) => (textRefs.current[6] = el)}>
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

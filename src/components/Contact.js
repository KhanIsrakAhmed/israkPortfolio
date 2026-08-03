import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./Icons";
import "../styles/Contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);
  const successRef = useRef(null);
  const contactSectionRef = useRef(null);
  const yourEmail = "israk.ahmed275@gmail.com";

  useEffect(() => {
    gsap.set(".contact-container", {
      width: "100%",
      maxWidth: "600px",
      height: "auto",
      margin: "0 auto",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      "#contact .section-title",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    tl.fromTo(
      ".contact-intro",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.3"
    );

    tl.fromTo(
      ".contact-container",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3"
    );

    tl.fromTo(
      ".form-group",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4"
    );

    tl.fromTo(
      [".contact-actions", ".contact-info"],
      {
        y: 15,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  // 1. Go to https://formspree.io and sign up (free) using   
  // 2. Create a new form, then copy the endpoint it gives you (looks like
  //    https://formspree.io/f/xxxxabcd) and paste it below, replacing the placeholder.
  // 3. Formspree will send a one-time confirmation email — click the link in it
  //    to activate the form before it will deliver submissions.
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvgggpz";

  const handleSend = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          date: new Date().toLocaleString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setStatus("success");
      gsap.to(formRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          formRef.current.style.display = "none";
          successRef.current.style.display = "flex";

          gsap.fromTo(
            successRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
          );
        },
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      alert("Oops! There was a problem saving your message.");
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setStatus("idle");

    gsap.to(successRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        successRef.current.style.display = "none";
        formRef.current.style.display = "block";

        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );

        setIsSubmitted(false);
      },
    });
  };

  return (
    <section id="contact" ref={contactSectionRef}>
      <div className="section-header">
        <span className="section-title">Get In Touch</span>
      </div>
      <div className="contact-intro">
        <p>
          I’m currently exploring research and leadership opportunities in AI and
          Robotics. I'm always open to connecting with like-minded
          professionals, researchers, or collaborators. If you have a project or
          role in mind, I’d love to hear from you!
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-bg-elements">
          <div className="contact-circle"></div>
          <div className="contact-square"></div>
        </div>

        <form className="contact-form" onSubmit={handleSend} ref={formRef}>
          <div className="form-group">
            <input
              type="text"
              className="contact-input"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Icon name="User" className="input-icon" />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="contact-input"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Icon name="Mail" className="input-icon" />
          </div>

          <div className="form-group">
            <textarea
              className="contact-textarea"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              required
            />
            <Icon name="MessageSquare" className="input-icon textarea-icon" />
          </div>

          <div className="contact-actions">
            <button
              className="contact-send-btn btn-effect"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <Icon name="Send" className="btn-icon" />
            </button>
          </div>

          <div className="contact-info">
            <div className="contact-info-item">
              <Icon name="Mail" className="contact-info-icon" />
              <a
                href={`mailto:${yourEmail}`}
                className="contact-email"
                target="_blank"
                rel="noopener noreferrer"
              >
                {yourEmail}
              </a>
            </div>
          </div>
        </form>

        <div
          className="success-message"
          ref={successRef}
          style={{ display: "none" }}
        >
          <Icon name="CheckCircle" className="success-icon" />
          <h3>Thank you for reaching out.</h3>
          <p>I'll get back to you soon.</p>
          <button className="reset-btn" onClick={handleReset}>
            Send Another Message
          </button>
        </div>
      </div>
    </section>
  );
}

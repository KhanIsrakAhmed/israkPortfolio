import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/TechStack.css";
import { RiFileExcel2Fill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { 
  SiMysql, SiPython, 
  SiPandas, SiNumpy, SiJupyter, SiGit, SiFigma,
  SiAdobeillustrator, SiAdobephotoshop,
  SiGithub, SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiJira, SiTinkercad, SiOpenjdk, SiCplusplus, SiC, 
  SiReact, SiNextdotjs, SiFlutter
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const techStackData = [
  { name: "MySQL", icon: <SiMysql />, color: "#00758F" }, 
  { name: "Java", icon: <SiOpenjdk />, color: "#007396" }, 
  { name: "Python", icon: <SiPython />, color: "#FFD43B" }, 
  { name: "Pandas", icon: <SiPandas />, color: "#150458" }, 
  { name: "NumPy", icon: <SiNumpy />, color: "#013243" }, 
  { name: "Git", icon: <SiGit />, color: "#F1502F" }, 
  { name: "Jupyter", icon: <SiJupyter />, color: "#F37626" }, 
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" }, 
  { name: "Illustrator", icon: <SiAdobeillustrator />, color: "#FF9A00" }, 
  { name: "Photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" }, 
  { name: "Github", icon: <SiGithub />, color: "#696868ff" }, 
  { name: "Html5", icon: <SiHtml5 />, color: "#E34F26" }, 
  { name: "Css3", icon: <SiCss3 />, color: "#1572B6" }, 
  { name: "Tailwindcss", icon: <SiTailwindcss />, color: "#06B6D4" }, 
  { name: "Javascript", icon: <SiJavascript />, color: "#F7DF1E" }, 
  { name: "Jira", icon: <SiJira />, color: "#2684FF" }, 
  { name: "Tinkercad", icon: <SiTinkercad />, color: "#0066B6" }, 
  { name: "C++", icon: <SiCplusplus />, color: "#00599C" }, 
  { name: "C", icon: <SiC />, color: "#A8B9CC" }, 
  { name: "React", icon: <SiReact />, color: "#61DAFB" }, 
  { name: "Next.js", icon: <SiNextdotjs />, color: "#686767ff" }, 
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B" }, 
 

];

export default function TechStack() {
  const techStackRef = useRef(null);
  
  useEffect(() => {
    console.log("TechStack component mounted");
    
    const totalItems = techStackData.length;
    const cols = 2; 
    const rows = Math.ceil(totalItems / cols);
    const grid = [rows, cols];
    
    console.log("TechStack grid dimensions:", grid);
    
    gsap.set(".tech-icon-container", { opacity: 1, scale: 1 });
    
    gsap.fromTo(".tech-title",
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#tech-stack",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".tech-icon-container",
      {
        scale: 0.1,
        y: -250,
        opacity: 0
      },
      {
        y: 0,
        scale: 1,
        duration: 0.5,
        opacity: 1,
        stagger: {
        grid: [7,15],
        from: "center",
        amount: 1 ,
      },
        ease: "power1.inOut", 
        scrollTrigger: {
          trigger: "#tech-stack",
          start: "top 70%",
          toggleActions: "play none none reverse" 
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleIconHover = (e, enter) => {
    const target = e.currentTarget;
    
    if (enter) {
      gsap.to(target, {
        y: -5,
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(target.querySelector('.tech-icon'), {
        color: "var(--green-bright)",
        duration: 0.3
      });
    } else {
      gsap.to(target, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(target.querySelector('.tech-icon'), {
        color: target.dataset.color,
        duration: 0.3
      });
    }
  };

  return (
    <section id="tech-stack" ref={techStackRef}>
      <div className="section-header">
        <span className="section-title tech-title">Tech Stack</span>
      </div>
      
      <div className="tech-grid-container">
        {techStackData.map((tool, index) => (
          <div
            key={tool.name}
            className="tech-icon-container"
            data-color={tool.color}
            title={tool.name} 
            onMouseEnter={(e) => handleIconHover(e, true)}
            onMouseLeave={(e) => handleIconHover(e, false)}
          >
            <div className="tech-icon" style={{ color: tool.color }}>
              {tool.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
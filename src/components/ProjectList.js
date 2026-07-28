import Code from "./codes/code";

const ProjectList = {
  Software: [
    {
      name: "CholoKini",
      image: "/assets/cholokini.png",
      github: "https://github.com/KhanIsrakAhmed/CholoKini",
      website: "",
      tags: ["SQL", "MySQL", "Data Analysis"],
      files: [

        {
          name: "README.md",
          type: "info",
          content:
            "A SQL data analysis project exploring global COVID-19 cases, deaths, and vaccinations using MySQL. The project includes data cleaning, exploratory data analysis, infection and mortality rate calculations, continent-wise comparisons, rolling vaccination statistics with window functions, and SQL views for visualization-ready insights.",
        },
      ],
    },

    {
      name: "Language Learning App",
      image: "/assets/language-learning-app.png",
      github: "https://github.com/KhanIsrakAhmed/Language_learning_app",
      website: "",
      tags: ["Flutter", "Dart", "Firebase", "Education"],
      files: [

        {
          name: "README.md",
          type: "info",
          content:
            "An interactive and beginner-friendly Language Learning App designed to help users improve their vocabulary, pronunciation, and language skills through engaging lessons and quizzes. The application provides a simple and intuitive interface, making language learning enjoyable for learners of all ages, especially beginners and kids"
        },
      ],
    },
    {
      name: "PawPal – Pet Care Management Platform",
      image: "/assets/pawpal.png",
      github: "https://github.com/KhanIsrakAhmed/Project-Management--PawPal",
      website: "",
      tags: [
        "Project Management",
        "Software Engineering",
        "Agile",
        "System Design",
        "SDLC"
      ],
      files: [
        {
          name: "README.md",
          type: "info",
          content:
            "PawPal – Your Pet’s Digital Companion PawPal is a unique, all-in-one digital ecosystem that simplifies and improves pet care for today's busy, urban pet owners. Recognizing that pets are valued family members who deserve the best, PawPal bridges the gap between fragmented pet services by combining veterinary care, grooming, pet walking, pet product marketplaces, and an engaged community into a single, user-friendly platform."
        },
      ],
    },
  ],
  Research: [
    {
      name: "Automated Visual Inspection for Defect Detection",
      image: "/assets/avi-defect-detection.png",
      github:
        "https://github.com/KhanIsrakAhmed/Automated-Visual-Inspection-for-Defect-Detection-in-Electronic-Components",
      tags: [
        "Python",
        "Deep Learning",
        "Computer Vision",
        "CNN",
        "TensorFlow",
        "OpenCV",
        "Image Classification",
        "Quality Inspection",
      ],
      files: [
        {
          name: "README.md",
          type: "info",
          content:
            "An AI-powered Automated Visual Inspection (AVI) system for detecting and classifying defects in electronic components using deep learning and computer vision techniques. The project automates quality inspection by identifying defective components from images, improving inspection accuracy, consistency, and efficiency in manufacturing environments.",
        },
        {
          name: "Features.md",
          type: "info",
          content:
            "• Automated defect detection\n• Deep learning-based image classification\n• Computer vision for quality inspection\n• High-accuracy defect identification\n• Image preprocessing and augmentation\n• Scalable inspection pipeline\n• Research-oriented implementation",
        },
        {
          name: "TechStack.py",
          type: "code",
          language: "python",
          content: `Language:
- Python

Framework:
- TensorFlow / Keras

Libraries:
- OpenCV
- NumPy
- Pandas
- Matplotlib
- Scikit-learn

Techniques:
- Convolutional Neural Networks (CNN)
- Computer Vision
- Image Processing

Tools:
- Jupyter Notebook
- Git
- GitHub`,
        },
      ],
    },

    {
      name: "Jute Disease Detection System",
      image: `/assets/jute-disease.png`,
      github:
        "https://github.com/KhanIsrakAhmed/Deep-Learning-Based-Multiclass-Disease-Detection-System-for-Jute-plant",
      tags: [
        "Python",
        "TensorFlow",
        "Keras",
        "Deep Learning",
        "CNN",
        "DenseNet121",
        "Computer Vision",
        "Image Classification",
      ],
      files: [
        {
          name: "README.md",
          type: "info",
          content:
            "A deep learning-based multiclass disease detection system for jute plants that automatically identifies diseases affecting leaves, stems, and roots from images. The project combines multiple public datasets into a unified dataset containing seven disease classes and evaluates six CNN architectures, with DenseNet121 achieving the highest accuracy of 96.8%. The system aims to support early disease diagnosis and precision agriculture.",
        },
        {
          name: "Features.md",
          type: "info",
          content:
            "• Multi-class disease classification\n• Detects diseases in leaves, stems, and roots\n• Unified dataset with 7 disease classes\n• Image preprocessing and data augmentation\n• CNN-based feature extraction\n• Evaluated six CNN architectures\n• DenseNet121 achieved 96.8% accuracy\n• Supports precision agriculture and early disease diagnosis",
        },
        {
          name: "TechStack.py",
          type: "code",
          language: "python",
          content: `Language: Python
Framework: TensorFlow / Keras

Libraries:
- OpenCV
- NumPy
- Pandas
- Matplotlib
- Scikit-learn

Deep Learning Models:
- AlexNet
- VGG16
- GoogLeNet
- ResNet50
- DenseNet121
- MobileNetV2

Image Processing:
- Resize (224×224)
- Normalization
- Data Augmentation

Version Control:
- Git
- GitHub`,
        },
      ],
    },
  ],
  Hardware: [
    {
      name: "Arduino-Based Electronic Voting Machine (EVM)",
      image: `/assets/evm.png`,

      github:
        "https://github.com/KhanIsrakAhmed/Arduino-Based-Electronic-Voting-Machine-EVM",
      tags: [
        "Arduino",
        "C++",
        "Embedded Systems",
        "Electronics",
        "LCD",
        "Microcontroller",
      ],
      files: [
        {
          name: "README.md",
          type: "info",
          content:
            "An Arduino Uno-based Electronic Voting Machine (EVM) that enables secure and user-friendly voting using dedicated push buttons. The system features a 16×2 LCD for displaying instructions and voting status, automatic vote counting, and a result mode to display the total votes received by each candidate. Designed as an embedded systems project for educational and demonstration purposes.",
        },
        {
          name: "Source Code",
          type: "code",
          language: "cpp",
          content: Code("ArduinoEVM"),
        },
      ],
    }
  ]
};

export default ProjectList;

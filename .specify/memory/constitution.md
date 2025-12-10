<!--
Sync Impact Report:
- Version change: N/A → 1.0.0 (initial version)
- Modified principles: N/A (new constitution)
- Added sections: Core Principles (6), Key Standards (3), Constraints, Success Criteria
- Removed sections: N/A
- Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ updated
  - .specify/templates/spec-template.md: ✅ updated
  - .specify/templates/tasks-template.md: ✅ updated
  - .specify/templates/commands/*.md: N/A (no command templates found)
- Follow-up TODOs:
  - RATIFICATION_DATE: Set original adoption date
-->

# Physical AI & Humanoid Robotics Textbook Constitution

## Core Principles

### 1. Accuracy & Technical Fidelity
All descriptions of robotics middleware (ROS 2), simulation frameworks (Gazebo, Unity, Isaac), SLAM algorithms, kinematics, and hardware specifications must be technically accurate and consistent with official documentation. Cross-check all system descriptions: ROS 2 Humble/Iron, Isaac Sim, Isaac ROS, Unity Robotics Hub, SLAM/VIO pipelines, GPU/Jetson constraints, etc.

### 2. Pedagogical Clarity
The textbook targets university-level robotics/AI students. Explanations must be precise, accessible, and grounded in real-world robotics engineering. Maintain conceptual flow from simple (foundations) to complex (sim-to-real humanoid deployment).

### 3. Engineering Reproducibility
Every technical workflow must be replicable by students: ROS 2 package structure, Simulation setup, Isaac Sim environment configuration, Jetson deployment, VSLAM pipelines, Gazebo and Unity environment instructions, VLA integration (Whisper + LLM planning + ROS 2 actions). Include reproducible step-by-step procedures.

### 4. Simulation-to-Real Consistency
Architectural explanations must align digital (Isaac Sim / Gazebo / Unity) and physical (Jetson Orin, RealSense, IMUs, Unitree robots) systems. Define repeatable sim-to-real workflows throughout the modules.

### 5. Tooling Discipline (Spec-Kit + Claude Code)
All chapters must: Use Spec-Driven development, Maintain consistent structure per spec, Pass validation rules set in the constitution, Use Claude Code for code correctness, Ensure Docusaurus compatibility.

### 6. Safety & Risk Awareness
Any instructions related to hardware (robots, Jetson, sensors) must include safety considerations, especially around: Robot locomotion, Latency from cloud instances, Power systems, RealSense & LIDAR usage, Avoiding dangerous or uncontrolled robot behavior.

## Key Standards

### 1. Structural Standards
The entire book must follow this architecture:
1. Quarter Overview
2. Weekly Breakdown
3. Module-Based Deep Dives: ROS 2 Nervous System, Digital Twin: Gazebo + Unity, AI Robot Brain: Isaac Sim + Isaac ROS, Vision-Language-Action (VLA)
4. Capstone Robotics Project
5. Hardware Requirements
6. Lab Architecture (Digital Twin + Edge Brain + Sensors + Actuators)
7. Sim-to-Real Handbook
8. Assessment Criteria

### 2. Writing Standards
Readability target: Flesch-Kincaid grade 10–14. Tone: Professional, technical, academic. All diagrams must be compatible with Docusaurus mdx. All robot architectures must be consistent with the lab diagram (Sim Rig → Jetson → Sensors → Actuator).

### 3. Technical Documentation Standards
Each module must include: Code samples (Python, ROS 2 rclpy), Architecture diagrams, Terminal commands (ROS 2 CLI, colcon, Isaac Sim workflows), Deployment instructions.

## Constraints

Final textbook format: Docusaurus (Markdown/MDX). Deployment target: GitHub Pages. Chapters: Minimum 12, aligned to course weeks. Figures: Minimum 20 diagrams (architecture, flow, hardware). Code Blocks: Minimum 50 executable examples. Length: Equivalent of 30k–50k words. Zero hallucinations about hardware capabilities or ROS/Isaac APIs. All hardware specifications must be factual.

## Success Criteria

The project is considered successful when:
1. The textbook builds cleanly in Docusaurus and deploys to GitHub Pages.
2. All chapters pass the constitution rules through SpeckitPlus.
3. All technical procedures are reproducible on: An RTX workstation, A Jetson Orin Nano/NX.
4. Students can execute the Capstone Project end-to-end: Voice command → LLM plan → Navigation → Perception → Manipulation.
5. The book includes: Module overviews, Weekly breakdown, Assessments, Hardware lab setup, Digital twin → physical deployment.
6. The content is clear, accurate, and aligned with ROS 2, Isaac, Unity, Gazebo, and VLA standards.
7. No safety-risking instructions are included.

## Governance

This constitution governs all aspects of the Physical AI & Humanoid Robotics Textbook development. All changes to the textbook content, structure, and development process must align with these principles. Any deviation from these principles requires explicit approval and documentation of the rationale. The constitution serves as the authoritative reference for resolving conflicts between different development approaches or technical decisions.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE) | **Last Amended**: 2025-12-10

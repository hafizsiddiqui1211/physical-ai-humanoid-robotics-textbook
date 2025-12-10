# Data Model: Physical AI & Humanoid Robotics Textbook

**Feature**: 001-textbook-ai-robotics
**Date**: 2025-12-10
**Input**: Feature specification and research findings

## Textbook Chapter
**Description**: Academic content module covering specific robotics/AI concepts with code examples and diagrams
**Fields**:
- id: Unique identifier for the chapter
- title: Chapter title (string)
- content: Markdown/MDX content (string)
- module: Associated module (string)
- prerequisites: List of prerequisite chapters (array)
- learningObjectives: List of learning objectives (array)
- codeExamples: List of executable code examples (array)
- diagrams: List of diagram references (array)
- exercises: List of practice exercises (array)
- difficulty: Difficulty level (enum: beginner, intermediate, advanced)
- estimatedTime: Estimated completion time in minutes (integer)

## Module
**Description**: Educational component focusing on specific technology areas (ROS 2, Isaac Sim, etc.)
**Fields**:
- id: Unique identifier for the module
- title: Module title (string)
- description: Module description (string)
- chapters: List of chapter IDs (array)
- duration: Estimated module duration in weeks (integer)
- learningOutcomes: List of expected learning outcomes (array)
- prerequisites: List of prerequisite modules (array)

## Code Example
**Description**: Executable code sample demonstrating robotics concepts with clear explanations
**Fields**:
- id: Unique identifier for the code example
- title: Example title (string)
- language: Programming language (enum: python, c++, bash)
- code: Source code content (string)
- explanation: Explanation of the code (string)
- dependencies: List of required dependencies (array)
- executionEnvironment: Target environment (enum: ros2, isaac-sim, gazebo, jetson)
- relatedChapter: ID of related chapter (string)

## Diagram
**Description**: Visual representation of concepts, architectures, or workflows
**Fields**:
- id: Unique identifier for the diagram
- title: Diagram title (string)
- type: Diagram type (enum: architecture, workflow, concept, hardware)
- format: File format (enum: svg, png, mdx, mermaid)
- source: Source file path (string)
- caption: Diagram caption (string)
- relatedChapter: ID of related chapter (string)

## Exercise
**Description**: Practice problem or activity for students to reinforce learning
**Fields**:
- id: Unique identifier for the exercise
- title: Exercise title (string)
- description: Exercise description (string)
- type: Exercise type (enum: theoretical, practical, code, simulation)
- difficulty: Difficulty level (enum: beginner, intermediate, advanced)
- estimatedTime: Estimated completion time in minutes (integer)
- solution: Solution or answer (string)
- relatedChapter: ID of related chapter (string)

## Hardware Component
**Description**: Physical hardware component referenced in the textbook
**Fields**:
- id: Unique identifier for the hardware component
- name: Component name (string)
- manufacturer: Manufacturer name (string)
- model: Model number (string)
- specifications: Technical specifications (object)
- useCase: Primary use case in robotics (string)
- integrationGuide: Guide for integration with ROS 2 (string)
- safetyConsiderations: Safety guidelines (array)

## Assessment
**Description**: Evaluation material for measuring student understanding
**Fields**:
- id: Unique identifier for the assessment
- title: Assessment title (string)
- type: Assessment type (enum: quiz, project, lab, practical)
- questions: List of questions (array)
- difficulty: Difficulty level (enum: beginner, intermediate, advanced)
- duration: Time limit in minutes (integer)
- learningObjectives: Related learning objectives (array)
- relatedModule: ID of related module (string)
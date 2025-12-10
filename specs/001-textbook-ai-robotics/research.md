# Research: Physical AI & Humanoid Robotics Textbook

**Feature**: 001-textbook-ai-robotics
**Date**: 2025-12-10
**Input**: Feature specification and planning requirements from `/specs/001-textbook-ai-robotics/spec.md`

## Decision: Simulation Framework Selection
**Rationale**: Select Isaac Sim as the primary simulation framework due to its superior photorealism, VLA capabilities, and synthetic data generation features that align with the textbook's focus on Vision-Language-Action systems. Gazebo will be used for physics-accurate simulation and ROS 2 native integration. Unity will serve as a supplementary tool for rich visualizations and digital twin fidelity.

**Alternatives considered**:
- Isaac Sim alone: Provides best photorealism and VLA capabilities but higher GPU requirements
- Gazebo alone: Excellent physics accuracy and ROS 2 integration but limited AI capabilities
- Unity alone: Strong visualization but less robotics-native integration

## Decision: Humanoid Robot Model
**Rationale**: Use a custom simplified humanoid model for teaching purposes that balances realism with computational efficiency. This avoids IP restrictions while providing students with a clear understanding of humanoid kinematics without overwhelming complexity.

**Alternatives considered**:
- Open-source URDF humanoid model: Available but may not align with textbook examples
- Unitree G1 digital twin: High fidelity but potential IP restrictions and complexity
- Custom simplified model: Best for pedagogical purposes and avoids IP issues

## Decision: Hardware Recommendations
**Rationale**: Recommend Jetson Orin NX for optimal balance of compute power and cost. For sensors, RealSense D455 provides better performance than D435i for robotics applications. Use quadruped robots as humanoid proxies to demonstrate locomotion concepts before advancing to full humanoid systems.

**Alternatives considered**:
- Jetson Orin Nano vs NX: Nano is more affordable but NX provides better performance for AI workloads
- RealSense D435i vs D455: D455 offers better performance for robotics applications
- Quadruped vs humanoid: Quadrupeds provide simpler locomotion for initial learning

## Decision: VLA Integration Path
**Rationale**: Use Whisper + Llama for on-device inference to maintain low latency and reduce cloud dependency. This approach provides better educational value as students can understand the complete pipeline without relying on cloud services.

**Alternatives considered**:
- Whisper + GPT: Higher accuracy but cloud-dependent with potential latency
- Whisper + Llama: Good balance of performance and on-device execution
- On-device vs cloud: On-device preferred for educational consistency and reliability

## Decision: Lab Architecture
**Rationale**: Implement a hybrid on-prem + cloud lab architecture. Core textbook content and basic examples run on local workstations, while intensive simulation and AI tasks can leverage cloud GPU instances. This balances accessibility with performance requirements.

**Alternatives considered**:
- Pure on-prem: Full control but higher CapEx and maintenance
- Pure cloud: Better scalability but higher OpEx and potential latency issues
- Hybrid: Best balance of cost, performance, and accessibility

## Decision: Docusaurus Architecture
**Rationale**: Structure the textbook with a clear progression from foundations to advanced topics, with each chapter containing executable code examples, diagrams, and practical exercises. Implement modular organization that allows for independent study of specific topics.

**Alternatives considered**:
- Linear textbook structure: Simple but less flexible for different course needs
- Modular structure: Allows flexible curriculum design and independent topic study
- Hierarchical structure: Enables progressive learning with clear dependencies
# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

**Feature**: 001-textbook-ai-robotics
**Date**: 2025-12-10

## Prerequisites

Before working with the Physical AI & Humanoid Robotics textbook content, ensure you have:

### System Requirements
- **Operating System**: Ubuntu 22.04 LTS (recommended) or Windows 10/11 with WSL2
- **RAM**: 16GB minimum, 32GB recommended
- **Storage**: 50GB free space
- **GPU**: NVIDIA GPU with CUDA support (RTX 3060 or better recommended)
- **Processor**: Multi-core processor (Intel i7 or AMD Ryzen 7 or better)

### Software Dependencies
1. **Git**: Version control system
2. **Node.js**: v18 or higher for Docusaurus
3. **ROS 2**: Humble Hawksbill (Ubuntu) or pre-built binaries
4. **Python**: 3.8 or higher
5. **Docker**: For containerized environments (optional but recommended)

## Setting Up the Textbook Environment

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Docusaurus Dependencies
```bash
cd docusaurus
npm install
```

### 3. Set Up ROS 2 Environment
```bash
# For Ubuntu with ROS 2 Humble
sudo apt update
sudo apt install ros-humble-desktop
source /opt/ros/humble/setup.bash
```

### 4. Set Up Isaac Sim (Optional but Recommended)
1. Download Isaac Sim from NVIDIA Developer website
2. Follow installation instructions for your platform
3. Verify installation by launching Isaac Sim

### 5. Set Up Simulation Environments
```bash
# Install Gazebo Garden
sudo apt install ros-humble-gazebo-*

# Install required Python packages
pip3 install rclpy geometry_msgs sensor_msgs
```

## Building and Running the Textbook

### 1. Start Docusaurus Development Server
```bash
cd docusaurus
npm start
```
The textbook will be available at `http://localhost:3000`

### 2. Building for Production
```bash
npm run build
```

### 3. Serving Production Build
```bash
npm run serve
```

## Working with Code Examples

### 1. ROS 2 Code Examples
Most code examples in the textbook use ROS 2 Python clients (rclpy). To run them:

```bash
# Source ROS 2 environment
source /opt/ros/humble/setup.bash

# Navigate to the example directory
cd examples/ros2-basics

# Create and build ROS 2 package
colcon build --packages-select <package-name>
source install/setup.bash

# Run the example
ros2 run <package-name> <executable-name>
```

### 2. Isaac Sim Examples
Isaac Sim examples typically use the Isaac ROS bridge. Ensure Isaac Sim is running before executing:

```bash
# In Isaac Sim, ensure the ROS 2 bridge is enabled
# Run the Isaac ROS node
ros2 launch isaac_ros_<package> <launch-file>.py
```

## Hardware Integration Quickstart

### 1. Jetson Setup
1. Flash Jetson Orin NX/ Nano with appropriate OS
2. Install ROS 2 Humble on Jetson
3. Connect sensors (RealSense, IMU, etc.)
4. Verify sensor data streams

### 2. RealSense Integration
```bash
# Install RealSense2 ROS 2 package
sudo apt install ros-humble-realsense2-camera

# Launch RealSense node
ros2 launch realsense2_camera rs_launch.py
```

## Testing and Validation

### 1. Textbook Build Validation
```bash
npm run build
# Check for any build errors or warnings
```

### 2. Code Example Validation
Each chapter includes a validation script to test code examples:

```bash
# Navigate to chapter directory
cd examples/chapter-<n>
./validate-examples.sh
```

### 3. Simulation Validation
```bash
# Test Gazebo simulation
ros2 launch <package> test_simulation.launch.py

# Test Isaac Sim integration
# Follow the instructions in the respective chapter
```

## Troubleshooting Common Issues

### 1. Docusaurus Build Issues
- Clear npm cache: `npm cache clean --force`
- Delete node_modules: `rm -rf node_modules package-lock.json`
- Reinstall: `npm install`

### 2. ROS 2 Environment Issues
- Ensure ROS 2 environment is sourced: `source /opt/ros/humble/setup.bash`
- Check ROS 2 installation: `ros2 --version`
- Verify workspace: `source install/setup.bash`

### 3. GPU/CUDA Issues
- Verify CUDA installation: `nvidia-smi`
- Check CUDA version: `nvcc --version`
- Ensure Isaac Sim requirements are met

## Next Steps

1. Read the **Introduction** chapter to understand the textbook structure
2. Complete the **ROS 2 Foundations** module to establish core concepts
3. Progress through modules following the recommended sequence
4. Practice with code examples and exercises
5. Work on the capstone project to integrate all concepts
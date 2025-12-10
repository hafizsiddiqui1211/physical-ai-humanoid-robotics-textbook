# Textbook API Contracts: Physical AI & Humanoid Robotics Textbook

**Feature**: 001-textbook-ai-robotics
**Date**: 2025-12-10
**Version**: 1.0

## Overview

This document defines the contracts for the various interfaces and APIs that may be used in conjunction with the Physical AI & Humanoid Robotics textbook. These contracts ensure consistency and interoperability between different systems and components referenced in the textbook.

## ROS 2 Interface Contracts

### Publisher/Subscriber Contract
**Purpose**: Standard interface for ROS 2 publisher-subscriber communication

**Message Format**:
```
std_msgs/Header header
string data
```

**Publisher Requirements**:
- Publish at specified frequency (e.g., 10Hz, 50Hz)
- Include timestamp in header
- Handle connection callbacks gracefully

**Subscriber Requirements**:
- Process messages in real-time
- Handle message queuing appropriately
- Implement timeout mechanisms

### Service Contract
**Purpose**: Standard interface for ROS 2 service requests

**Request Format**:
```
string command
bool async
```

**Response Format**:
```
bool success
string message
int32 error_code
```

**Service Requirements**:
- Respond within specified timeout (default: 5 seconds)
- Return appropriate error codes
- Handle concurrent requests

## Isaac ROS Bridge Contracts

### Perception Pipeline Contract
**Purpose**: Interface for Isaac ROS perception nodes

**Input Topics**:
- `/rgb/image_raw` (sensor_msgs/Image)
- `/depth/image_raw` (sensor_msgs/Image)
- `/camera_info` (sensor_msgs/CameraInfo)

**Output Topics**:
- `/isaac_ros/detections` (vision_msgs/Detection2DArray)
- `/isaac_ros/depth_map` (sensor_msgs/Image)

**Performance Requirements**:
- Process at minimum 10 FPS for real-time applications
- Maintain <50ms latency for critical operations

## Simulation Interface Contracts

### Gazebo Model Interface
**Purpose**: Standard interface for interacting with Gazebo robot models

**Services**:
- `/gazebo/get_model_state` - Get model position and orientation
- `/gazebo/set_model_state` - Set model position and orientation
- `/gazebo/apply_joint_effort` - Apply forces to joints

**Topics**:
- `/joint_states` - Joint position, velocity, effort
- `/tf` and `/tf_static` - Transform data

### Isaac Sim Interface
**Purpose**: Interface for Isaac Sim robot control and sensor data

**Topics**:
- `/isaac_sim/robot_state` - Robot state information
- `/isaac_sim/sensor_data` - Combined sensor readings
- `/isaac_sim/robot_cmd` - Robot command interface

## Hardware Interface Contracts

### RealSense Camera Interface
**Purpose**: Standard interface for Intel RealSense camera data

**Topics**:
- `/camera/color/image_raw` (sensor_msgs/Image)
- `/camera/depth/image_rect_raw` (sensor_msgs/Image)
- `/camera/aligned_depth_to_color/image_raw` (sensor_msgs/Image)

**Parameters**:
- `depth_units`: Depth measurement units (default: meters)
- `color_format`: Color format (default: RGB8)

### Jetson Hardware Interface
**Purpose**: Interface for Jetson-specific hardware components

**Topics**:
- `/jetson/telemetry` - System telemetry (temperature, power, etc.)
- `/jetson/gpu_status` - GPU utilization and memory
- `/jetson/fan_speed` - Fan control interface

## VLA (Vision-Language-Action) Interface Contract

### Voice Command Interface
**Purpose**: Interface for processing voice commands and converting to robotic actions

**Input**:
- `/voice/command` (std_msgs/String) - Voice command as text

**Output**:
- `/vla/action_plan` (std_msgs/String) - Generated action plan
- `/vla/execution_status` (std_msgs/String) - Execution status

**Processing Pipeline**:
1. Voice recognition → Text
2. LLM processing → Action plan
3. Action plan → ROS 2 commands
4. Execution monitoring → Status feedback

## Data Format Contracts

### Robot State Message
```
Header header
geometry_msgs/Pose pose
geometry_msgs/Twist twist
sensor_msgs/JointState joint_states
```

### Sensor Data Aggregation
```
Header header
sensor_msgs/PointCloud2 pointcloud
sensor_msgs/Image rgb_image
sensor_msgs/Image depth_image
sensor_msgs/Imu imu_data
geometry_msgs/Vector3Stamped velocity
```

## Error Handling Contracts

### Standard Error Response
```
bool success
string error_message
int32 error_code
string error_timestamp
```

**Error Codes**:
- 0: Success
- 1: General error
- 2: Timeout error
- 3: Invalid parameters
- 4: Hardware fault
- 5: Communication error
- 6: Processing error
- 7: Resource unavailable

## Performance Contracts

### Latency Requirements
- Sensor data processing: <50ms
- Command execution: <100ms
- Perception pipeline: <200ms
- Planning pipeline: <500ms

### Throughput Requirements
- Sensor data: Minimum 10Hz for critical sensors
- Control commands: Minimum 50Hz for real-time control
- State updates: Minimum 10Hz for monitoring

## Safety Contracts

### Emergency Stop Interface
**Topic**: `/emergency_stop` (std_msgs/Bool)
- Setting to `true` immediately stops all robot motion
- All actuators return to safe state
- System remains in emergency state until reset

### Safety Limit Interface
**Service**: `/set_safety_limits`
- Define operational boundaries for position, velocity, acceleration
- Automatic enforcement of limits
- Override mechanisms for authorized users only
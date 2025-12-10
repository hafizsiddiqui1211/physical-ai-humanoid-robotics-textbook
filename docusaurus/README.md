# Physical AI & Humanoid Robotics Textbook

This is a comprehensive textbook on Physical AI and Humanoid Robotics, built with Docusaurus. The textbook covers foundational concepts through advanced topics including Vision-Language-Action systems, simulation-to-real transfer, and humanoid robotics.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Content Structure](#content-structure)
- [Contributing](#contributing)
- [License](#license)

## About

This textbook provides a comprehensive guide to Physical AI, Embodied Intelligence, and Humanoid Robotics. It covers:

- Foundational concepts in Physical AI and embodied intelligence
- Robotic systems architecture using ROS 2
- Simulation environments (Isaac Sim, Gazebo, Unity)
- AI perception and navigation systems
- Humanoid robotics kinematics and control
- Vision-Language-Action (VLA) systems
- Simulation-to-real transfer methodologies
- Capstone project integrating all concepts

## Features

- Comprehensive coverage from fundamentals to advanced topics
- Integration with modern robotics frameworks (ROS 2, Isaac ROS)
- Simulation-to-real transfer handbook
- Practical code examples and exercises
- Assessment criteria and evaluation framework
- Responsive design for multiple device types

## Installation

1. Make sure all of the following requirements are met:
   - [Node.js](https://nodejs.org/en/download/) version 18.0 or higher
   - [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

2. Install dependencies:
   ```bash
   npm install
   ```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:
```bash
USE_SSH=true npm run deploy
```

Not using SSH:
```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Content Structure

The textbook is organized into the following sections:

- **Foundations**: Core concepts in Physical AI and embodied intelligence
- **Systems**: Robotic systems architecture and ROS 2 integration
- **Simulation**: Digital twin environments and simulation frameworks
- **AI & Perception**: Perception systems and navigation algorithms
- **Humanoid Robotics**: Kinematics, dynamics, and locomotion control
- **Vision-Language-Action**: Multi-modal AI systems
- **Capstone Project**: Integration of all concepts with assessment criteria

## Contributing

We welcome contributions to improve this textbook! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the terms specified in the project's license file.
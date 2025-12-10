// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Foundations',
      items: [
        'foundations/physical-ai',
        'foundations/embodied-intelligence',
        'foundations/robotics-basics',
      ],
    },
    {
      type: 'category',
      label: 'Systems',
      items: [
        'systems/ros2-nervous-system',
        'systems/sensor-integration',
        'systems/actuator-control',
      ],
    },
    {
      type: 'category',
      label: 'Simulation',
      items: [
        'simulation/digital-twin-gazebo',
        'simulation/digital-twin-isaac',
        'simulation/digital-twin-unity',
      ],
    },
    {
      type: 'category',
      label: 'AI & Perception',
      items: [
        'ai/isaac-ros-pipelines',
        'ai/slam-navigation',
        'ai/perception-manipulation',
      ],
    },
    {
      type: 'category',
      label: 'Humanoid Robotics',
      items: [
        'humanoid/kinematics-dynamics',
        'humanoid/locomotion-control',
        'humanoid/humanoid-architectures',
      ],
    },
    {
      type: 'category',
      label: 'Vision-Language-Action',
      items: [
        'vla/vision-language-action',
        'vla/voice-to-action',
        'vla/llm-robotics',
      ],
    },
    {
      type: 'category',
      label: 'Capstone Project',
      items: [
        'capstone/capstone-project',
        'capstone/sim-to-real-handbook',
        'capstone/assessment-criteria',
      ],
    },
  ],
};

export default sidebars;
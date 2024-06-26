import React from 'react'; // Import React for JSX syntax
import { Meta, StoryObj } from '@storybook/react'; // Import types for Storybook

import Light from './Light'; // Import your Light component

export default {
  title: 'Light', // Descriptive title for the component section
  component: Light, // Reference to your Light component

  // Optional argTypes for interactive controls (adjust based on your component's props)
  // argTypes: {
  //   color: { control: 'color' }, // Example control type for color prop
  // },
} as Meta<React.FC<LightProps>>; // Explicit type declaration for props

// Separate story definition (optional, but improves code organization)
type LightProps = React.ComponentProps<typeof Light>; // Define props type
type Story = StoryObj<Meta<React.FC<LightProps>>>; // Type for individual stories

export const Base: Story = {
  args: {}, // No arguments needed for the base story
};

// Define more stories for different light variations (optional)
export const RedLight: Story = {
  args: {
    color: 'red', // Example prop for red light variation
  },
};

// ... add more stories as needed

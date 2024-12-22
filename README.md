# Yu-Gi-Oh Game

A web-based Yu-Gi-Oh card game implementation using React, TypeScript, and Tailwind CSS.

## Features

- **Turn-Based Gameplay**

  - Players alternate turns
  - Each turn consists of multiple phases (Draw, Standby, Main1, Battle, Main2, End)
  - One card draw per turn limit
  - Turn-based card visibility system

- **Card Management**

  - Drag and drop card placement
  - Hand card visualization
  - Card preview on selection
  - Deck management
  - Card state tracking (hand, field, graveyard)

- **Game State**

  - Life points tracking
  - Round system
  - Phase management
  - Player turns
  - Card visibility states

- **User Interface**
  - Responsive design
  - Interactive game board
  - Visual feedback for actions
  - Player profiles with avatars
  - Dynamic card previews

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React DnD (Drag and Drop)
- Vite

## Project Structure

- src/components: React components
- src/constants: Constants and data
- src/contexts: Contexts for state management
- src/hooks: Custom hooks
- src/pages: React pages
- src/utils: Utility functions
- src/assets: Images and other assets
- src/styles: Global styles and Tailwind configuration
- src/types: TypeScript types
- src/index.tsx: Entry point for the application
- src/main.tsx: Main entry point for the application
- src/tailwind.css: Tailwind CSS configuration
- src/index.css: Global styles

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server

### Adding New Features

1. **New Card Types**

   - Add card type to `CardType` enum
   - Update card validation logic
   - Add corresponding UI components

2. **Game Mechanics**
   - Add new action types to `Action` type
   - Implement reducer logic in `useGameState.ts`
   - Create UI components for new mechanics

## License

This project is licensed under the MIT License - see the LICENSE file for details

# Guess My Number - Project Overview

## What this project is
This is an Expo + React Native mobile app where:
- The user picks a number between `1` and `99`
- The app (phone) tries to guess that number
- The user guides each guess with `lower` or `higher`
- The game ends when the app guesses correctly

## Tech stack
- React Native `0.81.5`
- Expo SDK `~54.0.33`
- React `19.1.0`
- `expo-font` for custom fonts
- `expo-linear-gradient` for app background styling
- `react-native-safe-area-context` for safe layout handling

## Run the project
1. Install dependencies:
```bash
npm install
```
2. Start Expo:
```bash
npm start
```
3. Run target platform:
```bash
npm run android
# or
npm run ios
# or
npm run web
```

## Project structure
```text
.
|- App.js
|- app.json
|- babel.config.js
|- constants/
|  `- colors.js
|- screens/
|  |- StartGameScreen.js
|  |- GameScreen.js
|  `- GameOverScreen.js
|- components/
|  |- ui/
|  |  |- Title.js
|  |  |- PrimaryButton.js
|  |  |- InstructionText.js
|  |  `- Card.js
|  `- game/
|     |- NumberContainer.js
|     `- GuessLogItem.js
`- assets/
   |- fonts/
   |- images/
   `- app icons/splash assets
```

## Core app flow
### 1) Start screen (`StartGameScreen`)
- User enters a number (`TextInput`, max 2 digits)
- Validation ensures value is between `1` and `99`
- Invalid input shows `Alert`
- On confirm, selected number is sent to `App.js`

### 2) Game screen (`GameScreen`)
- App generates guesses using:
  - `minBoundary` (initially `1`)
  - `maxBoundary` (initially `100`)
  - Random integer in `[minBoundary, maxBoundary)`
- User taps:
  - `-` for lower
  - `+` for greater
- Boundaries update each round
- A guess history list is rendered via `FlatList`
- If the app guess equals user number, `onGameOver(roundCount)` is fired

### 3) Game over screen (`GameOverScreen`)
- Shows final result:
  - total rounds
  - selected user number
- Displays success image
- `Start New Game` resets state and starts another round

## Main state management (`App.js`)
`App.js` controls app-level state:
- `userNumber`: number chosen by the user
- `gameIsOver`: controls screen switching
- `roundsNumber`: number of rounds used by the app

Screen routing is done with conditional rendering (no navigation library).

## Styling and UI system
- Centralized colors in `constants/colors.js`
- Reusable UI primitives:
  - `Title`
  - `PrimaryButton`
  - `InstructionText`
  - `Card`
- Reusable game components:
  - `NumberContainer` for current guess display
  - `GuessLogItem` for history rows
- Gradient + background image are applied in `App.js`
- App uses custom fonts:
  - `open-sans`
  - `open-sans-bold`

## Notes and observations
- Responsive behavior is implemented with `useWindowDimensions` in screens.
- Guess generation prevents immediate repeat of excluded value via recursive retry in `generateRandomBetween`.
- `GameScreen` tracks guess history newest-first.
- In `GameOverScreen`, image sizing logic currently sets:
  - `150` when width `< 380`
  - `80` when width `> 380`
  This looks unusually small on wider devices and may be unintended.

## Scripts from `package.json`
- `npm start` -> `expo start`
- `npm run android` -> `expo start --android`
- `npm run ios` -> `expo start --ios`
- `npm run web` -> `expo start --web`
- `npm run eject` -> `expo eject`

## Expo config (`app.json`) highlights
- App name/slug: `RNCourse`
- Uses `expo-font` plugin
- Includes icon/splash/adaptive icon/web favicon assets
- Default orientation and standard Expo asset bundle pattern


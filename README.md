# Architecture Structure

├── app
│   └── App.tsx
├── common
│   ├── components
│   │   ├── ItemSeparator
│   │   └── index.ts
│   ├── hooks
│   └── i18n
├── core
│   ├── constants.ts
│   ├── hooks
│   │   ├── index.ts
│   │   ├── useExercise.ts
│   │   └── useLevels.ts
│   └── types
│       ├── Exercise.ts
│       └── Level.ts
├── features
│   ├── account
│   ├── leadersboard
│   ├── learn
│   │   ├── exercise
│   │   └── levels
│   └── shop
└── navigation
    ├── index.tsx
    ├── routes.ts
    └── stacks
        └── AppNavigationStack.tsx

# Libraries

- @react-navigation/native
	- Used for screen stacks 
- Eslint
	- As a linter and formatter
- @react-native-firebase
	- Firebase integration
- react-native-config
	- Storing sensitive data in .env file. (API keys etc) 

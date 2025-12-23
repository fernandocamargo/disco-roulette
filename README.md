# Disco Roulette

<img width="1440" height="739" alt="Screenshot 2025-12-23 at 11 43 21" src="https://github.com/user-attachments/assets/174da5f7-e354-4700-b084-52d6d7cd8537" />

A web application that randomly selects vinyl records from a [Discogs](https://www.discogs.com/) user's collection and displays them with full-screen album artwork. Built as an interactive way to rediscover music from your collection.

## About This Project

[Discogs](https://www.discogs.com/) is a comprehensive music database and marketplace where users can catalog their physical music collections, including vinyl records, CDs, and cassettes. It's a vibrant community of collectors and music enthusiasts with detailed release information, marketplace features, and a robust public API.

This project was born from two motivations: the desire to experiment with the [Discogs API](https://www.discogs.com/developers) and solve a real problem I faced as a vinyl collector. Sometimes I'd stand in front of my record collection, unable to decide which album to listen to that day. Instead of endlessly browsing, I created this "shuffle" for physical records—a digital roulette wheel that randomly picks from my collection and displays it beautifully, making the decision for me.

## What It Does

Disco Roulette connects to the Discogs API to fetch a user's vinyl collection and randomly selects a release to display. Each selection shows:

- Full-screen album artwork as background
- Artist name(s) with links to Discogs profiles
- Album title with link to the release page
- Shuffle button to get a new random selection

The app preloads images before displaying them to ensure smooth transitions between selections.

## Live Demo

Navigate to `/{discogs-username}` to load any Discogs user's collection (e.g., `/pr0n`).

## Technologies Used

### Core Stack
- **[React](https://react.dev/) 17** - Functional components with [hooks](https://react.dev/reference/react/hooks)
- **[React Router](https://reactrouter.com/) 5** - Client-side routing
- **[Styled Components](https://styled-components.com/)** - [CSS-in-JS](https://cssinjs.org/) styling with scoped component styles
- **[Axios](https://axios-http.com/)** - HTTP client for [Discogs API](https://www.discogs.com/developers) integration

### State & Data Management
- **[Immutability-helper](https://github.com/kolodny/immutability-helper)** - Immutable state updates using reducer-like patterns
- **[Lodash](https://lodash.com/)** - Utility functions for safe data access and transformations

### Development
- **[Create React App](https://create-react-app.dev/)** - Build tooling and [webpack](https://webpack.js.org/) configuration
- **[ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)** - Code quality and consistent formatting
- **[EditorConfig](https://editorconfig.org/)** - Cross-editor consistency

## Architecture Highlights

### Component Structure
Each component follows a [composition pattern](https://react.dev/learn/passing-props-to-a-component#forwarding-props-with-the-jsx-spread-syntax) with three files:
- `index.js` - Component assembly
- `render.js` - React rendering logic
- `statics.js` - [PropTypes](https://www.npmjs.com/package/prop-types), displayName, defaultProps

### Custom Hooks Pattern
Business logic is abstracted into [custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks):
- `useDiscogs` - API client configuration
- `useGetFolders` - Fetch user's collection folders
- `useGetReleases` - Handle paginated release fetching
- `useGetRelease` - Fetch detailed release information

### Key Implementation Details

**Recursive Pagination**: Automatically follows Discogs API pagination links to fetch complete collections regardless of size.

**Image Preloading**: Uses native Image API with Promise wrappers to ensure artwork loads before rendering, preventing visual glitches.

**URL-based User Selection**: Extracts Discogs username from URL pathname, enabling multi-user support without authentication UI.

**Immutable State Updates**: State mutations use immutability-helper for predictable, debuggable state changes.

## Project Structure

```
src/
├── components/
│   ├── app/              # Main application logic and state
│   ├── root/             # Router wrapper
│   ├── style/            # Global styles
│   └── widgets/          # Reusable UI components
│       ├── artist/       # Artist display
│       ├── link/         # External link wrapper
│       └── release/      # Album card with artwork
└── hooks/
    ├── clients/
    │   └── discogs/      # Configured Axios instance
    └── services/
        └── collection/   # Data fetching hooks
```

## Installation & Setup

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

Navigate to `http://localhost:3000/{discogs-username}` to view a user's collection.

## Technical Notes

- Requires Node.js with `--openssl-legacy-provider` flag (configured in package.json)
- Uses path aliasing (`jsconfig.json`) for clean imports from `/src`
- Implements proper link security (rel="noreferrer noopener")
- Styled-components scoping prevents CSS conflicts

## My Collections

Want to see it in action? Check out my music collections:

- **[Discogs Collection](https://www.discogs.com/user/pr0n/collection)** - My vinyl and physical media collection
- **[Bandcamp Collection](https://bandcamp.com/deusmorto)** - My digital music collection and artist support

## Skills Demonstrated

- [React hooks](https://react.dev/reference/react/hooks) ([useState](https://react.dev/reference/react/useState), [useEffect](https://react.dev/reference/react/useEffect), [useCallback](https://react.dev/reference/react/useCallback), [useMemo](https://react.dev/reference/react/useMemo))
- [REST API](https://www.restapitutorial.com/) integration with pagination handling
- [Async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) patterns and [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) composition
- [CSS-in-JS](https://cssinjs.org/) with [styled-components](https://styled-components.com/)
- Component composition and reusability
- [Custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) for business logic separation
- Immutable state management patterns
- Modern [ES6+](https://www.w3schools.com/js/js_es6.asp) JavaScript

# React Flow Path Visualization

## Core Components

### App.tsx

The main component that assembles the flow chart using React Flow. It:

- Initializes nodes and edges from the path data
- Handles node/edge state management
- Renders the flow chart with background, minimap, and controls

### src/edges/index.ts

Handles edge creation and management:

- Defines the `PathNode` type structure
- Contains logic for creating edges between nodes
- Provides `createEdgesFromPath` to generate edges from a path array

### src/nodes/index.ts

Manages nodes and their layout:

- Defines the path data structure (account → group → role → resource)
- Provides `simpleAutoFlow` for automatic node positioning
- Contains `mapPathToNode` to transform path data into React Flow nodes
- Handles shared nodes across multiple paths

## Layout Logic

The `simpleAutoFlow` function positions nodes by:

- Spacing nodes horizontally based on their index in the path (using `horizontalGap`, default 200px)
- Vertically separating different paths (using `verticalGap`, default 150px)
- Reusing y-coordinates for shared nodes based on their first appearance in any path
  - When a node appears in multiple paths, it will always use the y-coordinate from its first occurrence
  - This helps maintain visual consistency and reduces crossing edges

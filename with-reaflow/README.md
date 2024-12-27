# Reaflow Path Visualization

## Implementation Overview

### Core Files

- `src/nodes/index.ts`: Defines the path data structure and node mapping logic

  - Maintains path definitions as arrays of connected entities (accounts, groups, roles, resources)
  - Handles deduplication of nodes that appear in multiple paths
  - Maps raw path data into Reaflow-compatible NodeData format

- `src/edges/index.ts`: Manages edge creation and relationships

  - Converts path sequences into edge connections
  - Creates unique edge IDs based on source and target nodes
  - Flattens multi-path relationships into a single edge collection

- `src/App.tsx`: Main visualization component
  - Configures the Reaflow Canvas with nodes and edges
  - Sets up right-to-left directional flow
  - Enables zooming and auto-fit functionality

## Layout System

Handled by Reaflow's built-in layout engine:

- Automatically positions nodes using a hierarchical layout
- Supports both vertical and horizontal flow directions
- Handles complex nested relationships

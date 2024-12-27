# Reaflow Path Visualization

## Core Components

### Canvas

The main visualization component that:

- Renders nodes and edges in a directed graph
- Handles automatic layout and positioning

### Node Components

Built-in node types for different visualization needs:

- `BaseNode`: Foundation node with basic styling and behavior
- `CustomNode`: Extensible node component for custom implementations
- Supports labels, icons, and custom content rendering

### Edge Components

Edge visualization options:

- `BaseEdge`: Standard directed edge with arrow
- Supports custom line styles, colors, and arrow markers
- Handles edge routing and path calculation

## Layout System

Handle by reawflow...
The layout engine:

- Automatically positions nodes using a hierarchical layout algorithm
- Supports both vertical and horizontal flow directions
- Handles complex nested relationships

import { useCallback } from 'react';
import { Background, Controls, MiniMap, ReactFlow, addEdge, useNodesState, useEdgesState, OnConnect } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { uniqueNodes as initialNodes, paths, nodeTypes } from './nodes';
import { edgeTypes, createEdgesFromPath } from './edges';

export default function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(paths.flatMap((path, pathIndex) => createEdgesFromPath(path, pathIndex)));
  const onConnect: OnConnect = useCallback((connection) => setEdges((edges) => addEdge(connection, edges)), [setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}

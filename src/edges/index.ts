import type { Node, Edge, EdgeTypes as XYFlowEdgeTypes } from '@xyflow/react';
import { mapPathToNode } from '../nodes';

export type PathNode = {
  id: string;
  name: string;
  type: string;
};

export function createEdgeFromNodes(fromNode: Node, toNode: Node): Edge {
  return {
    id: `${fromNode.id}-${toNode.id}`,
    source: fromNode.id,
    target: toNode.id,
    animated: false,
  };
}

export const createEdgesFromPath = (path: PathNode[], pathIndex: number): Edge[] => {
  return path
    .slice(0, -1)
    .map((node, index) =>
      createEdgeFromNodes(mapPathToNode(node, index, path, pathIndex), mapPathToNode(path[index + 1], index + 1, path, pathIndex))
    );
};

export const edgeTypes: XYFlowEdgeTypes = {};

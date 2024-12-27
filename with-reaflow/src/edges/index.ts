import { EdgeData, NodeData } from 'reaflow';
import { mapPathToNode, paths } from '../nodes';

export type PathNode = {
  id: string;
  name: string;
  type: string;
};

export function createEdgeFromNodes(fromNode: NodeData, toNode: NodeData): EdgeData {
  return {
    id: `${fromNode.id}-${toNode.id}`,
    from: fromNode.id,
    to: toNode.id,
  };
}

export const createEdgesFromPath = (paths: PathNode[][]) => {
  return paths.flatMap((path) => path.slice(0, -1).map((node, index) => createEdgeFromNodes(node, path[index + 1])));
};

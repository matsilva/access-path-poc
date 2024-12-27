import type { Node, NodeTypes as XYFlowNodeTypes, BuiltInNode } from '@xyflow/react';
import { PathNode } from '../edges';

export type AppNode = BuiltInNode;

export const paths = [
  // directly assigned path
  [
    {
      id: '1',
      name: 'jwilliams@akaidentity.io',
      type: 'account',
    },
    {
      id: '2',
      name: 'Zoom App Role',
      type: 'role',
    },
    {
      id: '3',
      name: 'Zoom',
      type: 'resource',
    },
  ],
  // path through a group
  [
    {
      id: '1',
      name: 'jwilliams@akaidentity.io',
      type: 'account',
    },
    {
      id: '6',
      name: 'All Employees',
      type: 'group',
    },
    {
      id: '2',
      name: 'Zoom App Role',
      type: 'role',
    },
    {
      id: '3',
      name: 'Zoom',
      type: 'resource',
    },
  ],
  // path through multiple groups
  [
    {
      id: '1',
      name: 'jwilliams@akaidentity.io',
      type: 'account',
    },
    {
      id: '7',
      name: 'Engineering',
      type: 'group',
    },
    {
      id: '8',
      name: 'Tech Leads',
      type: 'group',
    },
    {
      id: '4',
      name: 'Admin Role',
      type: 'role',
    },
    {
      id: '5',
      name: 'GitHub',
      type: 'resource',
    },
  ],
];

export function simpleAutoFlow(index: number, pathIndex: number) {
  const verticalGap = 150;
  const horizontalGap = 200;

  const currentNodeId = paths[pathIndex][index].id;

  const isSharedNode = paths.some((path, otherPathIndex) => pathIndex !== otherPathIndex && path.some((node) => node.id === currentNodeId));

  return {
    x: index * horizontalGap,
    y: isSharedNode ? 0 : pathIndex * verticalGap,
  };
}

export function mapPathToNode(pathItem: PathNode, index: number, array: PathNode[], pathIndex: number) {
  return {
    id: pathItem.id,
    type: index === 0 ? 'input' : index === array.length - 1 ? 'output' : undefined,
    position: simpleAutoFlow(index, pathIndex),
    data: { label: pathItem.name },
    sourcePosition: 'right',
    targetPosition: 'left',
  } as Node;
}

export const uniqueNodes: Node[] = Array.from(
  new Map(
    paths
      .flatMap((path: any[], pathIndex: number) => path.map((item, index, array) => mapPathToNode(item, index, array, pathIndex)))
      .map((node: { id: any }) => [node.id, node])
  ).values()
) as Node[];

export const nodeTypes: XYFlowNodeTypes = {};

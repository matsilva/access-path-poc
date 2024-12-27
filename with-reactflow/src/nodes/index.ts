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
      id: '4',
      name: 'SaaS Apps User',
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
      id: '6',
      name: 'All Employees',
      type: 'group',
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
      name: 'SaaS Apps User',
      type: 'role',
    },
    {
      id: '3',
      name: 'Zoom',
      type: 'resource',
    },
  ],
];

export function simpleAutoFlow(
  index: number,
  pathIndex: number,
  paths: Array<Array<{ id: string }>>,
  options = { verticalGap: 150, horizontalGap: 200 }
) {
  const currentNodeId = paths[pathIndex][index].id;

  // Find the first path index where this node appears
  const firstPathIndex = paths.findIndex((path) => path.some((node) => node.id === currentNodeId));

  return {
    x: index * options.horizontalGap,
    y: firstPathIndex === pathIndex ? pathIndex * options.verticalGap : firstPathIndex * options.verticalGap,
  };
}

export function mapPathToNode(pathItem: PathNode, index: number, array: PathNode[], pathIndex: number) {
  return {
    id: pathItem.id,
    type: index === 0 ? 'input' : index === array.length - 1 ? 'output' : undefined,
    position: simpleAutoFlow(index, pathIndex, paths),
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

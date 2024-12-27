import { PathNode } from '../edges';
import { NodeData, NodeProps } from 'reaflow';

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

export function mapPathToNode(pathItem: PathNode): NodeData {
  return {
    id: pathItem.id,
    text: pathItem.name,
  };
}

export const uniqueNodes: NodeData[] = Array.from(
  new Map(paths.flatMap((path: any[]) => path.map(mapPathToNode)).map((node: { id: any }) => [node.id, node])).values()
) as NodeData[];

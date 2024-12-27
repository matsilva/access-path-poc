import { Canvas } from 'reaflow';

import { uniqueNodes, paths } from './nodes';
import { createEdgesFromPath } from './edges';

export default function App() {
  return (
    <Canvas
      maxWidth={1400}
      maxHeight={500}
      nodes={uniqueNodes}
      edges={createEdgesFromPath(paths)}
      direction="RIGHT"
      fit={true}
      zoomable={true}
    />
  );
}

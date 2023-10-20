import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls
} from "reactflow";
import "reactflow/dist/style.css";

import initialNodes from "./nodes";
import initialEdges from "./edges";

const rfStyle = {
  backgroundColor: "#dfdfdf",
};

import CustomEdgeStartEnd from "./component/CustomEdgeStartEnd";
import CustomEdgeStartEnd1 from "./component/CustomEdgeStartEnd1";
import ResourceContainer from "./component/ResourceContainer";

const edgeTypes = {
  "start-end": CustomEdgeStartEnd,
  "start-end1": CustomEdgeStartEnd1,
};

const nodeTypes = {
  "resource-container": ResourceContainer,
};

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        style={rfStyle}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        attributionPosition="top-right"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;

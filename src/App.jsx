import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";

import initialNodes from "./nodes";
import initialEdges from "./edges";

const rfStyle = {
  backgroundColor: "#dfdfdf",
};

import CustomEdgeStartEnd from "./component/CustomEdgeStartEnd";
import CustomEdgeStartEnd1 from "./component/CustomEdgeStartEnd1";
import CustomEdgeStartEnd2 from "./component/CustomEdgeStartEnd2";
import CustomEdgeStartEnd3 from "./component/CustomEdgeStartEnd3";
import CustomEdgeStartEnd4 from "./component/CustomEdgeStartEnd4";

import ResourceContainer from "./component/ResourceContainer";

const edgeTypes = {
  "start-end": CustomEdgeStartEnd,
  "start-end1": CustomEdgeStartEnd1,
  "start-end2": CustomEdgeStartEnd2,
  "start-end3": CustomEdgeStartEnd3,
  "start-end4": CustomEdgeStartEnd4,
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

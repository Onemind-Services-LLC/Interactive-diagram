import React, { FC } from "react";
import { getBezierPath, EdgeLabelRenderer, BaseEdge } from "reactflow";

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={{ stroke: "#19cbb1" }} />
      <EdgeLabelRenderer>
        {data.startLabel && (
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, 0%) translate(${sourceX}px,${sourceY}px)`,
              padding: "1px 2px",
              fontSize: 10,
              fontWeight: 700,
              border: "1px solid #19cbb1",
              color: "#19cbb1",
              background: "#fff",
              borderRadius: "4px",
            }}
            className="nodrag nopan"
          >
            {data.startLabel}
          </div>
        )}
        {data.centerLabel && (
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              padding: "1px 4px",
              fontSize: 10,
              fontWeight: 700,
              color: "#fff",
              background: "#19cbb1",
            }}
            className="nodrag nopan"
          >
            {data.centerLabel}
          </div>
        )}
        {data.endLabel && (
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -100%) translate(${targetX}px,${targetY}px)`,
              padding: "1px 2px",
              fontSize: 10,
              borderRadius: "4px",
              fontWeight: 700,
              border: "1px solid #19cbb1",
              color: "#19cbb1",
              background: "#fff",
            }}
            className="nodrag nopan"
          >
            {data.endLabel}
          </div>
        )}
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;

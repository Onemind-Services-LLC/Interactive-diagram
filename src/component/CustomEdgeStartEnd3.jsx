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
  const startLabelX = labelX - (labelX - sourceX) * 0.73;
  const startLabelY = labelY - (labelY - sourceY) * 0.73;

  const endLabelX = labelX - (labelX - targetX) * 0.55;
  const endLabelY = labelY - (labelY - targetY) * 0.55;

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={{ stroke: "#e98017" }} />
      <EdgeLabelRenderer>
        {data.startLabel && (
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${startLabelX}px, ${startLabelY}px)`,
              padding: "1px 2px",
              fontSize: 10,
              borderRadius: "4px",
              fontWeight: 700,
              border: "1px solid #e98017",
              color: "#e98017",
              background: "#fff",
            }}
            className="nodrag nopan"
          >
            {data.startLabel}
          </div>
        )}
        {data.endLabel && (
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${endLabelX}px, ${endLabelY}px)`,
              padding: "1px 2px",
              fontSize: 10,
              borderRadius: "4px",
              fontWeight: 700,
              border: "1px solid #e98017",
              color: "#e98017",
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

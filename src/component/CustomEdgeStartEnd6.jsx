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
  const startLabelX = labelX - (labelX - sourceX) * 0.55;
  const startLabelY = labelY - (labelY - sourceY) * 0.55;
  const endLabelX = labelX - (labelX - targetX) * 0.6;
  const endLabelY = labelY - (labelY - targetY) * 0.6;
  const endLabelX1 = labelX - (labelX - targetX) * 0.85;
  const endLabelY1 = labelY - (labelY - targetY) * 0.85;

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={{ stroke: "#838a91" }} />
      <EdgeLabelRenderer>
        {data.startLabel && (
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${startLabelX}px, ${
                startLabelY + 10
              }px)`,
              padding: "1px 2px",
              fontSize: 10,
              borderRadius: "4px",
              fontWeight: 700,
              border: "1px solid #838a91",
              color: "#838a91",
              background: "#fff",
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
              transform: `translate(-50%, -50%) translate(${endLabelX}px, ${
                endLabelY - 20
              }px)`,
              padding: "1px 2px",
              fontSize: 10,
              borderRadius: "4px",
              fontWeight: 700,
              border: "1px solid #838a91",
              color: "#838a91",
              background: "#fff",
            }}
            className="nodrag nopan"
          >
            {data.endLabel}
          </div>
        )}
        {data.centerLabel1 && (
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${endLabelX1}px, ${
                endLabelY1 - 10
              }px)`,
              padding: "1px 4px",
              fontSize: 10,
              fontWeight: 700,
              color: "#fff",
              background: "#19cbb1",
            }}
            className="nodrag nopan"
          >
            {data.centerLabel1}
          </div>
        )}
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;

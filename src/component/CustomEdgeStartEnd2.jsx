import React, { FC } from "react";
import { getBezierPath, EdgeLabelRenderer, BaseEdge } from "reactflow";

function EdgeLabel({ transform, label }) {
  return (
    <div
      style={{
        position: "absolute",
        // background: "transparent",
        padding: "3px 4px",
        borderRadius: "4px",
        border: "1px solid #318bb6",
        color: "#318bb6",
        background: "#fff",
        fontSize: 8,
        fontWeight: 700,
        transform,
      }}
      className="nodrag nopan"
    >
      {label}
    </div>
  );
}

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
      <BaseEdge id={id} path={edgePath} style={{ stroke: "#318bb6" }} />
      <EdgeLabelRenderer>
        {data.startLabel && (
          <EdgeLabel
            transform={`translate(-50%, 0%) translate(${sourceX}px,${sourceY}px)`}
            label={data.startLabel}
          />
        )}
        {data.endLabel && (
          <EdgeLabel
            transform={`translate(-50%, -100%) translate(${targetX}px,${targetY}px)`}
            label={data.endLabel}
          />
        )}
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;

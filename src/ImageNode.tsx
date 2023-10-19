// ImageNode.tsx
import { Box, Text } from "@chakra-ui/react";
import { Handle, Position } from "reactflow";

const ImageNode = ({ data, isConnectable }) => {
  return (
    <div>
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <img
          src={data.image.url}
          alt={data.image.alt}
          width={data.image.width || 200}
          height="150"
        />
      </Box>
      {data.content === "vSmart1" && (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"2px"}
        >
          <Box
            display={"inline-block"}
            width={"7px"}
            height={"7px"}
            background={"black"}
          ></Box>
          <Text display={"inline-block"} fontSize={"sm"}>
            vSmart-1
          </Text>
        </Box>
      )}
      {data.content === "vSmart2" && (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"2px"}
        >
          <Box
            display={"inline-block"}
            width={"7px"}
            height={"7px"}
            background={"black"}
          ></Box>
          <Text display={"inline-block"} fontSize={"sm"}>
            vSmart-2
          </Text>
        </Box>
      )}
      {data.content === "server" && (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"2px"}
        >
          <Box
            display={"inline-block"}
            width={"7px"}
            height={"7px"}
            background={"black"}
          ></Box>
          <Text display={"inline-block"} fontSize={"sm"}>
            SW
          </Text>
        </Box>
      )}
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default ImageNode;

import { useCallback } from "react";
import { Box } from "@chakra-ui/react";

import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";

import ImageNode from "./ImageNode";

const nodeTypes = {
  imageNode: ImageNode,
};

const initialNodes = [
  {
    id: "GrayContainer",
    position: {
      x: 0,
      y: 0,
    },
    data: {
      label: "",
    },
    style: {
      position: "relative",
      width: "96%",
      height: "96vh",
      background: "#dfdfdf",
      margin: "2vh 2%",
      border: "1px solid #c9c9c9",
      boxSizing: "border-box",
      borderRadius: "7px",
    },
    draggable: false,
    targetPosition: "center",
  },
  {
    //? pink Container1
    id: "PinkContainer",
    position: {
      x: 0,
      y: 0,
    },
    data: {
      label: "",
    },
    style: {
      position: "absolute",
      top: "50%",
      left: "1%",
      width: "20%",
      height: "13vh",
      background: "#ffbbff",
      margin: "2vh 2%",
      border: "1px solid #efa3ef",
      boxSizing: "border-box",
      borderRadius: "7px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "translate(-1% , -50%)",
    },
    draggable: true,
    parentNode: "GrayContainer",
    extent: "parent",
  },
  {
    id: "PinkContainer-1",
    position: {
      x: 1,
      y: 1,
    },
    data: {
      label: "",
    },
    style: {
      position: "absolute",
      top: "50%",
      left: "1.5%",
      width: "5.5%",
      height: "9vh",
      background: "#ffffae",
      margin: "2vh 2%",
      border: "1px solid #ffffae",
      boxSizing: "border-box",
      borderRadius: "7px",
      transform: "translate(-1.5% , -50%)",
    },
    parentNode: "PinkContainer",
    extent: "parent",
  },
  {
    id: "PinkContainer-1-Image",
    position: {
      x: 1,
      y: 1,
    },
    type: "imageNode",
    data: {
      image: {
        url: "/vSmartYellowBg.png",
        alt: "vSmart Image",
      },
      content: "vSmart1",
    },
    isConnectable: false,
    style: {
      position: "absolute",
      top: "52%",
      left: "4.25%",
      width: "4%",
      transform: "translate(-2.75% , -50%)",
    },
    parentNode: "PinkContainer-1",
    extent: "parent",
  },
  {
    id: "PinkContainer-2",
    position: {
      x: 1,
      y: 1,
    },
    data: {
      label: "",
    },
    style: {
      position: "absolute",
      top: "50%",
      left: "14.6%",
      width: "5.5%",
      height: "9vh",
      background: "#b0ffb0",
      margin: "2vh 2%",
      border: "1px solid #b0ffb0",
      boxSizing: "border-box",
      borderRadius: "7px",
      transform: "translate(-1.5% , -50%)",
    },
    parentNode: "PinkContainer",
    extent: "parent",
  },
  {
    id: "PinkContainer-2-Image",
    position: {
      x: 1,
      y: 1,
    },
    type: "imageNode",
    data: {
      image: {
        url: "/vSmartGreenBg.png",
        alt: "vSmart Image",
        width: 55,
      },
      content: "vSmart2",
    },
    isConnectable: false,
    style: {
      position: "absolute",
      top: "52%",
      left: "17.75%",
      width: "5%",
      transform: "translate(-14.6% , -50%)",
    },
    parentNode: "PinkContainer",
    extent: "parent",
  },
  {
    id: "PinkContainer-3",
    position: {
      x: 1,
      y: 1,
    },
    data: {
      label: "10.1.1.0/24",
    },
    style: {
      position: "absolute",
      top: "55%",
      left: "10%",
      width: "5.5%",
      height: "3%",
      background: "#fff",
      border: "1px solid #fff",
      boxSizing: "border-box",
      borderRadius: "7px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "translate(-1.5% , -55%)",
    },
    parentNode: "PinkContainer",
    extent: "parent",
  },
  {
    id: "PinkContainer-4",
    position: {
      x: 1,
      y: 1,
    },
    data: {
      label: "SITE 251",
    },
    style: {
      position: "absolute",
      top: "49.5%",
      left: "10.2%",
      width: "5%",
      height: "3%",
      color: "white",
      background: "#54a1dc",
      border: "1px solid #54a1dc",
      boxSizing: "border-box",
      borderRadius: "7px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "translate(-10.5%% , -50%)",
    },
    parentNode: "PinkContainer",
    extent: "parent",
  },
  {
    //? pink Container1
    id: "PinkContainer1",
    position: {
      x: 0,
      y: 0,
    },
    data: {
      label: "",
    },
    style: {
      position: "absolute",
      top: "50%",
      right: "1%",
      width: "20%",
      height: "13vh",
      background: "#ffbbff",
      margin: "2vh 2%",
      border: "1px solid #efa3ef",
      boxSizing: "border-box",
      borderRadius: "7px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "translate(-1% , -50%)",
    },
    draggable: true,
    parentNode: "GrayContainer",
    extent: "parent",
  },
  {
    id: "PinkContainer1-1",
    position: {
      x: 1,
      y: 1,
    },
    data: {
      label: "",
    },
    style: {
      position: "absolute",
      top: "50%",
      right: "1.5%",
      width: "5.5%",
      height: "9vh",
      background: "#ffffae",
      margin: "2vh 2%",
      border: "1px solid #ffffae",
      boxSizing: "border-box",
      borderRadius: "7px",
      transform: "translate(-1.5% , -50%)",
    },
    parentNode: "PinkContainer1",
    extent: "parent",
  },
  {
    id: "PinkContainer1-1-Image",
    position: {
      x: 1,
      y: 1,
    },
    type: "imageNode",
    data: {
      image: {
        url: "/vSmartYellowBg.png",
        alt: "vSmart Image",
      },
      content: "vSmart1",
    },
    isConnectable: false,
    style: {
      position: "absolute",
      top: "52%",
      right: "4.25%",
      width: "4%",
      transform: "translate(-2.75% , -50%)",
    },
    parentNode: "PinkContainer1-1",
    extent: "parent",
  },
  {
    id: "PinkContainer1-2",
    position: {
      x: 1,
      y: 1,
    },
    data: {
      label: "",
    },
    style: {
      position: "absolute",
      top: "50%",
      right: "14.6%",
      width: "5.5%",
      height: "9vh",
      background: "#b0ffb0",
      margin: "2vh 2%",
      border: "1px solid #b0ffb0",
      boxSizing: "border-box",
      borderRadius: "7px",
      transform: "translate(-1.5% , -50%)",
    },
    parentNode: "PinkContainer1",
    extent: "parent",
  },
  {
    id: "PinkContainer1-2-Image",
    position: {
      x: 1,
      y: 1,
    },
    type: "imageNode",
    data: {
      image: {
        url: "/vSmartGreenBg.png",
        alt: "vSmart Image",
        width: 55,
      },
      content: "vSmart2",
    },
    isConnectable: false,
    style: {
      position: "absolute",
      top: "52%",
      right: "16%",
      width: "5%",
      transform: "translate(-14.6% , -50%)",
    },
    parentNode: "PinkContainer1",
    extent: "parent",
  },
  {
    id: "PinkContainer1-3",
    position: {
      x: 1,
      y: 1,
    },
    data: {
      label: "10.1.1.0/24",
    },
    style: {
      position: "absolute",
      top: "55%",
      right: "10%",
      width: "5.5%",
      height: "3%",
      background: "#fff",
      border: "1px solid #fff",
      boxSizing: "border-box",
      borderRadius: "7px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "translate(-1.5% , -55%)",
    },
    parentNode: "PinkContainer1",
    extent: "parent",
  },
  {
    id: "PinkContainer1-4",
    position: {
      x: 1,
      y: 1,
    },
    data: {
      label: "SITE 251",
    },
    style: {
      position: "absolute",
      top: "49.5%",
      right: "10.2%",
      width: "5%",
      height: "3%",
      color: "white",
      background: "#54a1dc",
      border: "1px solid #54a1dc",
      boxSizing: "border-box",
      borderRadius: "7px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "translate(-10.5%% , -50%)",
    },
    parentNode: "PinkContainer1",
    extent: "parent",
  },
  {
    id: "Server-1",
    position: {
      x: 1,
      y: 1,
    },
    type: "imageNode",
    data: {
      image: {
        url: "/server.jpg",
        alt: "server Image",
      },
      content: "server",
    },
    isConnectable: false,
    style: {
      position: "absolute",
      top: "77%",
      left: "9.25%",
      width: "4%",
      transform: "translate(-2.75% , -50%)",
    },
    parentNode: "PinkContainer-1",
    extent: "parent",
  },
  {
    id: "Server-2",
    position: {
      x: 0,
      y: 0,
    },
    type: "imageNode",
    data: {
      image: {
        url: "/server.jpg",
        alt: "server Image",
      },
      content: "server",
    },
    isConnectable: false,
    style: {
      position: "absolute",
      top: "77%",
      right: "9.25%",
      width: "4%",
      transform: "translate(-2.75% , -50%)",
    },
    parentNode: "PinkContainer-1",
    extent: "parent",
  },
];

const initialEdges = [
  { id: "ePinkContainer1-Server-2", source: "PinkContainer1", target: "Server-2" },
];

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        snapGrid={[20, 20]}
        nodeTypes={nodeTypes}
      >
        {/* <MiniMap /> */}
        <Controls />
        <Background />
      </ReactFlow>
    </Box>
  );
};

export default App;

const nodes = [
  //   {
  //     id: "A",
  //     type: "group",
  //     position: { x: 0, y: 0 },
  //     style: {
  //       width: 170,
  //       height: 140,
  //     },
  //   },
  //   {
  //     id: "A-1",
  //     type: "input",
  //     data: { label: "Child Node 1" },
  //     position: { x: 10, y: 10 },
  //     parentNode: "A",
  //     extent: "parent",
  //   },
  //   {
  //     id: "A-2",
  //     data: { label: "Child Node 2" },
  //     position: { x: 10, y: 90 },
  //     parentNode: "A",
  //     extent: "parent",
  //   },
  //   {
  //     id: "B",
  //     type: "output",
  //     position: { x: -100, y: 200 },
  //     data: null,
  //     style: {
  //       width: 170,
  //       height: 140,
  //       backgroundColor: "rgba(240,240,240,0.25)",
  //     },
  //   },
  //   {
  //     id: "B-1",
  //     data: { label: "Child 1" },
  //     position: { x: 50, y: 10 },
  //     parentNode: "B",
  //     extent: "parent",
  //     draggable: false,
  //     style: {
  //       width: 60,
  //     },
  //   },
  //   {
  //     id: "B-2",
  //     data: { label: "Child 2" },
  //     position: { x: 10, y: 90 },
  //     parentNode: "B",
  //     extent: "parent",
  //     draggable: false,
  //     style: {
  //       width: 60,
  //     },
  //   },
  //   {
  //     id: "B-3",
  //     data: { label: "Child 3" },
  //     position: { x: 100, y: 90 },
  //     parentNode: "B",
  //     extent: "parent",
  //     draggable: false,
  //     style: {
  //       width: 60,
  //     },
  //   },
  //   {
  //     id: "C",
  //     type: "output",
  //     position: { x: 100, y: 200 },
  //     data: { label: "Node C" },
  //   },

  //   Pink Container 1
  {
    id: "A",
    type: "output",
    position: { x: -425, y: 200 },
    data: { label: "Dummy" },
    style: {
      width: 250,
      height: 100,
      backgroundColor: "#ffbbffff",
      border: "1px solid #f898f8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  {
    id: "A-2",
    data: { label: "vSmart1" },
    position: { x: 10, y: 30 },
    parentNode: "A",
    extent: "parent",
    // draggable: false,
    style: {
      width: 60,
      backgroundColor: "#ffffae",
      border: "1px solid #ffe6cc",
    },
  },
  {
    id: "A-1",
    data: { label: "vSmart2" },
    position: { x: 180, y: 30 },
    parentNode: "A",
    extent: "parent",
    // draggable: false,
    style: {
      width: 60,
      backgroundColor: "#b0ffb0",
      border: "1px solid #b0ffb0",
    },
  },

  {
    id: "B",
    type: "output",
    data: { label: "SW" },
    position: { x: -350, y: 350 },
    style: {
      width: 60,
      backgroundColor: "#fff",
    },
  },

  //   Pink Container 2
  {
    id: "A_1",
    type: "output",
    position: { x: 325, y: 200 },
    data: { label: "Dummy" },
    style: {
      width: 250,
      height: 100,
      backgroundColor: "#ffbbffff",
      border: "1px solid #f898f8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  {
    id: "A_1-1",
    data: { label: "vSmart2" },
    position: { x: 180, y: 30 },
    parentNode: "A_1",
    extent: "parent",
    // draggable: false,
    style: {
      width: 60,
      backgroundColor: "#b0ffb0",
      border: "1px solid #b0ffb0",
    },
  },
  {
    id: "A_1-2",
    data: { label: "vSmart1" },
    position: { x: 10, y: 30 },
    parentNode: "A_1",
    extent: "parent",
    // draggable: false,
    style: {
      width: 60,
      backgroundColor: "#ffffae",
      border: "1px solid #ffe6cc",
    },
  },

  {
    id: "B_1", // pink container 2 - sw
    type: "output",
    data: { label: "SW" },
    position: { x: 400, y: 350 },
    style: {
      width: 60,
      backgroundColor: "#fff",
    },
  },

  //   Blue Container 1
  {
    id: "C_1",
    type: "output",
    position: { x: -200, y: 400 },
    data: { label: "Dummy Container 1" },
    style: {
      width: 150,
      height: 200,
      backgroundColor: "#cae4ff",
      border: "1px solid #5191d1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  {
    id: "C_1-1",
    data: { label: "vEdge-1" },
    position: { x: 40, y: 30 },
    parentNode: "C_1",
    extent: "parent",
    // draggable: false,
    style: {
      width: 70,
    },
  },
  {
    id: "C_1-2",
    data: { label: "Host-1" },
    position: { x: 40, y: 130 },
    parentNode: "C_1",
    extent: "parent",
    // draggable: false,
    style: {
      width: 70,
    },
  },
  //   Blue Container 2
  {
    id: "C_2",
    type: "output",
    position: { x: 0, y: 400 },
    data: { label: "Dummy Container 2" },
    style: {
      width: 150,
      height: 200,
      backgroundColor: "#cae4ff",
      border: "1px solid #5191d1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  {
    id: "C_2-1",
    data: { label: "vEdge-2" },
    position: { x: 40, y: 30 },
    parentNode: "C_2",
    extent: "parent",
    // draggable: false,
    style: {
      width: 70,
    },
  },
  {
    id: "C_2-2",
    data: { label: "Host-2" },
    position: { x: 40, y: 130 },
    parentNode: "C_2",
    extent: "parent",
    // draggable: false,
    style: {
      width: 70,
    },
  },
  //   Blue Container 3
  {
    id: "C_3",
    type: "output",
    position: { x: 200, y: 400 },
    data: { label: "Dummy Container 3" },
    style: {
      width: 150,
      height: 200,
      backgroundColor: "#cae4ff",
      border: "1px solid #5191d1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  {
    id: "C_3-1",
    data: { label: "vEdge-3" },
    position: { x: 40, y: 30 },
    parentNode: "C_3",
    extent: "parent",
    // draggable: false,
    style: {
      width: 70,
    },
  },
  {
    id: "C_3-2",
    data: { label: "Host-3" },
    position: { x: 40, y: 130 },
    parentNode: "C_3",
    extent: "parent",
    // draggable: false,
    style: {
      width: 70,
    },
  },

  //   Black Container
  {
    id: "D",
    type: "output",
    position: { x: -150, y: -0 },
    data: null,
    style: {
      width: 450,
      height: 220,
      backgroundColor: "#c9c9c9",
      border: "1px solid #c9c9c9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  {
    id: "D-1",
    data: null,
    position: { x: 50, y: 10 },
    parentNode: "D",
    extent: "parent",
    // draggable: false,
    style: {
      width: 350,
      height: 100,
      backgroundColor: "#ffdcb9",
      border: "1px solid #eba968",
    },
  },
  {
    id: "D-1-0",
    data: { label: "vManage-0" },
    position: { x: 135, y: 5 },
    parentNode: "D-1",
    extent: "parent",
    // draggable: false,
    style: {
      width: 80,
      backgroundColor: "#fff",
    },
  },
  {
    id: "D-1-1",
    data: { label: "vManage-1" },
    position: { x: 10, y: 30 },
    parentNode: "D-1",
    extent: "parent",
    // draggable: false,
    style: {
      width: 80,
      backgroundColor: "#fff",
    },
  },
  {
    id: "D-1-2",
    data: { label: "vManage-2" },
    position: { x: 135, y: 60 },
    parentNode: "D-1",
    extent: "parent",
    // draggable: false,
    style: {
      width: 80,
      backgroundColor: "#fff",
    },
  },
  {
    id: "D-1-3",
    data: { label: "vManage-3" },
    position: { x: 260, y: 30 },
    parentNode: "D-1",
    extent: "parent",
    // draggable: false,
    style: {
      width: 80,
      backgroundColor: "#fff",
    },
  },
  {
    id: "D-2",
    data: null,
    position: { x: 13, y: 120 },
    parentNode: "D",
    extent: "parent",
    // draggable: false,
    style: {
      width: 425,
      height: 50,
      backgroundColor: "#84d7ff",
      border: "1px solid #2d8bb8",
    },
  },
  {
    id: "D-2-1",
    data: { label: "vBond-1" },
    position: { x: 10, y: 7 },
    parentNode: "D-2",
    extent: "parent",
    // draggable: false,
    style: {
      width: 70,
      //   height: 50,
      backgroundColor: "#fff",
    },
  },
  {
    id: "D-2-2",
    data: { label: "vBond-2" },
    position: { x: 345, y: 7 },
    parentNode: "D-2",
    extent: "parent",
    // draggable: false,
    style: {
      width: 70,
      //   height: 50,
      backgroundColor: "#fff",
    },
  },
  {
    id: "D-3",
    data: { label: "SW" },
    position: { x: 195, y: 180 },
    parentNode: "D",
    extent: "parent",
    // draggable: false,
    style: {
      width: 60,
      backgroundColor: "#fff",
    },
  },

  //   Viptela Images Version Container
  {
    id: "E",
    type: "output",
    position: { x: 400, y: 50 },
    data: { label: "CA" },
    style: {
      width: 60,
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  //   Cloud Version Container
  {
    id: "F",
    type: "output",
    position: { x: 450, y: 150 },
    data: { label: "Physical_LAN" },
    style: {
      width: 80,
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  //   Internet / MPLS Cloud
  {
    id: "G",
    type: "output",
    position: { x: -25, y: 300 },
    data: { label: "Internet / MPLS Cloud" },
    style: {
      width: 200,
      backgroundColor: "#19cbb1",
      border: "1px solid #19cbb1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
];

export default nodes;
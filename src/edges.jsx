export default [
  //   { id: "a1-a2", source: "A-1", target: "A-2" },
  //   { id: "a2-b", source: "A-2", target: "B" },
  //   { id: "a2-c", source: "A-2", target: "C" },
  //   { id: "b1-b2", source: "B-1", target: "B-2" },
  //   { id: "b1-b3", source: "B-1", target: "B-3" },

  //   Pink Container 1
  {
    id: "A1-E",
    source: "A-1",
    target: "B",
    data: {
      startLabel: "eth0",
      endLabel: "e0/0",
      centerLabel: ".7",
    },
    type: "start-end",
  },
  {
    id: "A2-E",
    source: "A-2",
    target: "B",
    data: {
      startLabel: "eth0",
      endLabel: "e0/1",
      centerLabel: ".6",
    },
    type: "start-end",
  },

  //   Pink Container 2
  {
    id: "A_1-E",
    source: "A_1-1",
    target: "B_1",
    data: {
      startLabel: "eth0",
      endLabel: "e0/1",
      centerLabel: ".9",
    },
    type: "start-end",
  },
  {
    id: "A_2-E",
    source: "A_1-2",
    target: "B_1",
    data: {
      startLabel: "eth0",
      endLabel: "e0/0",
      centerLabel: ".8",
    },
    type: "start-end",
  },

  //   vEdge-1 to Host-1
  {
    id: "C_1-1-1-C_1-2",
    source: "C_1-1-1",
    target: "C_1-2",
    data: {
      startLabel: "ge0/2",
      endLabel: "e0/0",
      centerLabel: "192.198.1.0/24",
    },
    type: "start-end4",
  },

  //   vEdge-2 to Host-2
  {
    id: "C_2-1-1-C_2-2",
    source: "C_2-1-1",
    target: "C_2-2",
    data: {
      startLabel: "Gi3",
      endLabel: "e0/0",
      centerLabel: "192.168.3.0/24",
    },
    type: "start-end4",
  },

  //   vEdge-3 to Host-3
  {
    id: "C_3-1-1-C_3-2",
    source: "C_3-1-1",
    target: "C_3-2",
    data: {
      startLabel: "ge0/0",
      endLabel: "e0/0",
      centerLabel: "192.168.2.0/24",
    },
    type: "start-end4",
  },

  // Blue Container 1 to Internet/MPLS Cloud
  { id: "C_1-1-G", source: "C_1-1", target: "G" },

  // Blue Container 2 to Internet/MPLS Cloud
  { id: "C_2-1-G", source: "C_2-1", target: "G" },

  // Blue Container 3 to Internet/MPLS Cloud
  { id: "C_3-1-G", source: "C_3-1", target: "G" },

  // Blue Container 1 to Internet/MPLS Cloud 1
  {
    id: "C_1-1-G_1",
    source: "C_1-1",
    target: "G_1",
    data: {
      startLabel: "ge0/1",
      endLabel: "e0/1",
      centerLabel: "10.0.5.0/24",
    },
    type: "start-end1",
  },

  // Blue Container 2 to Internet/MPLS Cloud 1
  {
    id: "C_2-1-G_1",
    source: "C_2-1",
    target: "G_1",
    data: {
      startLabel: "Gi2",
      endLabel: null,
      centerLabel: "10.0.7.0/24",
    },
    type: "start-end1",
  },

  // Blue Container 3 to Internet/MPLS Cloud 1
  {
    id: "C_3-1-G_1",
    source: "C_3-1",
    target: "G_1",
    data: {
      startLabel: "ge0/1",
      endLabel: "e1/0",
      centerLabel: "10.0.9.0/24",
    },
    type: "start-end1",
  },

  // SW to vBond-1
  {
    id: "D-3-D-2-1",
    source: "D-3",
    target: "D-2-1",
    data: {
      startLabel: "e0/3",
      endLabel: "ge0/0",
    },
    type: "start-end2",
  },

  // SW to vBond-2
  {
    id: "D-3-D-2-2",
    source: "D-3",
    target: "D-2-2",
    data: {
      startLabel: "e1/0",
      endLabel: "ge0/0",
    },
    type: "start-end2",
  },

  // SW to CA
  { id: "D-3-E", source: "D-3", target: "E" },

  // SW to Internet / MPLS Cloud
  {
    id: "D-3-G",
    source: "D-3",
    target: "G",
    data: {
      startLabel: "e1/1",
      endLabel: null,
      centerLabel: "10.0.1.0/24",
    },
    type: "start-end1",
  },

  // SW to Internet / MPLS Cloud 1
  {
    id: "D-3-G_1",
    source: "D-3",
    target: "G_1",
    data: {
      startLabel: "e1/2",
      endLabel: null,
      centerLabel: "10.0.2.0/24",
    },
    type: "start-end1",
  },

  // SW to vManage 1
  {
    id: "D-3-D-1-1",
    source: "D-3",
    target: "D-1-1",
    data: {
      startLabel: "e0/0",
      endLabel: "eth0",
    },
    type: "start-end2",
  },

  // SW to vManage 2
  {
    id: "D-3-D-1-2",
    source: "D-3",
    target: "D-1-2",
    data: {
      startLabel: "e0/1",
      endLabel: "eth0",
    },
    type: "start-end2",
  },

  // SW to vManage 3
  {
    id: "D-3-D-1-3",
    source: "D-3",
    target: "D-1-3",
    data: {
      startLabel: "e0/2",
      endLabel: "eth0",
    },
    type: "start-end2",
  },

  // vManage 0 to vManage 1
  {
    id: "D-1-0-D-1-1",
    source: "D-1-0",
    target: "D-1-1",
    data: {
      startLabel: "e0/0",
      endLabel: "eth1",
    },
    type: "start-end3",
  },

  // vManage 0 to vManage 2
  {
    id: "D-1-0-D-1-2",
    source: "D-1-0",
    target: "D-1-2",
    data: {
      startLabel: "e0/2",
      endLabel: "eth1",
    },
    type: "start-end3",
  },

  // vManage 0 to vManage 3
  {
    id: "D-1-0-D-1-3",
    source: "D-1-0",
    target: "D-1-3",
    data: {
      startLabel: "e0/1",
      endLabel: "eth1",
    },
    type: "start-end3",
  },

  // CA to Physical LAN
  { id: "E-1-F_1", source: "E-1", target: "F_1" },

  // SW to Internet / MPLS Cloud
  {
    id: "B-1-G",
    source: "B-1",
    target: "G",
    data: {
      startLabel: "e0/2",
      endLabel: "e0/2",
      centerLabel: "10.0.3.0/24",
    },
    type: "start-end1",
  },

  // SW to Internet / MPLS Cloud 1
  {
    id: "B_1-1-G_1",
    source: "B_1-1",
    target: "G_1",
    data: {
      startLabel: "e0/2",
      endLabel: "e0/2",
      centerLabel: "10.0.10.0/24",
    },
    type: "start-end1",
  },
];
